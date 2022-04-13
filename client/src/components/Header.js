import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <OuterWrap>
      <InnerWrap>
        <NavLink
          to="/about"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <About>ABOUT VSS</About>
        </NavLink>
        <NavLink
          to="/resources"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <Resources>RESOURCES</Resources>
        </NavLink>
      </InnerWrap>
      <NavLink to="/">
        <LogoWrapper>
          <Logo src="assets/logoColor.png"></Logo>
        </LogoWrapper>
      </NavLink>
    </OuterWrap>
  );
};

const OuterWrap = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 300px;
  padding: 40px;
  background-color: var(--blue);
`;

const InnerWrap = styled.div`
  font-weight: 900;
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  width: 180px;
  height: 180px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`;

const Logo = styled.img`
  width: 180px;
`;

const About = styled.div`
  color: white;
  font-size: 18px;
  margin-top: -5px;
`;

const Resources = styled.div`
  color: white;
  font-size: 18px;
  margin-top: -5px;
`;

export default Header;
