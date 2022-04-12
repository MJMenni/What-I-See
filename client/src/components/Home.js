import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import Video from "./Video";
import Login from "./Login";
import Signup from "./Signup";
import Stats from "./Stats";
const initialState = { size: 1, speed: 1, opacity: 1 };

const Home = () => {
  const [value, setValue] = useState(initialState);
  console.log(value);

  return (
    <Wrap>
      <AboutTitle>What I See</AboutTitle>
      <AboutWrap>
        {/* <Icon src="assets/slider.png"></Icon> */}
        <AboutCopy>
          <Italic>What I See </Italic>
          is a video simulator that recreates the visual and auditory experience
          of someone who has{" "}
          <Bold>
            <NavLinks
              to="/about"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              Visual Snow Syndrome (VSS)
            </NavLinks>
          </Bold>
          . Living with VSS can be difficult, and describing it comes with
          challenges too. Since little is known about the condition, patients
          with VSS often encounter many hurdles to get to a proper diagnosis.{" "}
          <Italic>What I See</Italic> is designed to help those with VSS express
          their everyday experience. Through a variety of settings, users can
          recreate their symptoms to better communicate their reality to others,
          whether it’s family, friends, or health professionals.
        </AboutCopy>
      </AboutWrap>
      <Video stats={value} />
      {/* <Instructions>
        Adjust the settings to recreate what you see. Keep track of your
        symptoms at the bottom of the page.
      </Instructions> */}
      <SectionTitle>Visual Snow</SectionTitle>
      <Slider>
        <SliderWrapper className="SliderValue">
          <SliderLabel>Size</SliderLabel>
          <Input
            id="size"
            type="range"
            min="1"
            max="10"
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
            min="1"
            max="10"
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
            min="1"
            max="10"
            value={value.opacity}
            onChange={(e) => {
              setValue({ ...value, opacity: parseInt(e.target.value) });
            }}
          />
          <CurrentValue>{value.opacity}</CurrentValue>
        </SliderWrapper>
      </Slider>
      <Dropdown />
      <SectionTitle>Login</SectionTitle>
      <Signup />
      <Login />
      <SectionTitle>Stats</SectionTitle>
      <Stats />
    </Wrap>
  );
};

const AboutWrap = styled.div`
  max-width: 956px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  /* border: 1px green solid; */
`;

// const Icon = styled.img`
//   width: 85px;
//   height: 85px;
//   border: 2px var(--blue) solid;
//   border-radius: 50%;
//   object-fit: cover;
//   padding: 15px;
//   margin-top: 50px;
// `;

const AboutCopy = styled.div`
  line-height: 24px;
  font-size: 16px;
  text-align: justify;
  width: 810px;
  margin-bottom: 25px;
  font-size: 18px;
  /* border: 2px yellow solid; */
`;

const NavLinks = styled(NavLink)`
  &:hover {
    opacity: 75%;
  }
  &:visited {
    text-decoration: none;
    color: var(--blue);
  }
`;

const Bold = styled.span`
  font-weight: 600;
  color: var(--blue);
`;

const Wrap = styled.div``;

const Italic = styled.span`
  font-style: italic;
`;

const AboutTitle = styled.div`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 50px;
  text-align: center;
`;

const Instructions = styled.div`
  font-size: 16px;
  text-align: justify;
  margin-top: 8px;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 800px;
`;

const SectionTitle = styled.div`
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
  width: 75px;
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
