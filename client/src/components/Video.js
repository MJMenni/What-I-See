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
        <video width={960} height={540} loop={true} controls autoPlay={true}>
          <source src="/assets/Original.mp4" type="video/mp4"></source>
        </video>
      </MainVideoWrapper>
      <OverlayVideoWrapper onLoad={videoRate} style={{ opacity: opacity / 20 }}>
        <video
          id="vid2"
          width={size * size * size + 1000}
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
  display: flex;
  position: relative;
  /* width: 960px; */
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  video {
    border: 4px pink solid;
    max-width: 100%;
    overflow: hidden;
  }
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
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  max-width: 100%;
  /* opacity: 40%;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0; */
  border: 5px green solid;

  /* top: 0;
  left: 0;
  bottom: 0;
  right: 0; */

  /* position: sticky; */
  /* display: block; */
  /* flex-grow: 0; */
  /* margin-left: auto;
  margin-right: auto; */
  /* float: left; */
  /* vertical-align: top; */
  /* box-sizing: border-box; */
  /* width: fit-content; */
`;

export default Video;
