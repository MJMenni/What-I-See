import styled from "styled-components";
import { useState, useEffect } from "react";
import { Loading } from "./Loading";

const News = () => {
  const [news, setNews] = useState();

  // Get news articles from Bing API
  useEffect(() => {
    fetch(`/api/resources`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.data.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!news) {
    return <Loading />;
  }

  return (
    <Container>
      <Intro>Keep up with the latest news about VSS!</Intro>

      <AllArticlesWrap>
        {news.map((article) => {
          return (
            <Article key={article._id}>
              <InnerInfoWrap>
                <Link
                  href={article.url}
                  style={{ cursor: "pointer", textDecoration: "none" }}
                  target="_blank"
                >
                  <Icon src="assets/reading.png" alt="Reading"></Icon>
                  <AllNewsInfo>
                    <SourceAndDateWrap>
                      <PubDate>{article.datePublished.substr(0, 10)}</PubDate>
                      <Source>{article.provider[0].name}</Source>
                    </SourceAndDateWrap>
                    <Title>{article.name}</Title>
                    <Description>{article.description}</Description>
                  </AllNewsInfo>
                </Link>
              </InnerInfoWrap>
            </Article>
          );
        })}
      </AllArticlesWrap>
    </Container>
  );
};

const Container = styled.div`
  line-height: 24px;
`;

const AllArticlesWrap = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  padding: 10px;
  color: var(--blue);
  &:visited {
    text-decoration: none;
    color: var(--blue);
  }
`;

// Articles
const Intro = styled.p`
  font-size: 24px;
  font-weight: 900;
  margin: 65px 0px 40px 0px;
  text-align: center;
`;

const Article = styled.p`
  font-size: 16px;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  min-width: 30%;
  padding: 20px;
  margin-right: 44px;
  margin-bottom: 10px;
  border: 2px var(--blue) solid;
  border-radius: 5px;
  color: var(--blue);
  scrollbar-width: none;
  &:hover {
    transform: scale(1.02);
    transition-duration: 1s;
  }
`;

const Link = styled.a`
  &:visited {
    text-decoration: none;
    color: var(--blue);
  }
`;

const AllNewsInfo = styled.div`
  color: var(--blue);
  &:visited {
    text-decoration: none;
    color: var(--blue);
  }
`;

const Icon = styled.img`
  width: 85px;
  height: 85px;
  border: 2px var(--blue) solid;
  border-radius: 50%;
  object-fit: cover;
  padding: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 15px;
`;

// Article info
const InnerInfoWrap = styled.div``;

const SourceAndDateWrap = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

const Source = styled.p``;

const PubDate = styled.p``;

const Title = styled.p`
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
  padding-bottom: 15px;
`;

export default News;
