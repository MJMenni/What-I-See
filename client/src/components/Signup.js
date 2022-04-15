import { useState, useContext } from "react";
import UserContext from "./UserContext";
import styled from "styled-components";

// Missing useHistory b/c using new React version. Refer to Facespace to see useHistory use.

const Signup = () => {
  const [state, setState] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ emailInput, userInput }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedInUser(data.data);
        console.log("signed in");
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
      <SignupTitle>Sign Up</SignupTitle>
      <LoginWrap>
        <MessagesWrap>
          <LoginMessageTitle>New to the site?</LoginMessageTitle>
          <LoginMessage>Create your free account today</LoginMessage>
        </MessagesWrap>

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
            <LoginButton type="submit">Create account</LoginButton>
          </LoginInputWrap>
          {state === false ? (
            <Confirmation>Invalid username, please try again</Confirmation>
          ) : (
            <Confirmation>Success. Account created!</Confirmation>
          )}
        </form>
      </LoginWrap>
    </Wrap>
  );
};

const SignupTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  width: 85%;
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
`;

const Wrap = styled.div`
  max-width: 540px;
  margin-right: auto;
  margin-left: auto;
`;

const LoginWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px var(--blue) solid;
  border-radius: 5px;
  padding: 35px 25px 15px 25px;
`;

const MessagesWrap = styled.div`
  border-radius: 5px;
  margin-bottom: 35px;
`;

const LoginMessageTitle = styled.div`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 10px;
`;

const LoginMessage = styled.div`
  text-align: center;
`;

const LoginInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;

const UserInput = styled.input`
  width: 85%;
  padding: 10px 15px;
  border: lightgray 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Email = styled.input`
  width: 85%;
  padding: 10px 15px;
  border: lightgray 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const LoginButton = styled.button`
  color: var(--blue);
  width: 85%;
  padding: 10px 15px;
  border: lightgray 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
`;

// Confirmation
const Confirmation = styled.div`
  text-align: center;
  opacity: 75%;
  font-size: 14px;
  margin-bottom: 20px;
`;

export default Signup;
