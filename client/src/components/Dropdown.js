import styled from "styled-components";
import { useState, useEffect } from "react";

const Dropdown = ({ audio, setAudio }) => {
  const initValue = {
    Static: false,
    Roaring: false,
    Buzzing: false,
    Kettle: false,
    Electric: false,
    Screeching: false,
  };
  const [stats, setStats] = useState(initValue);

  console.log(stats);
  const onClickHandler = (event) => {
    //click triggered
    event.preventDefault();

    //change the stat target value
    console.log(event.target.id);
    const key = event.target.id;
    setStats((prev) => {
      return { ...prev, [key]: !prev[key] };
    });
  };

  useEffect(() => {
    console.log(stats);
  }, [stats]);

  return (
    <Wrap>
      <InnerWrap>
        <SymptomsLabel>Tinnitus</SymptomsLabel>
        <AudioOuterWrap>
          <TinnitusType>Static</TinnitusType>
          <AudioWrap>
            <audio
              src="assets/Static.mp3"
              id="Static"
              controls
              loop
              onPlay={(e) => {
                onClickHandler(e);
              }}
              onPause={(e) => {
                onClickHandler(e);
              }}
            />
          </AudioWrap>

          <TinnitusType>Kettle</TinnitusType>
          <AudioWrap>
            <audio
              src="assets/Kettle.mp3"
              controls
              id="Kettle"
              loop
              onPlay={(e) => {
                onClickHandler(e);
              }}
              onPause={(e) => {
                onClickHandler(e);
              }}
            />
          </AudioWrap>
          <TinnitusType>Roaring</TinnitusType>
          <AudioWrap>
            <audio
              src="assets/Roaring.mp3"
              controls
              id="Roaring"
              loop
              onPlay={(e) => {
                onClickHandler(e);
              }}
              onPause={(e) => {
                onClickHandler(e);
              }}
            />
          </AudioWrap>
          <TinnitusType>Electric</TinnitusType>
          <AudioWrap>
            <audio
              src="assets/Electric.mp3"
              controls
              id="Electric"
              loop
              onPlay={(e) => {
                onClickHandler(e);
              }}
              onPause={(e) => {
                onClickHandler(e);
              }}
            />
          </AudioWrap>
          <TinnitusType>Buzzing</TinnitusType>
          <AudioWrap>
            <audio
              src="assets/Buzzing.mp3"
              controls
              id="Buzzing"
              loop
              onPlay={(e) => {
                onClickHandler(e);
              }}
              onPause={(e) => {
                onClickHandler(e);
              }}
            />
          </AudioWrap>
          <TinnitusType>Screeching</TinnitusType>
          <AudioWrap>
            <audio
              src="assets/Screeching.mp3"
              controls
              id="Screeching"
              loop
              onPlay={(e) => {
                onClickHandler(e);
              }}
              onPause={(e) => {
                onClickHandler(e);
              }}
            />
          </AudioWrap>
        </AudioOuterWrap>
        <SymptomsLabel>Notes</SymptomsLabel>
        <NotesInput
          placeholder="Feel free to add notes here. For example: &#10;Apr-20-2022 – Intense after-images and light sensitivity, especially when walking through the mall. Noticed static, tinnitus, and floaters increased as the day went on. Possible triggers: work-related stress, exposure to intense lighting, too much screen time."
        ></NotesInput>
      </InnerWrap>
    </Wrap>
  );
};

// Wraps
const Wrap = styled.div`
  display: flex;
  max-width: 956px;
  margin-right: auto;
  margin-left: auto;
`;

const InnerWrap = styled.div`
  width: 85%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  line-height: 24px;
`;

// Symptoms label
const SymptomsLabel = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin: 40px 0px 25px 0px;
`;

// Tinnitus section
const TinnitusType = styled.div`
  margin-top: 25px;
  font-weight: 900;
  width: 15%;
  height: 15%;
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

// Notes section
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

export default Dropdown;
