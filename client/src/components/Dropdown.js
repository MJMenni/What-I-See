import styled from "styled-components";
import ReactAudioPlayer from "react-audio-player";
import Slider from "./Slider";

const Dropdown = () => {
  return (
    <DropWrapper>
      <SymptomsLabel>Symptoms</SymptomsLabel>
      <SymptomLabel>Visual Snow</SymptomLabel>
      <AdjustLabel>Size</AdjustLabel>
      <Slider />
      <AdjustLabel>Speed</AdjustLabel>
      <Slider />
      <AdjustLabel>Opacity</AdjustLabel>
      <Slider />
      <SymptomLabel>Tinnitus</SymptomLabel>
      <AudioWrapper>
        <ReactAudioPlayer src="assets/Roaring.mp3" controls id="player1" />
        <TinnitusType>Roaring</TinnitusType>
      </AudioWrapper>
      <AudioWrapper>
        <ReactAudioPlayer src="assets/TeaKettle.mp3" controls id="player1" />
        <TinnitusType>Tea kettle</TinnitusType>
      </AudioWrapper>
      <AudioWrapper>
        <ReactAudioPlayer src="assets/Static.mp3" controls id="player1" />
        <TinnitusType>Static</TinnitusType>
      </AudioWrapper>
      <AudioWrapper>
        <ReactAudioPlayer src="assets/Screeching.mp3" controls id="player1" />
        <TinnitusType>Screeching</TinnitusType>
      </AudioWrapper>
      <AudioWrapper>
        <ReactAudioPlayer src="assets/Electric.mp3" controls id="player1" />
        <TinnitusType>Electric</TinnitusType>
      </AudioWrapper>
    </DropWrapper>
  );
};

const TinnitusType = styled.div`
  margin-left: -120px;
  margin-top: 15px;
  text-align: right;
  z-index: 1;
  font-weight: 900;
`;

const AudioWrapper = styled.div`
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
`;

const DropWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  /* max-width: 65%; */
  width: 640px;
  line-height: 24px;
`;

const SymptomsLabel = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-top: 20px;
`;

const SymptomLabel = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin: 20px 0px 10px 0px;
`;

const AdjustLabel = styled.div``;

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
