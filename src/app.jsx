import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Photo } from './photo/photo';
import { Recipe } from './recipe/recipe';
import { Login } from './login/login';
import { AuthState } from './login/authState';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div>
          <header>
          <h1>Food Fetch</h1>
          <nav>
              <menu>
                {authState !== AuthState.Authenticated && (
                  <li>
                    <NavLink className="nav-link" to="/">
                      Login
                    </NavLink>
                  </li>
                )}

                {authState === AuthState.Authenticated && (
                  <>
                    <li>
                      <NavLink className="nav-link" to="/">
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/recipe">
                        Recipes
                      </NavLink>
                    </li>

                    <li>
                      <NavLink className="nav-link" to="/photo">
                        Photo Gallery
                      </NavLink>
                    </li>
                  </>
                )}
              </menu>
            </nav>
          </header>

          <Routes>
            <Route
              path='/'
              element={
                <Login
                  userName={userName}
                  authState={authState}
                  onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                  }}
                />
              }
              exact
            />
            {/* <Route path='/' element={<Login />} exact /> */}
            <Route path='/recipe' element={<Recipe />} />
            <Route path='/photo' element={<Photo />} />
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

export default App;