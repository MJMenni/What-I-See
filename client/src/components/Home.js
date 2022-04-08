import styled from "styled-components";
import Dropdown from "./Dropdown";
import Video from "./Video";

const Home = () => {
  return (
    <Wrapper>
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
  /* display: flex; */
  /* display: block; */
  /* flex-direction: column; */
  /* border: 1px pink solid; */
  /* width: 66%;
  display: block;
  margin-left: auto;
  margin-right: auto; */
  /* height: 100%; */
  /* padding: 20px; */
  /* display: block; */
  /* margin-left: auto;
  margin-right: auto; */
`;

const VideoWrapper = styled.div`
  /* display: block; */
  /* width: 60%; */
`;

const DropdownWrapper = styled.div`
  /* margin-left: auto;
  margin-right: auto; */
  /* display: block; */
  /* position: absolute */
  /* display: relative; */
  /* width: 60%; */
`;

export default Home;
