import React from 'react';
import './App.css';
import Video from './Video.js';

function App() {
  return (
    <div className="app">
      <h1>
        KitKot.com the newest competitor for Tik Tok.Willing to sell for only
        $79 billion(thats a $1 billion dollar savings)
      </h1>
      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
