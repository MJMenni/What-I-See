import styled from "styled-components";
import React from "react";

const Video = ({ stats }) => {
  const { size, opacity, speed } = stats;

  const vidOverlay = document.getElementById("vid2");
  const videoRate = () => {
    vidOverlay.playbackRate = 0.5;
  };

  return (
    <Wrap>
      <MainVideoWrap>
        <video width={960} height={540} loop={true} controls>
          <source src="/assets/Original.mp4" type="video/mp4"></source>
        </video>
      </MainVideoWrap>
      <OverlayVideoWrap onLoad={videoRate} style={{ opacity: opacity / 20 }}>
        <video
          id="vid2"
          width={1000 * size * size}
          autoPlay={true}
          loop={true}
          muted
          // height={size * 512}
          // controls
          // playbackRate={0.5}
        >
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
  /* border: 4px yellow solid; */

  video::-webkit-media-controls-current-time-display,
  video::-webkit-media-controls-time-remaining-display,
  video::-webkit-media-controls-fullscreen-button {
    display: none;
    video {
      object-fit: none;

      /* border: 4px pink solid; */
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
  width: fit-content;
`;

const OverlayVideoWrap = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
  /* border: 5px green solid; */
`;

export default Video;
