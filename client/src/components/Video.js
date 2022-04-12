import styled from "styled-components";
import React from "react";
import SliderContext from "./SliderContext";
import { useContext } from "react";

const Video = ({ stats }) => {
  const { size, opacity, speed } = stats;

  const vidOverlay = document.getElementById("vid2");
  const videoRate = () => {
    vidOverlay.playbackRate = 0.5;
  };
  return (
    <Wrapper>
      <MainVideoWrapper>
        <video width={960} height={540} loop={true} controls>
          <source src="/assets/Original.mp4" type="video/mp4"></source>
        </video>
      </MainVideoWrapper>
      <OverlayVideoWrapper onLoad={videoRate} style={{ opacity: opacity / 20 }}>
        <video
          id="vid2"
          width={1000 * size * size}
          autoPlay={true}
          loop={true}
          // height={size * 512}
          // controls
          // playbackRate={0.5}
          muted
        >
          <source src="/assets/Overlay.mp4" type="video/mp4"></source>
        </video>
      </OverlayVideoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 960px;
  margin-left: auto;
  margin-right: auto;
  /* border: 4px yellow solid; */
  /* display: flex; */

  video {
    object-fit: none;
    /* border: 4px pink solid; */
    /* max-width: 100%; */
    /* overflow: hidden; */
  }
`;

const MainVideoWrapper = styled.div`
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
`;

const OverlayVideoWrapper = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
  /* border: 5px green solid; */
  /* margin-left: auto;
  margin-right: auto; */
  /* overflow: hidden; */
  /* max-width: 100%; */
  /* opacity: 40%;
  margin: auto;
  top: 0;
  left: 0; */
`;

export default Video;
