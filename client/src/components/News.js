import styled from "styled-components";

const News = () => {
  return (
    <Wrapper>
      <Message>Keep up with the latest news and development about VSS!</Message>
      <Article>
        <OuterInfoWrapper>
          <InnerInfoWrapper>
            <Icon src="assets/readingBlue.png"></Icon>
            <SourceAndDateWrapper>
              <Source>Yahoo News</Source>
              <PubDate>Mar-10-2022</PubDate>
            </SourceAndDateWrapper>
          </InnerInfoWrapper>
          <Title>
            Ever see spots or dots? Here's all you need to know about Visual
            Snow Syndrome
          </Title>
        </OuterInfoWrapper>

        <Description>
          He currently serves at the Glasser Brain Tumor Center in Summit, New
          Jersey. People with visual snow syndrome see tiny, flickering dots in
          the entire field of vision. The syndrome was once thought to be a form
          of migraine, but research suggests it is a ...
        </Description>
      </Article>
      <Article></Article>
      <Article></Article>
      <Article></Article>
    </Wrapper>
  );
};

const Icon = styled.img`
  width: 100px;
  border: 2px var(--blue) solid;
  border-radius: 50%;
  padding: 15px;
`;

const OuterInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SourceAndDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Wrapper = styled.div``;

const InnerInfoWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin-bottom: 10px;
`;

const Article = styled.div`
  /* width: 50%; */
  height: fit-content;
  border-radius: 5px;
  border: 1px var(--blue) solid;
  margin-top: 30px;
  padding: 20px;
  font-size: 15px;
  text-align: justify;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 900;
  margin-top: 30px;
`;

const Description = styled.div``;

const Source = styled.span``;

const PubDate = styled.span``;

const Message = styled.div`
  margin-top: 25px;
  line-height: 24px;
  font-size: 18px;
  font-weight: 900;
`;

export default News;
