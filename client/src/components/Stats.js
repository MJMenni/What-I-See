import styled from "styled-components";
import UserContext from "./UserContext";
import { useContext } from "react";

const Stats = ({ onSave }) => {
  let { user, setUser } = useContext(UserContext);

  return (
    <Wrap>
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
        <StatsWrap>
          <StatsTitle>{user.username}'s VSS Stats</StatsTitle>
          <StatsOuterWrap>
            <StatsInnerWrap>
              <StatCat>Visual snow </StatCat>
              <Stat>Opacity: {user.stats[0].slider.opacity}/10</Stat>
              <Stat>Size: {user.stats[0].slider.size}/5</Stat>
              <Stat>Speed: {user.stats[0].slider.speed}/4</Stat>
              <StatCat>Halos</StatCat>
              <Stat>Halos: {user.stats[0].slider.halo}/10</Stat>
            </StatsInnerWrap>
            <StatsInnerWrap>
              <div>
                <StatCat>Tinnitus track(s)</StatCat>
                {user.stats[0].audio.Kettle === true && <Stat>"Kettle"</Stat>}
                <StatCat>Notes</StatCat>
                <Stat>{user.stats[0].note}</Stat>
              </div>
            </StatsInnerWrap>
          </StatsOuterWrap>
        </StatsWrap>
      )}
    </Wrap>
  );
};

const StatsOuterWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StatsInnerWrap = styled.div`
  /* border: 1px green solid; */
  width: 45%;
`;

const StatCat = styled.div`
  font-weight: 900;
  margin-top: 15px;
`;

const StatsButtonOuterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 2px yellow solid; */
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
  /* border: 1px pink solid; */
  text-align: center;
`;

const Wrap = styled.div`
  max-width: 72%;
  margin-right: auto;
  margin-left: auto;
`;

// Stats section
const Stat = styled.div`
  line-height: 30px;
  margin-left: 25px;
`;

const StatsTitle = styled.div`
  font-weight: 900;
  font-size: 20px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 25px;
`;

const StatsWrap = styled.div`
  padding: 25px 45px;
  border: 1px var(--blue) solid;
  line-height: 30px;
  border-radius: 5px;
  margin-top: 50px;
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

export default Stats;
