import React from 'react';
import { Authenticated } from './authenticated';
import { Unauthenticated } from './unauthenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="container text-center">

      <h1>Welcome to Food Fetch</h1>
      {authState === AuthState.Unauthenticated && (
        <Unauthenticated
          userName={userName}
          onLogin={(loginUserName) => onAuthChange(loginUserName, AuthState.Authenticated)}/>)}

      {authState === AuthState.Authenticated && (
        <Authenticated
          userName={userName}
          onLogout={() => onAuthChange('', AuthState.Unauthenticated)}/>)}
    </main>
  );
}