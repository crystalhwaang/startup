import React, { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); 
    console.log(email, password);
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

                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text">🔒</span>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}