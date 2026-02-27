import React from 'react';
import './recipe.css';

export function Recipe(props) {
  const [imageUrl, setImageUrl] = React.useState('');
  const [dishName, setDishName] = React.useState('Loading...');
  const [dishLink, setDishLink] = React.useState('Loading...');

  React.useEffect(() => {
    setImageUrl(`https://www.tasteofhome.com/wp-content/uploads/2025/07/Best-Lasagna_EXPS_ATBBZ25_36333_DR_07_01_2b.jpg`);
    setDishName('Lasagna');
    setDishLink('https://www.tasteofhome.com/recipes/best-lasagna/');
  }, []);

  return (
    <main>
      <div class = "container">
        <br></br>
        {/* <form method="get" action="play.html">
          <div>
            <span>Enter ingredients here:</span>
            <input type="text" placeholder="e.g. chicken, rice" />
          </div>
        <br></br>
        </form> */}
        <br></br>
        <div className="row row-cols-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card h-100">
               <img src={imageUrl} className="card-img-top" alt={dishName}></img>
              <div className="card-body">
                <h5 className="card-title">{dishName}</h5>
                <p className="card-text"></p>
                <a href={dishLink} className="btn btn-primary">Link to Recipe</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}