import styled from "styled-components";
// import ReactAudioPlayer from "react-audio-player";
import { useState } from "react";

const Dropdown = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  let currentlyPlaying = [];
  let newCurrentlyPlaying = [];

  console.log("currentlyPlaying", currentlyPlaying);
  console.log("isPlaying", isPlaying);
  return (
    <OuterWrap>
      <DropWrap>
        <SymptomsLabel>Tinnitus</SymptomsLabel>
        <AudioOuterWrap>
          <TinnitusType>Static</TinnitusType>
          <AudioWrap>
            <audio
              src="assets/Static.mp3"
              controls
              id="static"
              loop
              onPlay={(e) => {
                currentlyPlaying.push(e.target.id);
                console.log("is playing", e.target.id);
                setIsPlaying(e.target.id);
              }}
              onPause={(e) => {
                console.log("is paused", e.target.id);
              }}
            />
          </AudioWrap>
          <TinnitusType>Kettle</TinnitusType>
          <AudioWrap>
            <audio src="assets/TeaKettle.mp3" controls id="kettle" loop />
          </AudioWrap>
          <TinnitusType>Roaring</TinnitusType>
          <AudioWrap>
            <audio src="assets/Roaring.mp3" controls id="roaring" loop />
          </AudioWrap>
          <TinnitusType>Electric</TinnitusType>
          <AudioWrap>
            <audio src="assets/Electric.mp3" controls id="electric" loop />
          </AudioWrap>
          <TinnitusType>Buzzing</TinnitusType>
          <AudioWrap>
            <audio src="assets/buzzing.mp3" controls id="buzzing" loop />
          </AudioWrap>
          <TinnitusType>Screeching</TinnitusType>
          <AudioWrap>
            <audio src="assets/Screeching.mp3" controls id="screeching" loop />
          </AudioWrap>
        </AudioOuterWrap>
        <SymptomsLabel>Notes</SymptomsLabel>
        <NotesInput
          placeholder="Feel free to add notes here. For example: &#10;Apr-20-2022 – Intense after-images and light sensitivity, especially when walking through the mall. Noticed static, tinnitus, and floaters increased as the day went on. Possible triggers: work-related stress, exposure to intense lighting, too much screen time."
        ></NotesInput>
      </DropWrap>
    </OuterWrap>
  );
};

const OuterWrap = styled.div`
  display: flex;
  max-width: 956px;
  margin-right: auto;
  margin-left: auto;
`;

const DropWrap = styled.div`
  width: 85%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  line-height: 24px;
`;

const SymptomsLabel = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin: 40px 0px 25px 0px;
`;

const NotesInput = styled.textarea`
  border: var(--blue) 1px solid;
  min-height: 175px;
  width: 85%;
  margin-right: auto;
  margin-left: auto;
  padding: 25px;
  border-radius: 5px;
  line-height: 24px;
  font-size: 16px;
`;

const AudioOuterWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 85%;
  background-color: #f1f3f4;
  padding: 15px 5px 15px 35px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
`;

const AudioWrap = styled.div`
  margin: 10px;
  display: flex;
  width: 30%;
  margin-left: auto;
  margin-right: auto;

  audio::-webkit-media-controls-current-time-display,
  audio::-webkit-media-controls-time-remaining-display {
    display: none;
  }
  audio::-webkit-media-controls-timeline,
  video::-webkit-media-controls-timeline {
    display: none;
  }
`;

const TinnitusType = styled.div`
  margin-top: 25px;
  font-weight: 900;
  width: 15%;
  height: 15%;
`;

export default Dropdown;
