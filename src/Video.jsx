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
        src="https://v16-web-newkey.tiktokcdn.com/3c41ce1020acd05de916d57ee8e4d9aa/5f6b1afb/video/tos/useast2a/tos-useast2a-ve-0068c004/30e5657471504a5e8c0d5ad7cc8dcbe4/?a=1988&br=3626&bt=1813&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200923035213010190209088130119EB&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ams3N25xbmU8dzMzZTczM0ApNTw6OTg7aGQ2NzlkODM0ZWdlLW5iYGI0bmlfLS0wMTZzcy40LzJeLmAvNjU1LTNfYl86Yw%3D%3D&vl=&vr="
      ></video>
      <h1>This is a video component</h1>
      <VideoFooter />
      {/* <VideoSidebar /> */}
    </div>
  );
}

export default Video;
