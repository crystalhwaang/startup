import React from 'react';
import { PostNotifier, PostEvent } from './postNotifier';

export function Uploads({ userName, onUploadSuccess }) {
  const [foodName, setFoodName] = React.useState('');
  const [image, setImage] = React.useState(null);

  async function handleUpload(e) {
    e.preventDefault();

    if (!foodName) return;

    await savePhotoUpload(userName, foodName, image, onUploadSuccess);

    setFoodName('');
    setImage(null);
  }

  return (
    <div className="card p-3">
      <h4>Upload Food</h4>

      <form onSubmit={handleUpload}>
        <input
          className="form-control mb-2"
          placeholder="Food name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />

        <input
          type="file"
          className="form-control mb-2"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button className="btn btn-primary">
          Upload
        </button>
      </form>
    </div>
  );
}

async function savePhotoUpload(userName, foodName, image, onUploadSuccess) {
  const date = new Date().toLocaleString();

  const newPhoto = {
    userName,
    food: foodName,
    date,
    imageName: image ? image.name : undefined,
  };

  const response = await fetch('/api/photo', {
    method: 'POST',
    credentials: 'include',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newPhoto),
  });

  if (!response.ok) {
    return;
  }

  onUploadSuccess?.();

  // Let other clients know a new photo was uploaded
  PostNotifier.broadcastEvent(userName, PostEvent.Upload, newPhoto);
}