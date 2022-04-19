import styled from "styled-components";

const tinType = [
  "Static",
  "Roaring",
  "Buzzing",
  "Screeching",
  "Kettle",
  "Electric",
];

const Tinnitus = ({ onClickHandler }) => {
  const audio = tinType.map((typ) => {
    return (
      <div key={typ}>
        <TinnitusType>{typ}</TinnitusType>
        <AudioWrap>
          <audio
            src={`assets/${typ}.mp3`}
            id={typ}
            controls
            loop
            onPlay={(e) => {
              onClickHandler(e);
            }}
            onPause={(e) => {
              onClickHandler(e);
            }}
          />
        </AudioWrap>
      </div>
    );
  });
  return (
    <Container>
      <Wrap>
        <SymptomsLabel>TINNITUS</SymptomsLabel>

        <AudioOuterWrap>{audio}</AudioOuterWrap>
        <SymptomsLabel>NOTES</SymptomsLabel>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  max-width: 956px;
  margin-right: auto;
  margin-left: auto;
`;

const Wrap = styled.div`
  width: 85%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  line-height: 24px;
`;

// Symptoms label
const SymptomsLabel = styled.p`
  font-size: 20px;
  font-weight: 900;
  margin: 60px 0px 20px 60px;
`;

// Tinnitus section
const AudioOuterWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 85%;
  background-color: var(--light-gray);
  padding: 25px 15px 25px 45px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
`;

const TinnitusType = styled.div`
  margin-top: 25px;
  margin-left: 12px;
  font-weight: 900;
  width: 15%;
  height: 15%;
`;

const AudioWrap = styled.div`
  margin-top: -25px;
  display: flex;
  width: 43%;
  margin-left: 40%;

  audio::-webkit-media-controls-current-time-display,
  audio::-webkit-media-controls-time-remaining-display {
    display: none;
  }
  audio::-webkit-media-controls-timeline,
  video::-webkit-media-controls-timeline {
    display: none;
  }
`;

export default Tinnitus;
