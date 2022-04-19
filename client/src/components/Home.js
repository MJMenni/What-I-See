import styled from "styled-components";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Video from "./Video";
import Login from "./Login";
import Signup from "./Signup";
import Stats from "./Stats";
import UserContext from "./UserContext";
import Tinnitus from "./Tinnitus";

const initialState = { size: 1, speed: 1, opacity: 3, halo: 0 };

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  const [halo, setHalo] = useState(initialState);

  // Slider
  const [slider, setSlider] = useState(initialState);
  console.log(slider);

  // Audio
  const initValue = {
    Static: false,
    Roaring: false,
    Buzzing: false,
    Kettle: false,
    Electric: false,
    Screeching: false,
  };
  const [audio, setAudio] = useState(initValue);

  // Audio changes
  const onClickHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.id);
    const key = event.target.id;
    setAudio((prev) => {
      return { ...prev, [key]: !prev[key] };
    });
  };

  // Note
  const [note, setNote] = useState("");

  // On save, set new stats
  const onSave = (e) => {
    e.preventDefault();

    const newStats = {
      slider,
      audio,
      note,
    };

    fetch("/api/add-stats", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ newStats, _id: user._id }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          setUser((prev) => ({ ...prev, stats: [...prev.stats, newStats] }));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrap>
      <AboutTitle>What I See</AboutTitle>
      <AboutWrap>
        <AboutCopy>
          <Bold>
            <Italic>What I See </Italic>
          </Bold>
          is a video simulator that recreates the visual and auditory experience
          of someone who has
          <Bold>
            <NavLinks
              to="/about"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              {" "}
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
          <br />
          Press play to start the video, then adjust the settings below it to
          recreate what you see. To keep track of your symptoms, log in or
          create an account in the <Bold>Login</Bold> section. To add your
          current settings or view your past entries, see the{" "}
          <Bold>My Stats</Bold> section.
        </AboutCopy>
      </AboutWrap>
      <Video stats={slider} />
      <SectionTitle>VISUAL SNOW</SectionTitle>
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
              max="5"
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
              max="4"
              value={slider.speed}
              onChange={(e) => {
                document.getElementById("vid2").playbackRate =
                  e.target.value * 0.5;
                setSlider({ ...slider, speed: parseInt(e.target.value) });
              }}
            />
            <CurrentValue>{slider.speed}</CurrentValue>
          </Slider>
        </SliderWrap>
      </SliderOuterWrap>

      <SectionTitle>HALOS</SectionTitle>
      <HaloWrap>
        <SliderWrap>
          <Slider className="SliderHalos">
            <SliderLabel>Halos</SliderLabel>
            <Input
              id="halos"
              type="range"
              min="1"
              max="5"
              value={slider.halo}
              onChange={(e) => {
                setSlider({ ...slider, halo: parseInt(e.target.value) });
              }}
            />
            <CurrentValue>{slider.halo}</CurrentValue>
          </Slider>
        </SliderWrap>
      </HaloWrap>

      <Tinnitus
        audio={audio}
        setAudio={setAudio}
        onClickHandler={onClickHandler}
      />
      <NotesWrap>
        <NotesInput
          placeholder="Feel free to add notes here. For example: &#10;Apr-20-2022 – Intense after-images and light sensitivity, especially when walking through the mall. Noticed static, tinnitus, and floaters increased as the day went on. Possible triggers include work-related stress, exposure to intense lighting, and too much screen time."
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
          minlength="1"
          maxlength="280"
          placeholderTextColor="var(--light-gray)"
        ></NotesInput>
      </NotesWrap>
      <SectionTitle>LOGIN</SectionTitle>
      <LoginSignupWrap>
        <LoginWrap>
          {" "}
          <Login />
        </LoginWrap>

        <SignupWrap>
          <Signup />
        </SignupWrap>
      </LoginSignupWrap>
      <StatsWrap>
        <SectionTitle>MY STATS</SectionTitle>
        <Stats onSave={onSave} />
      </StatsWrap>
    </Wrap>
  );
};

const HaloWrap = styled.div`
  background-color: var(--light-gray);
  width: 72%;
  margin-left: auto;
  margin-right: auto;
  padding: 25px 0px;
  border-radius: 5px;
`;

const LoginSignupWrap = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 85%;
  justify-content: space-evenly;
  margin-right: auto;
  margin-left: auto;
  /* border: 3px yellow solid; */
`;

const LoginWrap = styled.div`
  width: 38%;
  /* border: 1px green solid; */
`;

const SignupWrap = styled.div`
  width: 38%;
  /* border: 1px gray solid; */
`;

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
  font-weight: 900;
  color: var(--blue);
`;

const Italic = styled.span`
  font-style: italic;
`;

// Section titles
const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
  text-align: left;
  width: 72%;
  margin: 60px 0px 20px 0px;
  margin-left: auto;
  margin-right: auto;
`;

// Sliders
const SliderOuterWrap = styled.div`
  background-color: var(--light-gray);
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
  max-width: 85%;
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  /* border: 1px green solid; */
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

// Stats
const StatsWrap = styled.div`
  padding-bottom: 75px;
`;

// Notes section
const NotesWrap = styled.div`
  display: flex;
  max-width: 956px;
  margin-right: auto;
  margin-left: auto;
`;

const NotesInput = styled.textarea`
  border: var(--blue) 1px solid;
  min-height: 190px;
  width: 72%;
  margin-right: auto;
  margin-left: auto;
  padding: 35px;
  border-radius: 5px;
  line-height: 24px;
  font-size: 16px;

  &:focus::placeholder {
    color: white;
  }
`;

export default Home;
