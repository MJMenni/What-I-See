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
        <LogoWrapper>
          <Logo src="assets/logoColor.png"></Logo>
        </LogoWrapper>
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
  height: 50px;
  display: flex;
  margin-bottom: 200px;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 40px;
  border: 1px var(--blue) solid;
  background-color: var(--blue);
`;

const LogoWrapper = styled.div`
  background-color: white;
  width: 180px;
  height: 180px;
  margin-top: 60px;
`;

const Logo = styled.img`
  width: 180px;
  margin-left: auto;
  margin-right: auto;
`;

const About = styled.div`
  color: white;
`;

const Resources = styled.div`
  color: white;
`;

export default Header;
