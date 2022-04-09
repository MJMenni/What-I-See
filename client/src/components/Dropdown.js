import styled from "styled-components";
import ReactAudioPlayer from "react-audio-player";
import Slider from "./Slider";

const Dropdown = () => {
  return (
    <DropWrap>
      <SymptomsTitle>
        Adjust the settings to recreate your experience with VSS. To keep track
        of your symptoms, log in at the bottom of the page and download your
        stats.{" "}
      </SymptomsTitle>

      <SymptomsLabel>Visual Snow</SymptomsLabel>

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
      </SliderWrap>

      <SymptomsLabel>Tinnitus</SymptomsLabel>

      <AudioWrap>
        <TinnitusType>Roaring</TinnitusType>
        <ReactAudioPlayer src="assets/Roaring.mp3" controls id="player1" loop />
      </AudioWrap>
      <AudioWrap>
        <TinnitusType>Tea kettle</TinnitusType>
        <ReactAudioPlayer
          src="assets/TeaKettle.mp3"
          controls
          id="player1"
          loop
        />
      </AudioWrap>
      <AudioWrap>
        <TinnitusType>Static</TinnitusType>
        <ReactAudioPlayer src="assets/Static.mp3" controls id="player1" loop />
      </AudioWrap>
      <AudioWrap>
        <TinnitusType>Screeching</TinnitusType>
        <ReactAudioPlayer
          src="assets/Screeching.mp3"
          controls
          id="player1"
          loop
        />
      </AudioWrap>
      <AudioWrap>
        <TinnitusType>Electric</TinnitusType>
        <AudioTrackWrap>
          <ReactAudioPlayer
            src="assets/Electric.mp3"
            controls
            id="player1"
            loop
          />
        </AudioTrackWrap>
      </AudioWrap>
    </DropWrap>
  );
};

const AudioWrap = styled.div`
  margin-top: 20px;
  display: flex;
  audio::-webkit-media-controls-current-time-display,
  audio::-webkit-media-controls-time-remaining-display {
    display: none;
  }
  audio::-webkit-media-controls-timeline,
  video::-webkit-media-controls-timeline {
    display: none;
  }

  justify-content: space-between;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px green solid; */
`;
const SymptomsTitle = styled.div`
  font-size: 18px;
  text-align: justify;
  font-weight: 900;
  margin-top: 20px;
`;

const AudioTrackWrap = styled.div`
  align-items: flex-end;
  /* border: 1px green solid; */
`;

const TinnitusType = styled.div`
  margin-top: 15px;
  text-align: right;
  z-index: 1;
  font-weight: 900;
  /* margin-left: -120px; */
`;

const DropWrap = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 640px;
  line-height: 24px;
  margin-top: 400px;
  /* max-width: 65%; */
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
