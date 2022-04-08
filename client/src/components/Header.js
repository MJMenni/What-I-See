import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <NavLink
          to="/about"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <About>ABOUT</About>
        </NavLink>
        <NavLink
          to="/resources"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <Resources>RESOURCES</Resources>
        </NavLink>
      </InnerWrapper>
      <NavLink to="/">
        <LogoWrapper>
          <Logo src="assets/logoColor.png"></Logo>
        </LogoWrapper>
      </NavLink>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 225px;
  padding: 40px;
  background-color: var(--blue);
`;

const InnerWrapper = styled.div`
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
