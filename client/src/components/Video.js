import styled from "styled-components";
import React from "react";

const Video = () => {
  return (
    <Wrapper>
      <MainVideoWrapper>
        <video
          width="960px"
          height="540px"
          controls
          loop="true"
          // autoplay="true"
        >
          <source src="/assets/Original.mp4" type="video/mp4"></source>
        </video>
      </MainVideoWrapper>
      <OverlayVideoWrapper>
        <video
          width="960px"
          height="540px"
          loop="true"
          // autoplay="true"
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
  /* width: 960px;
  height: 540px;
  overflow: hidden; */
`;

export default Video;

// let range = document.querySelector("#range");
// let form = document.querySelector("#form");
// let video = document.querySelector("#video");

// range.addEventListener("input", function () {
//   form.style["font-size"] = this.value + "em";
// });

// range.addEventListener("input", function () {
//   video.style["width"] = this.value + "em";
// });

{
  /* <Slider>
      {" "}
  <input
  type="range"
    id="range"
    min="1.0"
    max="3.0"
    step="0.1"
    value="2.0"
    />
    <Form id="form">
    <Label for="">Label</Label>
    </Form>
    </Slider> */
}
