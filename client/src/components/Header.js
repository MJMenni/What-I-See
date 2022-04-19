import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrap>
        <NavLink
          to="/about"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <MenuItem>ABOUT VSS</MenuItem>
        </NavLink>
        <NavLink
          to="/resources"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <MenuItem>RESOURCES</MenuItem>
        </NavLink>
      </Wrap>
      <NavLink to="/">
        <LogoWrap>
          <Logo src="assets/logoColor.png" alt="Round logo with eye"></Logo>
        </LogoWrap>
      </NavLink>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 300px;
  padding: 40px;
  background-color: var(--blue);
`;

const Wrap = styled.div`
  font-weight: 900;
  display: flex;
  justify-content: space-between;
`;

const MenuItem = styled.div`
  color: white;
  font-size: 18px;
  margin-top: -5px;
`;

const LogoWrap = styled.div`
  width: 180px;
  height: 180px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`;

const Logo = styled.img`
  width: 180px;
`;

export default Header;
