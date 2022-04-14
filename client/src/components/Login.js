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
          <LoginMessage>
            Already have an account? Log in and view your stats
          </LoginMessage>
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
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
`;

const OuterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px var(--blue) solid;
  border-radius: 5px;
`;

const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0px 25px 0px;
`;

// Login message
const LoginMessage = styled.div`
  font-weight: 900;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 10px;
`;

// Login
const LoginInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 25px 10px 25px;
`;

const UserInput = styled.input`
  width: 150px;
  padding: 5px 10px;
  border: lightgray 1px solid;
  border-radius: 5px;
`;

const Email = styled.input`
  width: 150px;
  padding: 5px 10px;
  border: lightgray 1px solid;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  color: var(--blue);
  width: 150px;
  padding: 5px 10px;
  border: lightgray 1px solid;
  border-radius: 5px;
`;

// Confirmation
const Confirmation = styled.div`
  text-align: center;
  opacity: 75%;
  font-size: 14px;
`;

export default Login;
