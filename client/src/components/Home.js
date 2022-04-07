import styled from "styled-components";
import Dropdown from "./Dropdown";
import Video from "./Video";

const Home = () => {
  return (
    <Wrapper>
      <VideoWrapper>
        <Video />
      </VideoWrapper>
      {/* <DropdownWrapper>
        <Dropdown />
      </DropdownWrapper> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px green solid;
  width: 66%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* height: 100%; */
  /* padding: 20px; */
  /* display: block; */
  /* margin-left: auto;
  margin-right: auto; */
`;

const VideoWrapper = styled.div`
  /* display: block; */
`;

const DropdownWrapper = styled.div`
  /* margin-left: auto;
  margin-right: auto; */
  /* display: relative; */
`;

export default Home;
