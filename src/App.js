import React from 'react';
import logo from './avatar.jpg';
import './App.css';
import { Button } from '@material-ui/core';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>金城　功弥</h1>
        <p>
          1984年　４月　２８日
        </p>

      </header>
    </div>
  );
}

export default App;
