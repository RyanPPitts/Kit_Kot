import React from 'react';
import './Video.css';

function Video() {
  // React hooks to create video reference or starting point
  const videoRef = useRef(null);

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        src="https://v77.tiktokcdn.com/ea1ec85a6d49701d66a407d064a6f06b/5f60dd7a/video/tos/useast2a/tos-useast2a-ve-0068c004/37167b8e198e4aba937e2d06aa8d82a2/?a=1233&br=3016&bt=1508&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020091509274001018907401231001DC4&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajN1eW06OG90dTMzMzczM0ApZDg2N2dpN2Q8Nzw7ZGhlZmdiaWFtLmRvXmdfLS1iMTZzcy9hNjVgNjZjLzEuNC9gNC06Yw%3D%3D&vl=&vr="
      ></video>
      <h1>This is a video component</h1>
      {/* <VideoFooter /> */}
      {/* <VideoSidebar /> */}
    </div>
  );
}

export default Video;
