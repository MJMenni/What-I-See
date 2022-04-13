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
        <AboutCopy>
          <Bold>How it works:</Bold>
          <br /> Adjust the settings below the video to recreate what you see.
          To keep track of your symptoms, login or create an account in the{" "}
          <Bold>Login</Bold> section. To add your current settings or view your
          past entries, see the <Bold>Stats</Bold> section.
        </AboutCopy>
      </AboutWrap>
      <Video stats={value} />
      <SectionTitle>Visual Snow</SectionTitle>
      <SliderWrap>
        <Slider className="SliderValue">
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
        </Slider>
      </SliderWrap>
      <SliderWrap>
        <Slider className="SliderSpeed">
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
        </Slider>
      </SliderWrap>
      <SliderWrap>
        <Slider className="SliderOpacity">
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
        </Slider>
      </SliderWrap>
      <Dropdown />
      <SectionTitle>Login</SectionTitle>
      <Signup />
      <Login />
      <SectionTitle>Stats</SectionTitle>
      <Stats />
    </Wrap>
  );
};

const Wrap = styled.div``;

// About section
const AboutTitle = styled.div`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 50px;
  text-align: center;
`;

const AboutWrap = styled.div`
  max-width: 956px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  margin-bottom: 50px;
  /* border: 1px green solid; */
`;

const AboutCopy = styled.div`
  line-height: 24px;
  font-size: 16px;
  text-align: justify;
  width: 85%;
  margin-bottom: 25px;
  font-size: 18px;
  margin-right: auto;
  margin-left: auto;
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

// Bold and italic styles
const Bold = styled.span`
  font-weight: 600;
  color: var(--blue);
`;

const Italic = styled.span`
  font-style: italic;
`;

// Section titles
const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin: 50px 0px 25px 0px;
  width: 640px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
`;

// Sliders
const SliderWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 400px;
`;

const Slider = styled.div`
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

// const Icon = styled.img`
//   width: 85px;
//   height: 85px;
//   border: 2px var(--blue) solid;
//   border-radius: 50%;
//   object-fit: cover;
//   padding: 15px;
//   margin-top: 50px;
// `;
