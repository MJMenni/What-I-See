import { useState } from "react";
import styled from "styled-components";

const Slider = () => {
  const [value, setValue] = useState(0);
  const [size, setSize] = useState(50);

  return (
    <SliderWrapper className="Slider">
      <Input
        id="range"
        type="range"
        min="0"
        max="100"
        onChange={(e) => {
          const { value } = e.target;
          setSize(parseInt(value, 10));
        }}
      />
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  color: var(--blue);
`;

const Input = styled.input`
  -webkit-appearance: none;
  height: 7px;
  background: var(--blue);
  border-radius: 5px;
  background-repeat: no-repeat;
  /* background-image: linear-gradient(#d46a6a, #d46a6a); */
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