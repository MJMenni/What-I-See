import styled from "styled-components";
import News from "./News";

const Resources = () => {
  return (
    <Wrapper>
      <ResourcesTitle>Visual Snow Syndrome Resources</ResourcesTitle>
      <Intro>To learn more about Visual Snow Syndrome (VSS) </Intro>
      <LinksWrapper>
        <Link
          href="https://www.visualsnowinitiative.org/"
          style={{ cursor: "pointer", textDecoration: "none" }}
          target="_blank"
        >
          Visual Snow Initiative
        </Link>
        <LinkInfo>
          The Visual Snow Initiative was established to increase awareness for
          Visual Snow, build a community for those who suffer from Visual Snow,
          and to generate the capital necessary for research and medical
          advancements.
        </LinkInfo>
        <Link
          href="https://www.reddit.com/r/visualsnow/"
          style={{ cursor: "pointer", textDecoration: "none" }}
          target="_blank"
        >
          VSS Reddit Community
        </Link>
        <Link
          href="https://www.ata.org/"
          style={{ cursor: "pointer", textDecoration: "none" }}
          target="_blank"
        >
          American Tinnitus Association
        </Link>
        <Link
          href="https://www.tinnitus.org.uk/"
          style={{ cursor: "pointer", textDecoration: "none" }}
          target="_blank"
        >
          British Tinnitus Association
        </Link>
      </LinksWrapper>{" "}
      <News />
    </Wrapper>
  );
};

const Intro = styled.div`
  margin: 40px 0px 0px 0px;
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
  margin-bottom: 50px;
  padding-top: 80px;
  text-align: center;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--blue);
`;

const Link = styled.a`
  margin-bottom: 10px;
  margin-top: 25px;
  font-size: 20px;
  color: var(--blue);

  &:hover {
    font-weight: 900;
  }
  &:visited {
    text-decoration: none;
  }
`;

const LinkInfo = styled.div`
  font-size: 16px;
  line-height: 22px;
`;

export default Resources;
