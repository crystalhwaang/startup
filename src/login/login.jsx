import React from 'react';

export function Login() {
  return (
    <main>
      <h1>Welcome to Food Fetch</h1>
      <div className="container">
        <div className="row justify-content-center align-items-center">
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                <div className="card shadow">
                    <div className="card-body p-4">
                        <h2 className="text-center mb-4">Login</h2>
                        <form method="get" action="../recipe">
                            <div className="input-group mb-3">
                                <span className="input-group-text">@</span>
                                <input className="form-control" type="text" placeholder="your@email.com" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">🔒</span>
                                <input className="form-control" type="password" placeholder="password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <button type="submit" className="btn btn-secondary">Create</button>
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