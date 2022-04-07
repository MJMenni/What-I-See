import styled from "styled-components";
import News from "./News";

const Resources = () => {
  return (
    <Wrapper>
      <ResourcesTitle>Visual Snow Syndrome Resources</ResourcesTitle>
      <Intro>To learn more about Visual Snow Syndrome (VSS) </Intro>
      <LinksWrapper>
        <a
          href="https://www.visualsnowinitiative.org/"
          style={{ cursor: "pointer", textDecoration: "none" }}
          target="_blank"
        >
          Visual Snow Initiative
        </a>
        <a
          href="https://www.reddit.com/r/visualsnow/"
          style={{ cursor: "pointer", textDecoration: "none" }}
          target="_blank"
        >
          VSS Reddit Community
        </a>
        <a
          href="https://www.ata.org/"
          style={{ cursor: "pointer", textDecoration: "none" }}
          target="_blank"
        >
          American Tinnitus Association
        </a>
        <a
          href="https://www.tinnitus.org.uk/"
          style={{ cursor: "pointer", textDecoration: "none" }}
          target="_blank"
        >
          British Tinnitus Association
        </a>
      </LinksWrapper>{" "}
      <News />
    </Wrapper>
  );
};

const Intro = styled.div`
  margin: 25px 0px 12px 0px;
  font-size: 20px;
  font-weight: 900;
`;

const Wrapper = styled.div`
  width: 66%;
  margin-right: auto;
  margin-left: auto;
`;

const ResourcesTitle = styled.div`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 40px;
  padding-top: 80px;
  text-align: center;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 32px;
  font-size: 18px;
  color: var(--blue);
`;

export default Resources;
