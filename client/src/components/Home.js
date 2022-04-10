import styled from "styled-components";
import Dropdown from "./Dropdown";
import Video from "./Video";
import Login from "./Login";

const Home = () => {
  return (
    <Wrap>
      <Video />
      <Instructions>
        Adjust the settings to recreate what you see. To keep track of your
        symptoms, log in at the bottom of the page and download your stats.{" "}
      </Instructions>
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

export default Home;
