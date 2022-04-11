import React from "react";
import { useState, createContext } from "react";

const SliderContext = createContext(null);

const initialState = {
  sliderData: "",
  setSliderData: "",
};

export const SliderProvider = ({ children }) => {
  const [sliderData, setSliderData] = useState(initialState);

  return (
    <SliderContext.Provider
      value={{
        sliderData,
        setSliderData,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export default SliderContext;
