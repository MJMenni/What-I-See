import styled from "styled-components";
import Dropdown from "./Dropdown";
import Video from "./Video";
import Login from "./Login";

import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState(50);
  const [size, setSize] = useState(60);

  let sliderValue = document.getElementById("range");
  console.log(sliderValue.value);

  return (
    <Wrap>
      <Video />
      <Instructions>
        Adjust the settings to recreate what you see. To keep track of your
        symptoms, log in at the bottom of the page and download your stats.{" "}
      </Instructions>
      <SymptomTitle>Visual Snow</SymptomTitle>
      <Slider>
        <SliderWrapper className="SliderValue">
          <SliderLabel>Size</SliderLabel>
          <Input
            id="range"
            type="range"
            min="0"
            max="100"
            onChange={(e) => {
              const { value } = e.target;
              setValue(parseInt(value, 10));
            }}
          />
          <CurrentValue>{value}</CurrentValue>
        </SliderWrapper>
      </Slider>{" "}
      <Dropdown />
      <Login />
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
