import styled from "styled-components";
import News from "./News";

const Resources = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ResourcesTitle>Visual Snow Syndrome Resources</ResourcesTitle>
        <LinksWrapper>
          <SingleLinkWrap>
            <Link
              href="https://www.visualsnowinitiative.org/"
              style={{ cursor: "pointer", textDecoration: "none" }}
              target="_blank"
            >
              <Resource>Visual Snow Initiative</Resource>
            </Link>
            <LinkInfo>
              The Visual Snow Initiative was established to increase awareness
              for visual snow, build a community for those who suffer from the
              condition, and to generate the capital necessary for research and
              medical advancements.
            </LinkInfo>
          </SingleLinkWrap>
          <SingleLinkWrap>
            <Link
              href="https://www.reddit.com/r/visualsnow/"
              style={{ cursor: "pointer", textDecoration: "none" }}
              target="_blank"
            >
              <Resource>You are Not Alone!</Resource>
            </Link>
            <LinkInfo>
              You are Not Alone! is a Reddit group for people living with VSS.
              The online community covers all things related to the condition,
              and is a great place to look up specific topics and ask questions.
            </LinkInfo>
          </SingleLinkWrap>
          <SingleLinkWrap>
            <Link
              href="https://www.ata.org/"
              style={{ cursor: "pointer", textDecoration: "none" }}
              target="_blank"
            >
              <Resource>American Tinnitus Association</Resource>
            </Link>
            <LinkInfo>
              The American Tinnitus Association is a non-profit organization
              that focus on tinnitus. Their core purpose is to promote
              prevention and relief, while working towards finding a cure for
              tinnitus.
            </LinkInfo>
          </SingleLinkWrap>
        </LinksWrapper>
        <News />
      </InnerWrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  max-width: 1250px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 50px;
`;

const InnerWrapper = styled.div`
  width: 66%;
  margin-right: auto;
  margin-left: auto;
`;

const ResourcesTitle = styled.div`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 50px;
  text-align: center;
`;

const SingleLinkWrap = styled.div`
  width: 30%;
  justify-content: space-between;
  border: 2px var(--blue) solid;
  border-radius: 5px;
  &:hover {
    opacity: 75%;
  }
  &:visited {
    text-decoration: none;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--blue);
  justify-content: space-between;
`;

const Resource = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Link = styled.a`
  font-size: 20px;
  color: var(--blue);
  font-weight: 600;
  margin-top: 50px;
`;

const LinkInfo = styled.div`
  font-size: 16px;
  line-height: 22px;
  text-align: justify;
  padding: 20px;
  /* font-weight: 300; */
`;

export default Resources;
