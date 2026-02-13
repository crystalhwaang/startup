import React from 'react';
import './photo.css';

export function Photo() {
  return (
    <main>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700,636" className="card-img-top" alt="Photo 1"></img>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg" className="card-img-top" alt="Photo 2"></img>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="https://images.immediate.co.uk/production/volatile/sites/30/2017/08/crispy-sesame-lemon-chicken-8830c24.jpg?quality=90&resize=708,643" className="card-img-top" alt="Photo 3"></img>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="https://hips.hearstapps.com/hmg-prod/images/easy-dinner-recipes-slow-cooker-beef-and-broccoli-677efebf44ae8.png" className="card-img-top" alt="Photo 4"></img>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="https://www.tasteofhome.com/wp-content/uploads/2024/10/EXPS_TOHD24_167133_SarahTramonte_6.jpg?w=700" className="card-img-top" alt="Photo 1"></img>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQml1KOWaPTPgp1gxV-x9zvb3sIjDs9T9XO2g&s" className="card-img-top" alt="Photo 2"></img>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="https://cdn.loveandlemons.com/wp-content/uploads/2024/09/vegetable-side-dishes.jpg" className="card-img-top" alt="Photo 3"></img>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-sm">
            <img src="https://www.simplyrecipes.com/thmb/kTh0yVR2KrJFnGQPNGe1UYIG1t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Ground-Beef-Broccoli-LEAD-6-faafd703b949408ba35b3199cd5a22e9.jpg" className="card-img-top" alt="Photo 4"></img>
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