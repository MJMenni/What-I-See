import { useState } from "react";
import styled from "styled-components";

const Slider = () => {
  const [value, setValue] = useState(50);
  const [size, setSize] = useState(60);

  let sliderValue = document.getElementById("range");
  // console.log(sliderValue.value);

  // let sliderSize = document.getElementById("size");
  // console.log(sliderSize.size);

  // if (!value || !size) {
  //   return <div>"is loading" </div>;
  // }

  return (
    <Wrap>
      <SliderWrap className="SliderValue">
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
      </SliderWrap>
      {/* <SliderWrap className="SliderSize">
        <Input
          id="range"
          type="range"
          min="0"
          max="100"
          onChange={(e) => {
            const { size } = e.target;
            setSize(parseInt(size, 10));
          }}
        />
        <CurrentValue>{size}</CurrentValue>
      </SliderWrap> */}
    </Wrap>
  );
};

const Wrap = styled.div``;

const SliderWrap = styled.div`
  color: var(--blue);
  display: flex;
  align-items: center;
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
  /* margin-left: 25px; */
`;

export default Slider;
