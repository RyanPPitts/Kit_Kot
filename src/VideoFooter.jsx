/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3> @RyanPitts</h3>
        <p> The funniest dog on TikTok</p>
        <MusicNoteIcon />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>Yooo Whats up guys</h1>
            </>
          )}
        </Ticker>
      </div>

      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
      />
    </div>
  );
}

export default VideoFooter;

// Anything shown at the bottom of a video is in the footer component
