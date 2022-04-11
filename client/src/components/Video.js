import styled from "styled-components";
import React from "react";
import SliderContext from "./SliderContext";
import { useContext } from "react";

const Video = ({ stats }) => {
  const { size, opacity, speed } = stats;
  return (
    <Wrapper>
      <MainVideoWrapper>
        <video
          width="960px"
          height="540px"
          loop={true}
          controls
          // autoplay={true}
        >
          <source src="/assets/Original.mp4" type="video/mp4"></source>
        </video>
      </MainVideoWrapper>
      <OverlayVideoWrapper>
        <video
          width={size}
          height={"540px"}
          loop={true}
          // autoplay={true}
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
  margin-bottom: 150px; ;
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
