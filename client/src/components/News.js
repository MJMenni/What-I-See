import styled from "styled-components";
import { useState, useEffect } from "react";
import { Loading } from "./Loading";

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
    return <Loading />;
  }

  return (
    <Wrap>
      <Intro>Keep up with the latest news about VSS!</Intro>
      <AllArticlesWrap>
        {/* <AllArticlesWrap key={news[0]._id}> */}
        {news.map((article, index) => {
          return (
            <Article>
              <InnerInfoWrap>
                <Link
                  href={news[index].url}
                  style={{ cursor: "pointer", textDecoration: "none" }}
                  target="_blank"
                >
                  <Icon src="assets/reading.png"></Icon>
                  <AllNewsInfo>
                    <SourceAndDateWrap>
                      <PubDate>
                        {news[index].datePublished.substr(0, 10)}
                      </PubDate>
                      <Source>{news[index].provider[0].name}</Source>
                    </SourceAndDateWrap>
                    <Title>{news[index].name}</Title>
                    <Description>{news[index].description}</Description>
                  </AllNewsInfo>
                </Link>
              </InnerInfoWrap>
            </Article>
          );
        })}
      </AllArticlesWrap>
    </Wrap>
  );
};

const Link = styled.a`
  &:visited {
    text-decoration: none;
    color: var(--blue);
  }
`;

const Wrap = styled.div`
  line-height: 24px;
`;

const Intro = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin: 65px 0px 40px 0px;
  text-align: center;
`;

const AllArticlesWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AllNewsInfo = styled.div`
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

const SourceAndDateWrap = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

const InnerInfoWrap = styled.div``;

const Article = styled.div`
  border: 2px var(--blue) solid;
  width: 30%;
  border-radius: 5px;
  padding: 20px;
  font-size: 16px;
  text-align: justify;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    opacity: 50%;
  }
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Description = styled.div`
  font-size: 15px;
  padding-bottom: 15px;
`;

const Source = styled.div``;

const PubDate = styled.div``;

export default News;
