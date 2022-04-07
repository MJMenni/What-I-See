import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src="assets/logoColor.png"></Logo>
      <Menu>
        <Home>Home</Home>
        <About>About</About>
        <Resources>Resources</Resources>
      </Menu>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  margin-bottom: 60px;
`;

const Menu = styled.div``;

const Logo = styled.img`
  margin-left: auto;
  margin-right: auto;
`;

const Home = styled.div``;

const About = styled.div``;

const Resources = styled.div``;

export default Header;
