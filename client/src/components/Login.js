import styled from "styled-components";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrap>
      <LoginWrap>
        <MessagesWrap>
          <LoginMessage>Log in to save your stats!</LoginMessage>
          <ConfirmationMessage>Success!</ConfirmationMessage>
        </MessagesWrap>

        <form onSubmit={handleSubmit}>
          <LoginInputsWrap>
            <UserInput
              // value={userInput}
              type="test"
              onChange={(e) => {
                // setUserInput(e.target.value);
              }}
              minlength="1"
              placeholder="Username"
              placeholderTextColor="#004aad"
            ></UserInput>
            <Password
              // value={userInput}
              type="test"
              onChange={(e) => {
                // setUserInput(e.target.value);
              }}
              minlength="1"
              placeholder="Password"
              placeholderTextColor="#004aad"
            ></Password>
            <LoginButton>Log in</LoginButton>
            <DownloadButton>Download stats</DownloadButton>
          </LoginInputsWrap>
        </form>
      </LoginWrap>
    </Wrap>
  );
};

const MessagesWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;
`;

const LoginMessage = styled.div``;

const ConfirmationMessage = styled.div``;

const LoginInputsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 15px 15px 15px;
`;

const Wrap = styled.div`
  /* margin-top: 400px; */
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  width: 640px;
`;

const LoginWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px var(--blue) solid;
  border-radius: 5px;
`;

const UserInput = styled.input`
  max-width: 130px;
  padding: 5px 10px;
  border: lightgray 1px solid;
  border-radius: 5px;
`;

const Password = styled.input`
  max-width: 130px;
  padding: 5px 10px;
  border: lightgray 1px solid;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  width: 130px;
  padding: 5px 10px;
  color: var(--blue);
  border: lightgray 1px solid;
  border-radius: 5px;
`;

const DownloadButton = styled.button`
  background-color: var(--blue);
  color: white;
  padding: 5px;
  border: var(--blue) 1 px solid;
  border-radius: 5px;
  padding: 10px 15px;
  font-weight: 900;
`;

export default Login;
