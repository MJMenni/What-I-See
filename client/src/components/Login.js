import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <Prompt>Log in to save your stats!</Prompt>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 42%;
  margin-top: 100px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Prompt = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export default Login;
