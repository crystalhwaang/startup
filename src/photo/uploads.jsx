import React from 'react';
import { PostNotifier, PostEvent } from './postNotifier';

export function Uploads({ userName }) {
  const [foodName, setFoodName] = React.useState('');
  const [image, setImage] = React.useState(null);

  async function handleUpload(e) {
    e.preventDefault();

    if (!foodName) return;

    localStorage.setItem(
      'lastUpload',
      JSON.stringify({ foodName })
    );

    await savePhotoUpload(userName, foodName, image);

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

async function savePhotoUpload(userName, foodName, image) {
  const date = new Date().toLocaleString();

  const newPhoto = {
    userName,
    food: foodName,
    date,
    imageName: image ? image.name : undefined,
  };

  await fetch('/api/photo', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newPhoto),
  });

  // Let other users know a new photo was uploaded
  PostNotifier.broadcastEvent(userName, PostEvent.Upload, newPhoto);
}