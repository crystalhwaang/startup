import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthState } from './authState';

export function Login({ onAuthChange }) {
  const [userName, setUserName] = React.useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    localStorage.setItem('userName', userName);

    onAuthChange(userName, AuthState.Authenticated);

    navigate('/recipe'); // go to app
  }

  return (
    <main>
      <h1>Welcome to Food Fetch</h1>
        <div className="container">
          <div className="row justify-content-center align-items-center">
             <div className="col-12 col-sm-8 col-md-6 col-lg-4">
               <div className="card shadow">
                 <div className="card-body p-4">
                   <h2 className="text-center mb-4">Login</h2>
                      <form onSubmit={handleLogin}>
                        <input
                          className="form-control mb-2"
                          placeholder="email"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />

                        <input
                          type="password"
                          className="form-control mb-2"
                          placeholder="password"
                        />

                        <button className="btn btn-primary">
                          Login
                        </button>
                      </form>
                      </div>
                   </div>
               </div>
           </div>
         </div>
         <div>
           <span>
               <br></br>
               <br></br>
             <p>DB Placeholder - Users will be stored</p>
           </span>
         </div>
    </main>
  );
}