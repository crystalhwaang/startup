import React from 'react';
import { PostNotifier, PostEvent } from './postNotifier';

export function Uploads({ userName }) {
  const [foodName, setFoodName] = React.useState('');
  const [image, setImage] = React.useState(null);

  function handleUpload(e) {
    e.preventDefault();

    if (!foodName) return;

    localStorage.setItem(
      'lastUpload',
      JSON.stringify({ foodName })
    );

    PostNotifier.broadcastEvent(
      userName,
      PostEvent.Upload,
      {
        food: foodName,
        date: new Date().toLocaleTimeString(),
      }
    );

    setFoodName('');
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