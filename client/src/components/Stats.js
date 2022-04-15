import styled from "styled-components";
import UserContext from "./UserContext";
import { useContext } from "react";

const Stats = ({ onSave }) => {
  let { user, setUser } = useContext(UserContext);
  const userStats = localStorage.getItem("stats");
  const userStatsData = JSON.parse(userStats);
  setUser = userStatsData;
  console.log("userStatsData", userStatsData);
  console.log("user", user);

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

      <StatsWrap>
        <StatsTitle>Your VSS Stats</StatsTitle>
        <Stat>
          Username:
          {user.username}
        </Stat>
        <Stat>Visual snow: {} </Stat>
        <Stat>Tinnitus track(s):</Stat>
        <Stat>Notes:</Stat>
      </StatsWrap>
    </Wrap>
  );
};
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
  /* border: 1px pink solid; */
  font-size: 16px;
  font-weight: 900;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const Wrap = styled.div`
  max-width: 72%;
  margin-right: auto;
  margin-left: auto;
`;

const Stat = styled.div`
  line-height: 30px;
`;

const StatsTitle = styled.div`
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 10px;
`;

const StatsWrap = styled.div`
  padding: 25px;
  border: 1px var(--blue) solid;
  border-radius: 5px;
  margin-top: 30px;
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
`;

export default Stats;
