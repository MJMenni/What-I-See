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
  return (
    <WrapAudio>
      <InnerWrap>
        <SymptomsLabel>Tinnitus</SymptomsLabel>
        <AudioOuterWrap>
          {tinType.map((typ) => {
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
          })}
        </AudioOuterWrap>
        <SymptomsLabel>Notes</SymptomsLabel>
      </InnerWrap>
    </WrapAudio>
  );
};

const WrapAudio = styled.div`
  display: flex;
  max-width: 956px;
  margin-right: auto;
  margin-left: auto;
`;

const InnerWrap = styled.div`
  width: 85%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  line-height: 24px;
`;

// Symptoms label
const SymptomsLabel = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin: 75px 0px 25px 0px;
  text-align: center;
`;

// Tinnitus section
const AudioOuterWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 85%;
  background-color: #f1f3f4;
  padding: 15px 5px 15px 35px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
  /* border: 5px yellow solid; */
`;

const TinnitusType = styled.div`
  margin-top: 25px;
  font-weight: 900;
  width: 15%;
  height: 15%;
  /* border: 1px pink solid; */
`;

const AudioWrap = styled.div`
  margin-top: -25px;
  display: flex;
  width: 43%;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px green solid; */

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
