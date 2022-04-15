import styled from "styled-components";
import React from "react";

const Video = ({ stats }) => {
  const { size, opacity, speed } = stats;

  const vidOverlay = document.getElementById("vid2");
  const videoRate = () => {
    vidOverlay.playbackRate = 2;
  };

  return (
    <Wrap>
      <MainVideoWrap>
        <video width={960} height={540} loop={true} controls>
          <source src="/assets/Original.mp4" type="video/mp4"></source>
        </video>
      </MainVideoWrap>
      <OverlayVideoWrap onLoad={videoRate} style={{ opacity: opacity / 20 }}>
        <video id="vid2" width={960 * size} autoPlay={true} loop={true} muted>
          <source src="/assets/Overlay.mp4" type="video/mp4"></source>
        </video>
      </OverlayVideoWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 960px;
  margin-left: auto;
  margin-right: auto;

  video::-webkit-media-controls-current-time-display,
  video::-webkit-media-controls-time-remaining-display,
  video::-webkit-media-controls-fullscreen-button {
    display: none;
    video {
      object-fit: none;
    }
  }
  video::-webkit-media-controls-timeline {
    display: none;
  }
`;

const MainVideoWrap = styled.div`
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const OverlayVideoWrap = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  pointer-events: none;
`;

export default Video;
