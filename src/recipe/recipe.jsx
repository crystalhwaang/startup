import React from 'react';
import './recipe.css';

export function Recipe() {
  return (
    <main>
      <div class = "container">
        <br></br>
        <h1>Ingredients</h1>
        <form method="get" action="play.html">
          <div>
            <span>Enter ingredients here:</span>
            <input type="text" placeholder="e.g. chicken, rice" />
          </div>
        <br></br>
        </form>
        <h1><u>Recipes Suggested</u></h1>
        <br></br>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100">
               <img src="https://www.tasteofhome.com/wp-content/uploads/2025/07/Best-Lasagna_EXPS_ATBBZ25_36333_DR_07_01_2b.jpg" className="card-img-top" alt="Example image"></img>

              <div className="card-body">
                <h5 className="card-title">Lasagna</h5>
                <p className="card-text"></p>
                <a href="https://www.tasteofhome.com/recipes/best-lasagna/" className="btn btn-primary">Link to Recipe</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
               <img src="https://cdn.loveandlemons.com/wp-content/uploads/2024/03/lemon-pasta.jpg" className="card-img-top" alt="Example image"></img>

              <div className="card-body">
                <h5 className="card-title">Lemon Pasta</h5>
                <a href="https://www.loveandlemons.com/lemon-pasta/" className="btn btn-primary">Link to Recipe</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://www.allrecipes.com/thmb/nO3iistRRBHuMCz1Gr_0XuMGaWg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-8513545-penne-alla-vodka-VAT-hero-4x3-2-4a53c968c3d94a32816f01f5793702ce.jpg" className="card-img-top" alt="Example image"></img>

              <div className="card-body">
                <h5 claclassNamess="card-title">Penne Alla Vodka</h5>
                <a href="https://www.allrecipes.com/recipe/8513545/penne-alla-vodka/" className="btn btn-primary">Link to Recipe</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="https://i0.wp.com/smittenkitchen.com/wp-content/uploads//2019/03/perfect-spaghetti-and-meatballs.jpg?fit=1200%2C800&ssl=1" className="card-img-top" alt="Example image"></img>

              <div className="card-body">
                <h5 className="card-title">Spaghetti & Meatballs</h5>
                <a href="https://smittenkitchen.com/2019/03/perfect-meatballs-and-spaghetti/" className="btn btn-primary">Link to Recipe</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}