import styled from "styled-components";

const Stats = () => {
  return (
    <Wrap>
      <ViewStatsWrap>
        <ViewStatsButton>View stats</ViewStatsButton>
        <AddStatsButton>Add stats</AddStatsButton>
      </ViewStatsWrap>
      <StatsWrap>
        <StatsTitle>Your VSS Stats</StatsTitle>
        <Stat>Username:</Stat>
        <Stat>Visual snow size:</Stat>
        <Stat>Visual snow opacity:</Stat>
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
  /* width: 38%; */
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

const ViewStatsWrap = styled.div`
  width: fit-content;
  margin-right: auto;
  margin-left: auto;
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
  /* border: 1px green solid; */
`;

export default Stats;
