import styled from "styled-components";

const Stats = () => {
  return (
    <Wrap>
      <ViewStatsWrap>
        <AddStatsButton>Add stats</AddStatsButton>
        <ViewStatsButton>View stats</ViewStatsButton>
      </ViewStatsWrap>
      <StatsWrap>
        <StatsTitle>Your VSS Stats</StatsTitle>
        <Stat>Username:</Stat>
        <Stat>Visual snow:</Stat>
        <Stat>Tinnitus track(s):</Stat>
        <Stat>Notes:</Stat>
      </StatsWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  border: 1px var(--blue) solid;
  margin-top: 50px;
  max-width: 72%;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
`;

const ViewStatsWrap = styled.div`
  width: fit-content;
  display: flex;
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
  width: 150px;
  margin-right: 5px;
`;

const ViewStatsButton = styled.button`
  color: white;
  font-size: 18px;
  font-weight: 900;
  width: 150px;
  background-color: var(--blue);
  border: var(--blue) 1px solid;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 20px 0px 20px 5px;
  margin-right: auto;
  margin-left: auto;
`;

export default Stats;
