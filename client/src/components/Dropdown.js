import styled from "styled-components";
import ReactAudioPlayer from "react-audio-player";
// import Slider from "./Slider";

const Dropdown = () => {
  return (
    <OuterWrap>
      <DropWrap>
        {/* <SymptomsLabel>Visual Snow</SymptomsLabel>

        <SliderWrap>
          <AdjustLabel>Size</AdjustLabel>
          <Slider />
        </SliderWrap>

        <SliderWrap>
          <AdjustLabel>Speed</AdjustLabel>
          <Slider />
        </SliderWrap>

        <SliderWrap>
          <AdjustLabel>Opacity</AdjustLabel>
          <Slider />
        </SliderWrap> */}

        <SymptomsLabel>Tinnitus</SymptomsLabel>
        <AudioOuterWrap>
          <TinnitusType>Static</TinnitusType>
          <AudioWrap>
            <ReactAudioPlayer
              src="assets/Static.mp3"
              controls
              id="player1"
              loop
            />
          </AudioWrap>
          <TinnitusType>Kettle</TinnitusType>
          <AudioWrap>
            <ReactAudioPlayer
              src="assets/TeaKettle.mp3"
              controls
              id="player1"
              loop
            />
          </AudioWrap>
          <TinnitusType>Roaring</TinnitusType>
          <AudioWrap>
            <ReactAudioPlayer
              src="assets/Roaring.mp3"
              controls
              id="player1"
              loop
            />
          </AudioWrap>
          <TinnitusType>Electric</TinnitusType>
          <AudioWrap>
            <ReactAudioPlayer
              src="assets/Electric.mp3"
              controls
              id="player1"
              loop
            />
          </AudioWrap>
          <TinnitusType>Buzzing</TinnitusType>
          <AudioWrap>
            <ReactAudioPlayer
              src="assets/buzzing.mp3"
              controls
              id="player1"
              loop
            />
          </AudioWrap>
          <TinnitusType>Screeching</TinnitusType>
          <AudioWrap>
            <ReactAudioPlayer
              src="assets/Screeching.mp3"
              controls
              id="player1"
              loop
            />
          </AudioWrap>
        </AudioOuterWrap>
      </DropWrap>
    </OuterWrap>
  );
};

const OuterWrap = styled.div`
  display: flex;
  max-width: 1250px;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
`;

const AudioOuterWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 85%;
  background-color: #f1f3f4;
  padding: 10px 10px 10px 40px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
  /* border: 3px yellow solid; */
`;

const AudioWrap = styled.div`
  margin: 10px;
  display: flex;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px green solid; */

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

const DropWrap = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 640px;
  line-height: 24px;
`;

const SliderWrap = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  /* border: 1px green solid; */
`;

const SymptomsLabel = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin: 50px 0px 25px 0px;
`;

const AdjustLabel = styled.div`
  width: 80px;
`;

export default Dropdown;

{
  /* <Button onclick="document.getElementById('player1').play()">Play</Button>
<Button onclick="document.getElementById('player1').pause()">
  Pause
</Button>
<Button onclick="document.getElementById('player1').volume += 0.1">
  Vol +
</Button>
<Button onclick="document.getElementById('player1').volume -= 0.1">
  Vol -
</Button> */
}
