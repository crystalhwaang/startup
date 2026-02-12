import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Photo } from './photo/photo';
import { Recipe } from './recipe/recipe';
import { Login } from './login/login';

export default function App() {
  return (
    <BrowserRouter>
      <div>
          <header>
          <h1>Food Fetch</h1>
          <nav>
              <menu>
              <li><NavLink to="index" className='main-color'>Home</NavLink></li>
              <li><NavLink to="recipe" className='main-color'>Recipes</NavLink></li>
              <li><NavLink to="photo" className='main-color'>Photo Gallery</NavLink></li>
              </menu>
          </nav>
          </header>

          <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/recipe' element={<Recipe />} />
            <Route path='/Photo' element={<Photo />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          <footer>
          <hr />
          <span className="text-reset">Crystal Hwang </span>
          <br />
          <a href="https://github.com/crystalhwaang/startup">GitHub</a>
          </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}