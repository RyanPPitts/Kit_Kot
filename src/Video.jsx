import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar.jsx';

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
        src="https://v19-web-newkey.tiktokcdn.com/2a968d2b6a399e5ff2963e6226af5321/5f6d8f48/video/tos/useast2a/tos-useast2a-ve-0068c004/30e5657471504a5e8c0d5ad7cc8dcbe4/?a=1988&br=3626&bt=1813&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009250032580101880612190305969D&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ams3N25xbmU8dzMzZTczM0ApNTw6OTg7aGQ2NzlkODM0ZWdlLW5iYGI0bmlfLS0wMTZzcy40LzJeLmAvNjU1LTNfYl86Yw%3D%3D&vl=&vr="
      ></video>
      <h1>This is a video component</h1>
      <VideoFooter
        channel="ryanpitts"
        description="Check this out"
        song="Come and Go"
      />

      <VideoSidebar likes={111} messages={222} shares={333} />
    </div>
  );
}

export default Video;
