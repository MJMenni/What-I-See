import styled from "styled-components";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Video from "./Video";
import Login from "./Login";
import Signup from "./Signup";
import Stats from "./Stats";
import UserContext from "./UserContext";
// import assets from "../assets";

const initialState = { size: 1, speed: 1, opacity: 5 };

const Home = () => {
  const {
    user: { stats },
    setUser,
  } = useContext(UserContext);

  // 1. Get the current state of slider, audio, note

  // Stats
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

  console.log(audio);
  const onClickHandler = (event) => {
    //click triggered
    event.preventDefault();

    //change the stat target value
    console.log(event.target.id);
    const key = event.target.id;
    setAudio((prev) => {
      return { ...prev, [key]: !prev[key] };
    });
  };

  // Note
  const [note, setNote] = useState("");
  console.log("note", note);

  // 2. onSaveHandler
  // 3. Make a http request to BE(create a new endpoint)
  const onSave = (e) => {
    e.preventDefault();

    fetch("/api/add-stats", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ stats }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("logged in");
        setUser(json.stats);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 4. On success, update user context for FE using setUser(only stats field)

  const tinType = [
    "Static",
    "Roaring",
    "Buzzing",
    "Screeching",
    "Kettle",
    "Electric",
  ];
  // console.log(tinType[0]);

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

      <WrapAudio>
        <InnerWrap>
          <SymptomsLabel>Tinnitus</SymptomsLabel>
          <AudioOuterWrap>
            {tinType.map((typ) => {
              return (
                <div key={typ}>
                  <TinnitusType>{typ}</TinnitusType>
                  <AudioWrap>
                    <audio
                      src={`assets/${typ}.mp3`}
                      id={typ}
                      controls
                      loop
                      onPlay={(e) => {
                        onClickHandler(e);
                      }}
                      onPause={(e) => {
                        onClickHandler(e);
                      }}
                    />
                  </AudioWrap>
                </div>
              );
            })}
          </AudioOuterWrap>
          <SymptomsLabel>Notes</SymptomsLabel>
        </InnerWrap>
      </WrapAudio>
      <NotesWrap>
        <NotesInput
          placeholder="Feel free to add notes here. For example: &#10;Apr-20-2022 – Intense after-images and light sensitivity, especially when walking through the mall. Noticed static, tinnitus, and floaters increased as the day went on. Possible triggers: work-related stress, exposure to intense lighting, too much screen time."
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
          minlength="1"
          maxlength="280"
          placeholderTextColor="light-gray"
        ></NotesInput>
      </NotesWrap>
      <SectionTitle>Login</SectionTitle>
      <Login />
      <Signup />
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

//From dropdown
// Wraps
const WrapAudio = styled.div`
  display: flex;
  max-width: 956px;
  margin-right: auto;
  margin-left: auto;
`;

const InnerWrap = styled.div`
  width: 85%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  line-height: 24px;
`;

// Symptoms label
const SymptomsLabel = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin: 40px 0px 25px 0px;
`;

// Tinnitus section
const TinnitusType = styled.div`
  margin-top: 25px;
  font-weight: 900;
  width: 20%;
  height: 18%;
  /* border: 1px green solid; */
`;

const AudioOuterWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 85%;
  background-color: #f1f3f4;
  padding: 15px 0px 15px 60px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
  /* border: 1px yellow solid; */
  justify-content: center;
`;

const AudioWrap = styled.div`
  margin-top: -30px;
  display: flex;
  /* border: 1px pink solid; */
  width: 40%;
  margin-left: auto;
  margin-right: auto;

  audio::-webkit-media-controls-current-time-display,
  audio::-webkit-media-controls-time-remaining-display {
    display: none;
  }
  audio::-webkit-media-controls-timeline,
  video::-webkit-media-controls-timeline {
    display: none;
  }
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
  min-height: 150px;
  width: 72%;
  margin-right: auto;
  margin-left: auto;
  padding: 25px;
  border-radius: 5px;
  line-height: 24px;
  font-size: 16px;
`;

export default Home;
