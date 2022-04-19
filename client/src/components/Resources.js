import styled from "styled-components";
import News from "./News";

const Resources = () => {
  return (
    <Container>
      <Wrap>
        <Title>Visual Snow Syndrome Resources</Title>
        <LinksWrap>
          <SingleLinkWrap>
            <Link
              href="https://www.visualsnowinitiative.org/"
              style={{ cursor: "pointer", textDecoration: "none" }}
              target="_blank"
            >
              <Resource>Visual Snow Initiative</Resource>
              <LinkInfo>
                The Visual Snow Initiative was established to increase awareness
                for VSS, build a community for those who suffer from the
                condition, and to generate the capital necessary for research
                and medical advancements.
              </LinkInfo>
            </Link>
          </SingleLinkWrap>
          <SingleLinkWrap>
            <Link
              href="https://www.reddit.com/r/visualsnow/"
              style={{ cursor: "pointer", textDecoration: "none" }}
              target="_blank"
            >
              <Resource>You are Not Alone!</Resource>
              <LinkInfo>
                You are Not Alone! is a Reddit group for people living with VSS.
                The online community covers all things related to the condition,
                and is a great place to look up specific topics or ask
                questions.
              </LinkInfo>
            </Link>
          </SingleLinkWrap>
          <SingleLinkWrap>
            <Link
              href="https://www.ata.org/"
              style={{ cursor: "pointer", textDecoration: "none" }}
              target="_blank"
            >
              <Resource>American Tinnitus Association</Resource>
              <LinkInfo>
                The American Tinnitus Association is a nonprofit organization
                that focuses on tinnitus. Their core purpose is to promote
                prevention and relief, and work towards finding a cure.
              </LinkInfo>
            </Link>
          </SingleLinkWrap>
        </LinksWrap>
        <News />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1250px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 75px;
`;

const Wrap = styled.div`
  width: 66%;
  margin-right: auto;
  margin-left: auto;
`;

const Title = styled.h1``;

const LinksWrap = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--blue);
  justify-content: space-between;
`;

const SingleLinkWrap = styled.div`
  padding: 10px 0px;
  width: 30%;
  justify-content: space-between;
  border: 2px var(--blue) solid;
  border-radius: 5px;
  &:hover {
    transform: scale(1.02);
    transition-duration: 1s;
  }
  &:visited {
    text-decoration: none;
  }
`;

const Resource = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
`;

const Link = styled.a`
  font-size: 20px;
  color: var(--blue);
  font-weight: 600;
  margin-top: 50px;
`;

const LinkInfo = styled.p`
  font-size: 16px;
  line-height: 22px;
  padding: 20px;
  font-weight: 300;

  &:visited {
    text-decoration: none;
  }
`;

export default Resources;
