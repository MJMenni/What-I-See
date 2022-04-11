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
    <Wrapper>
      <Intro>Keep up with the latest news about VSS!</Intro>
      <AllArticlesWrapper>
        {/* <AllArticlesWrapper key={news[0]._id}> */}
        {news.map((article, index) => {
          return (
            <Article>
              <InnerInfoWrapper>
                <Icon src="assets/reading.png"></Icon>
                <Link
                  href={news[index].url}
                  style={{ cursor: "pointer", textDecoration: "none" }}
                  target="_blank"
                >
                  <AllNewsInfo>
                    <SourceAndDateWrapper>
                      <PubDate>
                        {news[index].datePublished.substr(0, 10)}
                      </PubDate>
                      <Source>{news[index].provider[0].name}</Source>
                    </SourceAndDateWrapper>
                    <Title>{news[index].name}</Title>
                    <Description>{news[index].description}</Description>
                  </AllNewsInfo>
                </Link>
              </InnerInfoWrapper>
            </Article>
          );
        })}
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
