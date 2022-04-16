import { useState, useContext } from "react";
import UserContext from "./UserContext";
import styled from "styled-components";

// Missing useHistory b/c using new React version. Refer to Facespace to see useHistory use.

const Login = () => {
  const [state, setState] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ emailInput }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("logged in");
        setUser(data.data);
        if (data.data) {
          localStorage.setItem("user", JSON.stringify(data.data));
        }
      })
      .catch((err) => {
        setState(false);
        console.log(err);
      });
  };

  return (
    <Wrap>
      <OuterWrap>
        <InnerWrap>
          <LoginMessageTitle>Already have an account?</LoginMessageTitle>
          <LoginMessage>Log in and view your stats</LoginMessage>
        </InnerWrap>

        <form onSubmit={handleSubmit}>
          <LoginInputWrap>
            <UserInput
              id="username"
              value={userInput}
              type="test"
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
              minlength="1"
              placeholder="Username"
              placeholderTextColor="#004aad"
            ></UserInput>
            <Email
              id="email"
              value={emailInput}
              type="test"
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
              minlength="1"
              placeholder="Email"
              placeholderTextColor="#004aad"
            ></Email>
            <LoginButton type="submit">Log in</LoginButton>
          </LoginInputWrap>
          {state === false ? (
            <Confirmation>Invalid username, please try again</Confirmation>
          ) : (
            <Confirmation>Success. Logged in!</Confirmation>
          )}
        </form>
      </OuterWrap>
    </Wrap>
  );
};

// Wraps
const Wrap = styled.div`
  max-width: 540px;
  margin-right: auto;
  margin-left: auto;
`;

const OuterWrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px var(--blue) solid;
  border-radius: 5px;
  padding: 35px 25px;
`;

// Login message
const InnerWrap = styled.div`
  /* border: 3px yellow solid; */
`;

const LoginMessageTitle = styled.div`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 10px;
  /* border: 1px purple solid; */
`;

const LoginMessage = styled.div`
  margin-bottom: 35px;
  text-align: center;
`;

// Login
const LoginInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  /* border: 1px green solid; */
`;

const UserInput = styled.input`
  width: 85%;
  /* width: 225px; */
  padding: 10px 15px;
  border: lightgray 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Email = styled.input`
  width: 85%;
  /* width: 225px; */
  padding: 10px 15px;
  border: lightgray 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const LoginButton = styled.button`
  color: var(--blue);
  width: 85%;
  /* width: 225px; */
  padding: 10px 15px;
  border: lightgray 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
  &:active {
    background-color: var(--blue);
    border: 1px solid var(--blue);
    box-shadow: 0 1px var(--blue);
    color: white;
  }
`;

// Confirmation
const Confirmation = styled.div`
  text-align: center;
  opacity: 75%;
  font-size: 14px;
`;

export default Login;
