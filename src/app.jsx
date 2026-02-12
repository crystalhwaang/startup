import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div>
        <header>
        <h1>Food Fetch</h1>
        <nav>
            <menu>
            <li><a href="index.html" className='main-color'>Home</a></li>
            <li><a href="recipe.html" className='main-color'>Recipes</a></li>
            <li><a href="photo.html" className='main-color'>Photo Gallery</a></li>
            </menu>
        </nav>
        </header>

        <main>App components go here</main>

        <footer>
        <hr />
        <span className="text-reset">Crystal Hwang </span>
        <br />
        <a href="https://github.com/crystalhwaang/startup">GitHub</a>
        </footer>
    </div>
  );
}