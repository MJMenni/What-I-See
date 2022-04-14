import styled from "styled-components";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import Video from "./Video";
import Login from "./Login";
import Signup from "./Signup";
import Stats from "./Stats";
import UserContext from "./UserContext";

const initialState = { size: 1, speed: 1, opacity: 1 };

const Home = () => {
  const {
    user: { stats },
    setUser,
  } = useContext(UserContext);

  //onSaveHandler

  //get the current state of slider, audio, note

  //make a http request to BE(create a new endpoint)

  //on success, update user context for FE using setUser(only stats field)

  //stats status
  const [slider, setSlider] = useState(initialState);
  //audio

  //note

  return (
    <Wrap>
      <AboutTitle>What I See</AboutTitle>
      <AboutWrap>
        <AboutCopy>
          <Bold>
            <Italic>What I See </Italic>
          </Bold>
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
          past entries, see the <Bold>My Stats</Bold> section.
        </AboutCopy>
      </AboutWrap>
      <Video stats={slider} />
      <SectionTitle>Visual Snow</SectionTitle>
      <SliderOuterWrap>
        <SliderWrap>
          <Slider className="SliderOpacity">
            <SliderLabel>Opacity</SliderLabel>
            <Input
              id="opacity"
              type="range"
              min="1"
              max="10"
              value={slider.opacity}
              onChange={(e) => {
                setSlider({ ...slider, opacity: parseInt(e.target.value) });
              }}
            />
            <CurrentValue>{slider.opacity}</CurrentValue>
          </Slider>
        </SliderWrap>
        <SliderWrap>
          <Slider className="SliderSize">
            <SliderLabel>Size</SliderLabel>
            <Input
              id="size"
              type="range"
              min="1"
              max="10"
              value={slider.size}
              onChange={(e) => {
                setSlider({ ...slider, size: parseInt(e.target.value) });
              }}
            />
            <CurrentValue>{slider.size}</CurrentValue>
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
              value={slider.speed}
              onChange={(e) => {
                setSlider({ ...slider, speed: parseInt(e.target.value) });
              }}
            />
            <CurrentValue>{slider.speed}</CurrentValue>
          </Slider>
        </SliderWrap>
      </SliderOuterWrap>
      <Dropdown />
      <SectionTitle>Login</SectionTitle>
      <Signup />
      <Login />
      <SectionTitle>My Stats</SectionTitle>
      <Stats />
    </Wrap>
  );
};

// Outer wrap
const Wrap = styled.div`
  max-width: 956px;
  margin-left: auto;
  margin-right: auto;
`;

// About section
const AboutTitle = styled.h1``;

const AboutWrap = styled.div`
  max-width: 956px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  margin-bottom: 50px;
`;

const AboutCopy = styled.div`
  font-size: 18px;
  text-align: justify;
  line-height: 24px;
  width: 85%;
  margin-bottom: 25px;
  margin-right: auto;
  margin-left: auto;
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
  text-align: left;
  width: 85%;
  margin: 50px 0px 25px 0px;
  margin-left: auto;
  margin-right: auto;
`;

// Sliders
const SliderOuterWrap = styled.div`
  background-color: #f1f3f4;
  width: 72%;
  margin-left: auto;
  margin-right: auto;
  padding: 25px 0px;
  border-radius: 5px;
`;

const SliderWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
`;

const Slider = styled.div`
  color: var(--blue);
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
`;

const SliderLabel = styled.div`
  width: 75px;
  font-weight: 600;
  font-size: 16px;
`;

const Input = styled.input`
  -webkit-appearance: none;
  height: 7px;
  width: 300px;
  background: var(--blue);
  border-radius: 5px;
  background-repeat: no-repeat;
`;

const CurrentValue = styled.div`
  margin-right: 10px;
`;

export default Home;
