import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <h1>
        KitKot.com the newest competitor for TikTok. Only $79 billion(thats a $1
        billion dollar savings)
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
