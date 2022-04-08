import styled from "styled-components";
import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  let range = document.querySelector("#range");
  let form = document.querySelector("#form");
  let video = document.querySelector("#video");

  return (
    <Wrapper>
      <MainVideoWrapper>
        <ReactPlayer
          url="https://www.youtube.com/embed/ProM7N7v0cE?rel=0"
          loop="true"
          controls="false"
          // playing="true"
        />
      </MainVideoWrapper>
      <OverlayVideoWrapper>
        <ReactPlayer
          url="https://www.youtube.com/embed/UCfKKW65q7Y?rel=0"
          loop="true"
          controls="false"
          // playing="true"
        />
      </OverlayVideoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainVideoWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  margin-top: 125px;

  /* top: 90%;
  left: 50%; */
  /* top: 0;
  left: 0; */
  /* transform: translate(70%, 30%); */
  /* transform: translateY(-50%); */
  /* width: 100%;
  height: 100%;
  bottom: 0; */
`;

const OverlayVideoWrapper = styled.div`
  position: absolute;
  opacity: 40%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  margin-top: 125px;
  /* transform: translate(70%, 30%); */
  /* top: 90%;
  left: 50%; */
  /* transform: translate(-50%, 0%); */
  /* transform: translateY(-50%); */
`;

export default Video;

//Slider (former attempt)
// const Label = styled.div`
//   display: block;
//   font-weight: bold;
// `;

// const Form = styled.form`
//   font-size: 2em;
//   background: #ccc;
//   padding: 20px;
//   max-width: 500px;
//   margin: 20px auto;
// `;

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

//Prev video player
{
  /* <VideoContainer className="plyr__video-embed" id="player">
          <MainVideoWrapper>
            <iframe
              width="640"
              height="480"
              src="https://www.youtube.com/embed/ProM7N7v0cE?rel=0"
              title="YouTube video player"
              frameborder="0"
              modestbranding="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; transparency; picture-in-picture; loop; autopause=0"
              allowfullscreen
              className="userVideo"
            ></iframe>
          </MainVideoWrapper>
  
          <OverlayVideoWrapper className="plyr__video-embed" id="video">
            <iframe
              id="overlay"
              width="640"
              height="480"
              modestbranding="0"
              src="https://www.youtube.com/embed/UCfKKW65q7Y?rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop; autopause=0"
              allowfullscreen
              className="peerVideo"
            ></iframe>
          </OverlayVideoWrapper>
        </VideoContainer> */
}
