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
        <video width={960} height={540} loop={true} controls autoplay={true}>
          <source src="/assets/Original.mp4" type="video/mp4"></source>
        </video>
      </MainVideoWrapper>
      <OverlayVideoWrapper onLoad={videoRate} style={{ opacity: opacity / 20 }}>
        <video
          id="vid2"
          width={size * 2048}
          height={size * 512}
          autoPlay={true}
          loop={true}
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
  margin-top: 20px;
  display: flex;
  margin-bottom: 150px;
`;

const MainVideoWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
`;

const OverlayVideoWrapper = styled.div`
  position: absolute;
  opacity: 40%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
`;

export default Video;
