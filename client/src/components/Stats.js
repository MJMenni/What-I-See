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
  max-width: 540px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
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

const ViewStatsWrap = styled.div`
  width: fit-content;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  /* border: 1px green solid; */
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
  margin-left: 5px;
  /* border: 1px green solid; */
`;

export default Stats;
