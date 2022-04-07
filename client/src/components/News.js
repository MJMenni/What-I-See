import styled from "styled-components";
import { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    fetch(`/api.bing.microsoft.com/v7.0/news/search`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("news", news);

  return (
    <Wrapper>
      <Intro>Keep up with the latest news about VSS!</Intro>
      <AllArticlesWrapper>
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
                New Jersey. People with visual snow syndrome see tiny,
                flickering dots in the entire field of vision. The syndrome was
                once thought to be a form of migraine, but research suggests it
                is a ...
              </Description>
            </AllNewsInfo>
          </InnerInfoWrapper>
        </Article>
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
                New Jersey. People with visual snow syndrome see tiny,
                flickering dots in the entire field of vision. The syndrome was
                once thought to be a form of migraine, but research suggests it
                is a ...
              </Description>
            </AllNewsInfo>
          </InnerInfoWrapper>
        </Article>
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
                New Jersey. People with visual snow syndrome see tiny,
                flickering dots in the entire field of vision. The syndrome was
                once thought to be a form of migraine, but research suggests it
                is a ...
              </Description>
            </AllNewsInfo>
          </InnerInfoWrapper>
        </Article>
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
                New Jersey. People with visual snow syndrome see tiny,
                flickering dots in the entire field of vision. The syndrome was
                once thought to be a form of migraine, but research suggests it
                is a ...
              </Description>
            </AllNewsInfo>
          </InnerInfoWrapper>
        </Article>
      </AllArticlesWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  line-height: 24px;
`;

const Intro = styled.div`
  margin-top: 25px;
  font-size: 20px;
  font-weight: 900;
`;

const AllArticlesWrapper = styled.div`
  height: 450px;
  margin: 20px 0px;
  overflow: scroll;
  max-width: 1500px;
`;

const AllNewsInfo = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const Icon = styled.img`
  max-width: 100px;
  max-height: 100px;
  border: 2px var(--blue) solid;
  border-radius: 50%;
  object-fit: cover;
  padding: 15px;
  margin-top: 5px;
`;

const SourceAndDateWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

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

export default News;
