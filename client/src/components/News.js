import styled from "styled-components";

const News = () => {
  return (
    <Wrapper>
      <Message>Keep up with the latest news and development about VSS!</Message>
      <Article>
        <InnerInfoWrapper>
          <Icon src="assets/readingBlue.png"></Icon>
          <AllNewsInfo>
            <SourceAndDateWrapper>
              <PubDate>Mar-10-2022</PubDate>
              <Source>Yahoo News</Source>
            </SourceAndDateWrapper>
            <Title>
              Ever see spots or dots? Here's all you need to know about Visual
              Snow Syndrome
            </Title>

            <Description>
              He currently serves at the Glasser Brain Tumor Center in Summit,
              New Jersey. People with visual snow syndrome see tiny, flickering
              dots in the entire field of vision. The syndrome was once thought
              to be a form of migraine, but research suggests it is a ...
            </Description>
          </AllNewsInfo>
        </InnerInfoWrapper>
      </Article>
    </Wrapper>
  );
};

const AllNewsInfo = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const Icon = styled.img`
  max-width: 115px;
  max-height: 115px;
  border: 2px var(--blue) solid;
  border-radius: 50%;
  padding: 15px;
`;

const SourceAndDateWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Wrapper = styled.div``;

const InnerInfoWrapper = styled.div`
  display: flex;
`;

const Article = styled.div`
  border-radius: 5px;
  padding: 20px;
  font-size: 16px;
  text-align: justify;
  line-height: 18px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 900;
  text-align: left;
  margin-bottom: 5px;
`;

const Description = styled.div``;

const Source = styled.div``;

const PubDate = styled.div`
  padding-right: 20px;
`;

const Message = styled.div`
  margin-top: 25px;
  line-height: 24px;
  font-size: 18px;
  font-weight: 900;
`;

export default News;
