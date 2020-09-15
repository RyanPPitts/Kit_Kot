/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './VideoFooter.css';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3> @RyanPitts</h3>
        <p> The funniest dog on TikTok</p>
      </div>

      {/* Spinner and scrolling text */}
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
      />
    </div>
  );
}

export default VideoFooter;

// Anything shown at the bottom of a video is in the footer component
