import React from 'react';
import './photo.css';

export function Photo(props) {
  const [imageUrl, setImageUrl] = React.useState('');
  const [dishName, setDishName] = React.useState('Loading...');

  React.useEffect(() => {
    setImageUrl(`../../public/zucchiniBoats.jpg`);
    setDishName('Zucchini Boats');
  }, []);

  return (
    <main>
      <div>
        <div className="col">
          <div className="card h-100 shadow-sm top-padding">
            <img src={imageUrl} alt="Photo 1"></img>
          </div>
          <div className="card h-100 shadow-sm">
            <p>{dishName}</p>
          </div>
        </div>
      </div>
        <span>
            <h3>Database Data Here</h3>
            <h3>Websocket Data Here</h3>
        </span>
    </main>
  );
}