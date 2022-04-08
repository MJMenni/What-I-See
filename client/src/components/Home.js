import styled from "styled-components";
import Dropdown from "./Dropdown";
import Video from "./Video";
import Login from "./Login";

const Home = () => {
  return (
    <Wrapper>
      <Login />
      <VideoWrapper>
        <Video />
      </VideoWrapper>
      <DropdownWrapper>
        <Dropdown />
      </DropdownWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px pink solid; */
  /* width: 66%;*/
  /* height: 100%; */
  /* padding: 20px; */
  /* display: block; */
`;

const VideoWrapper = styled.div`
  width: 40%;
  /* display: block; */
`;

const DropdownWrapper = styled.div`
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  /* display: block; */
  /* position: absolute */
  /* display: relative; */
`;

export default Home;
