import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavLink
        to="/about"
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <About>About</About>
      </NavLink>
      <NavLink to="/">
        <Logo src="assets/logoColor.png"></Logo>
      </NavLink>
      <NavLink
        to="/resources"
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <Resources>Resources</Resources>
      </NavLink>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  margin-bottom: 120px;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  /* border: 1px var(--blue) solid; */
`;

const Logo = styled.img`
  width: 180px;
  margin-left: auto;
  margin-right: auto;
`;

const About = styled.div``;

const Resources = styled.div``;

export default Header;
