import styled from "styled-components";
import UserContext from "./UserContext";
import { useContext } from "react";

const Stats = ({ onSave }) => {
  let { user } = useContext(UserContext);

  return (
    <Container>
      <StatsButtonOuterWrap>
        <StatsButtonWrap>
          <ButtonMessage>To add your current stats</ButtonMessage>
          <AddStatsButton onClick={onSave}>Add stats</AddStatsButton>
        </StatsButtonWrap>
        <StatsButtonWrap>
          <ButtonMessage>To view all your stats</ButtonMessage>
          <ViewStatsButton>View stats</ViewStatsButton>
        </StatsButtonWrap>
      </StatsButtonOuterWrap>
      {user.stats.length !== 0 && (
        <StatsTitle> {user.username}'s VSS STATS</StatsTitle>
      )}
      <AllStatsWrap>
        {user.stats.length !== 0 &&
          user.stats
            .slice(0)
            .reverse()
            .map((entry, index) => {
              return (
                <StatsWrap key={index}>
                  <StatsOuterWrap>
                    <StatsInnerWrap>
                      <StatCat>Visual snow levels </StatCat>
                      <Stat>Opacity: {entry.slider.opacity}/10</Stat>
                      <Stat>Size: {entry.slider.size}/5</Stat>
                      <Stat>Speed: {entry.slider.speed}/4</Stat>
                    </StatsInnerWrap>
                    <StatsInnerWrap>
                      <StatCat>Halo levels</StatCat>
                      <Stat>Halos: {entry.slider.halo}/10</Stat>
                    </StatsInnerWrap>
                    <StatsInnerWrap>
                      <StatCat>Tinnitus track(s)</StatCat>
                      {entry.audio.Static === true && <Stat>Static</Stat>}
                      {entry.audio.Buzzing === true && <Stat>Buzzing</Stat>}
                      {entry.audio.Kettle === true && <Stat>Kettle</Stat>}
                      {entry.audio.Roaring === true && <Stat>Roaring</Stat>}
                      {entry.audio.Screeching === true && (
                        <Stat>Screeching</Stat>
                      )}
                      {entry.audio.Electric === true && <Stat>Electric</Stat>}
                    </StatsInnerWrap>
                  </StatsOuterWrap>
                  <StatCat id="notes">Notes</StatCat>
                  <Stat>{entry.note}</Stat>
                </StatsWrap>
              );
            })}
      </AllStatsWrap>
    </Container>
  );
};

const Container = styled.div`
  max-width: 72%;
  margin-right: auto;
  margin-left: auto;
`;

const AllStatsWrap = styled.div`
  overflow-x: scroll;
  max-height: 750px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

// Stat buttons
const StatsButtonOuterWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StatsButtonWrap = styled.div`
  padding: 35px 25px 25px 25px;
  border: 1px var(--blue) solid;
  border-radius: 5px;
  width: 45%;
  display: flex;
  flex-direction: column;
`;

const ButtonMessage = styled.div`
  font-size: 16px;
  font-weight: 900;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const AddStatsButton = styled.button`
  background-color: var(--blue);
  color: white;
  border: var(--blue) 1px solid;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 900;
  margin: 20px 0px;
  margin-right: auto;
  margin-left: auto;
  font-size: 18px;
  width: 85%;
  &:active {
    opacity: 85%;
  }
`;

const ViewStatsButton = styled.button`
  color: white;
  font-size: 18px;
  font-weight: 900;
  width: 85%;
  background-color: var(--blue);
  border: var(--blue) 1px solid;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 20px 0px 20px 5px;
  margin-right: auto;
  margin-left: auto;
  &:active {
    opacity: 85%;
  }
`;

// Stats
const StatsOuterWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StatsInnerWrap = styled.div`
  width: 30%;
`;

const StatsWrap = styled.div`
  padding: 25px 45px;
  border: 1px var(--blue) solid;
  line-height: 30px;
  border-radius: 5px;
  margin-top: 25px;
  padding-bottom: 35px;
`;

const StatCat = styled.div`
  font-weight: 900;
  margin-top: 15px;
  font-size: 18px;
  &#notes {
    margin-top: 25px;
  }
`;

const Stat = styled.div`
  line-height: 30px;
`;

const StatsTitle = styled.div`
  font-weight: 900;
  font-size: 20px;
  margin-top: 50px;
  padding-bottom: 10px;
`;

export default Stats;
