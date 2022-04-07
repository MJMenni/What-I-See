import styled from "styled-components";
import ReactAudioPlayer from "react-audio-player";

const Dropdown = () => {
  var range = document.querySelector("#range");
  var form = document.querySelector("#form");

  range.addEventListener("input", function () {
    form.style["width"] = this.value + "em";
  });

  return (
    <DropWrapper>
      <SymptomsLabel>Symptoms</SymptomsLabel>
      <SymptomLabel>Visual Snow</SymptomLabel>
      <AdjustLabel>Type</AdjustLabel>
      <AdjustLabel>Size</AdjustLabel>
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
        <input type="text" value="Some Input Value" />
      </Form>
      <Slider></Slider>
      <AdjustLabel>Speed</AdjustLabel>
      <AdjustLabel>Opacity</AdjustLabel>
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

const Label = styled.div`
  display: block;
  font-weight: bold;
`;

const Form = styled.form`
  font-size: 2em;
  background: #ccc;
  padding: 20px;
  max-width: 500px;
  margin: 20px auto;
`;

const Slider = styled.div``;

const DropWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 65%;
`;

const SymptomsLabel = styled.div`
  font-size: 20px;
  font-weight: 900;
`;

const SymptomLabel = styled.div`
  font-size: 18px;
  font-weight: 900;
`;

const AdjustLabel = styled.div``;

const Button = styled.button``;

export default Dropdown;
