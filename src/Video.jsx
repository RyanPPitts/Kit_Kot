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
        src="https://v16-web-newkey.tiktokcdn.com/12de1138a4e769cf714f1b7066ed661c/5f6b19f6/video/tos/useast2a/tos-useast2a-ve-0068c002/704d4e00a1bd4ea39e083bd0043105cf/?a=1988&br=3102&bt=1551&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009230347570101890741644101115C&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M21vZ3Y4OXE0dzMzZzczM0ApZWQ8Zjw6NGU6N2U8NTpkO2dgZW8tZ28zZGRfLS1gMTZzczZfX2IxYTNhLjU1YV5eMl46Yw%3D%3D&vl=&vr="
      ></video>
      <h1>This is a video component</h1>
      <VideoFooter />
      {/* <VideoSidebar /> */}
    </div>
  );
}

export default Video;
