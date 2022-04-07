import styled from "styled-components";
import ReactAudioPlayer from "react-audio-player";
import Slider from "./Slider";

const Dropdown = () => {
  return (
    <DropWrapper>
      <SymptomsLabel>Symptoms</SymptomsLabel>
      <SymptomLabel>Visual Snow</SymptomLabel>
      <AdjustLabel>Type</AdjustLabel>
      <AdjustLabel>Size</AdjustLabel>
      <Slider />
      <AdjustLabel>Speed</AdjustLabel>
      <Slider />
      <AdjustLabel>Opacity</AdjustLabel>
      <Slider />
      <SymptomLabel>Tinnitus</SymptomLabel>
      <AdjustLabel>Type</AdjustLabel>
      <ReactAudioPlayer src="assets/Roaring.mp3" controls id="player1" />
      <Button onclick="document.getElementById('player1').play()">Play</Button>
      <Button onclick="document.getElementById('player1').pause()">
        Pause
      </Button>
      <Button onclick="document.getElementById('player1').volume += 0.1">
        Vol +
      </Button>
      <Button onclick="document.getElementById('player1').volume -= 0.1">
        Vol -
      </Button>
    </DropWrapper>
  );
};

const DropWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 65%;
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

const Button = styled.button``;

export default Dropdown;
