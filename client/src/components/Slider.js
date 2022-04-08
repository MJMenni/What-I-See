import { useState } from "react";
import styled from "styled-components";

const Slider = () => {
  const [value, setValue] = useState(50);

  // let slider = document.querySelector("[type=range]");
  // let div = document.querySelector("#overlay");

  // slider.addEventListener("input", (e) => {
  //   div.style.width = e.target.value + "px";
  // });

  return (
    <SliderWrapper className="Slider">
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
  );
};

const SliderWrapper = styled.div`
  color: var(--blue);
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  -webkit-appearance: none;
  height: 7px;
  width: 200px;
  background: var(--blue);
  border-radius: 5px;
  background-repeat: no-repeat;
  /* background-image: linear-gradient(#d46a6a, #d46a6a); */
`;

const CurrentValue = styled.div`
  margin-left: 10px;
`;

export default Slider;

// Logic for prev slider
// const MAX = 10;

// Logic for prev slider
//   const setAdjustment = () => {
//     return { backgroundSize: `${(value * 100) / MAX}% 100%` };
//   };

// Settings for prev slider
// max="{MAX}"
// onChange={(e) => setValue(e.target.value)}
// value={value}
// style={setAdjustment()}
