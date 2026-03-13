import React from 'react';
import './recipe.css';

export function Recipe(props) {
  const [imageUrl, setImageUrl] = React.useState('');
  const [dishName, setDishName] = React.useState('Loading...');
  const [dishLink, setDishLink] = React.useState('Loading...');

  React.useEffect(() => {
    // Fetch a random recipe from TheMealDB
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => {
        const meal = data?.meals?.[0];
        if (!meal) {
          return;
        }

        setImageUrl(meal.strMealThumb);
        setDishName(meal.strMeal);

        const sourceLink =
          meal.strSource ||
          meal.strYoutube ||
          `https://www.themealdb.com/meal/${meal.idMeal}`;
        setDishLink(sourceLink);
      })
      .catch((error) => {
        console.error('Error fetching random recipe', error);
        setDishName('Unable to load recipe');
      });
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