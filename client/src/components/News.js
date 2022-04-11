import styled from "styled-components";
import { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    fetch(`/api/resources`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data.data.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!news) {
    return <div>"is loading" </div>;
  }
  return (
    <Wrapper>
      <Intro>Keep up with the latest news about VSS!</Intro>
      <AllArticlesWrapper>
        <Article>
          <InnerInfoWrapper>
            <Icon src="assets/reading.png"></Icon>
            <Link
              href={news[0].url}
              style={{ cursor: "pointer", textDecoration: "none" }}
              target="_blank"
            >
              <AllNewsInfo>
                <SourceAndDateWrapper>
                  <PubDate>{news[0].datePublished.substr(0, 10)}</PubDate>
                  <Source>{news[0].provider[0].name}</Source>
                </SourceAndDateWrapper>
                <Title>{news[0].name}</Title>
                <Description>{news[0].description}</Description>
              </AllNewsInfo>
            </Link>
          </InnerInfoWrapper>
        </Article>
        <Article>
          <InnerInfoWrapper>
            <Icon src="assets/reading.png"></Icon>

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
            <Icon src="assets/reading.png"></Icon>
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
            <Icon src="assets/reading.png"></Icon>
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

const Link = styled.a``;

const Wrapper = styled.div`
  line-height: 24px;
`;

const Intro = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin: 55px 0px 25px 0px;
`;

const AllArticlesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 250px;
  margin: 20px 0px;
  overflow: scroll;
`;

const AllNewsInfo = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  width: 350px;
  &:visited {
    text-decoration: none;
    color: var(--blue);
  }
`;

const Icon = styled.img`
  max-width: 80px;
  max-height: 80px;
  border: 2px var(--blue) solid;
  border-radius: 50%;
  object-fit: cover;
  padding: 15px;
  /* margin-top: 5px; */
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
