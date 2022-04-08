import styled from "styled-components";
import News from "./News";

const Resources = () => {
  return (
    <Wrapper>
      <ResourcesTitle>Visual Snow Syndrome Resources</ResourcesTitle>
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
          You are Not Alone!
        </Link>
        <LinkInfo>
          You are Not Alone! is a Reddit group for people with VSS. The online
          community covers all things related to the condition, and is a great
          place to ask questions.
        </LinkInfo>
        <Link
          href="https://www.ata.org/"
          style={{ cursor: "pointer", textDecoration: "none" }}
          target="_blank"
        >
          American Tinnitus Association
        </Link>
        <LinkInfo>
          The American Tinnitus Association is a non-profit organization that
          focus on tinnitus. Their core purpose is to promote relief, prevent,
          and find cures for tinnitus, evidenced by its core values of
          compassion, credibility, and responsibility.
        </LinkInfo>
        {/* <Link
          href="https://www.tinnitus.org.uk/"
          style={{ cursor: "pointer", textDecoration: "none" }}
          target="_blank"
        >
          British Tinnitus Association
        </Link> */}
      </LinksWrapper>
      <News />
    </Wrapper>
  );
};

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
  font-weight: 600;

  &:hover {
    opacity: 75%;
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
