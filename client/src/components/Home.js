import styled from "styled-components";
import Dropdown from "./Dropdown";
import Video from "./Video";
import Login from "./Login";

const Home = () => {
  return (
    <Wrapper>
      <VideoWrapper>
        <Video />
      </VideoWrapper>
      <DropdownWrapper>
        <Dropdown />
      </DropdownWrapper>
      <Login />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: flex;
  margin-left: auto;
  margin-right: auto; */

  /* flex-direction: column; */
  /* border: 1px pink solid; */
  /* width: 66%;*/
  /* height: 100%; */
  /* padding: 20px; */
  /* display: block; */
`;

const VideoWrapper = styled.div`
  /* width: 40%; */
  /* display: block; */
`;

const DropdownWrapper = styled.div`
  /* width: 40%;
  margin-left: auto;
  margin-right: auto; */
  /* display: block; */
  /* position: absolute */
  /* display: relative; */
`;

export default Home;
