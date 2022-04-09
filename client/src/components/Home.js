import styled from "styled-components";
import Dropdown from "./Dropdown";
import Video from "./Video";
import Login from "./Login";

const Home = () => {
  return (
    <Wrap>
      <Video />
      <Dropdown />
      <Login />
    </Wrap>
  );
};

const Wrap = styled.div`
  padding-bottom: 85px;
`;

export default Home;
