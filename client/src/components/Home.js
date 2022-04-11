import styled from "styled-components";
import Dropdown from "./Dropdown";
import Video from "./Video";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";
const initialState = { size: 50, speed: 50, opacity: 50 };

const Home = () => {
  const [value, setValue] = useState(initialState);
  console.log(value);

  return (
    <Wrap>
      <Video stats={value} />
      <Instructions>
        Adjust the settings to recreate what you see. To keep track of your
        symptoms, log in at the bottom of the page and download your stats.{" "}
      </Instructions>
      <SymptomTitle>Visual Snow</SymptomTitle>
      <Slider>
        <SliderWrapper className="SliderValue">
          <SliderLabel>Size</SliderLabel>
          <Input
            id="size"
            type="range"
            min="0"
            max="100"
            value={value.size}
            onChange={(e) => {
              setValue({ ...value, size: parseInt(e.target.value) });
            }}
          />
          <CurrentValue>{value.size}</CurrentValue>
        </SliderWrapper>
      </Slider>
      <Slider>
        <SliderWrapper className="SliderSpeed">
          <SliderLabel>Speed</SliderLabel>
          <Input
            id="speed"
            type="range"
            min="0"
            max="100"
            value={value.speed}
            onChange={(e) => {
              setValue({ ...value, speed: parseInt(e.target.value) });
            }}
          />
          <CurrentValue>{value.speed}</CurrentValue>
        </SliderWrapper>
      </Slider>
      <Slider>
        <SliderWrapper className="SliderOpacity">
          <SliderLabel>Opacity</SliderLabel>
          <Input
            id="opacity"
            type="range"
            min="0"
            max="100"
            value={value.opacity}
            onChange={(e) => {
              setValue({ ...value, opacity: parseInt(e.target.value) });
            }}
          />
          <CurrentValue>{value.opacity}</CurrentValue>
        </SliderWrapper>
      </Slider>
      <Dropdown />
      <Login />
      <Signup />
    </Wrap>
  );
};

const Wrap = styled.div``;

const Instructions = styled.div`
  font-size: 16px;
  text-align: justify;
  margin-top: 555px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
`;

const SymptomTitle = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin: 50px 0px 25px 0px;
  width: 640px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
`;

const Slider = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 400px;
`;

const SliderWrapper = styled.div`
  color: var(--blue);
  display: flex;
  align-items: center;
`;

const SliderLabel = styled.div`
  padding-right: 20px;
`;

const Input = styled.input`
  -webkit-appearance: none;
  height: 7px;
  width: 300px;
  background: var(--blue);
  border-radius: 5px;
  background-repeat: no-repeat;
  /* background-image: linear-gradient(#d46a6a, #d46a6a); */
`;

const CurrentValue = styled.div`
  margin-left: 25px;
`;

export default Home;
