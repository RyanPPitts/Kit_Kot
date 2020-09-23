import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';

function Video() {
  // Creating piece of state for playing/pause video - react variable
  const [playing, setPlaying] = useState(false);
  // React hooks to create video reference or starting point
  // This will allow us to play and pause the video within the app
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v77.tiktokcdn.com/dbc2ba068d0619598315e927dd8b97c5/5f61dd91/video/tos/useast2a/tos-useast2a-ve-0068c002/656c4ef4f4964c28a445a863cc447f8a/?a=1233&br=3950&bt=1975&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200916033957010190209102250069AB&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3NkOjR2bDk4dzMzNDczM0ApOTxkO2g6Mzs3N2RoOzMzN2cvazIybzBsXjJfLS02MTZzc14zMGBfM2FfNjI0YTBiMmM6Yw%3D%3D&vl=&vr="
      ></video>
      <h1>This is a video component</h1>
      <VideoFooter />
      {/* <VideoSidebar /> */}
    </div>
  );
}

export default Video;
