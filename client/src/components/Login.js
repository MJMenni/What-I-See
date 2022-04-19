import { useState, useContext } from "react";
import UserContext from "./UserContext";
import styled from "styled-components";

const Login = () => {
  const [message, setMessage] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle login from existing user
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
        if (data.status === 200) {
          setUser(data.data);
          if (data.data) {
            localStorage.setItem("user", JSON.stringify(data.data));
          }
          setMessage("Success. Logged in!");
        } else {
          setMessage("Invalid username, please try again");
        }
      })
      .catch((err) => {
        setMessage("Error");
        console.log(err);
      });
  };

  return (
    <Container>
      <OuterWrap>
        <InnerWrap>
          <LoginMessageTitle>Already have an account?</LoginMessageTitle>
          <LoginMessage>Log in and view your stats</LoginMessage>
        </InnerWrap>

        <form onSubmit={handleSubmit}>
          <LoginInputWrap>
            <Input
              id="username"
              value={userInput}
              type="test"
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
              minlength="1"
              placeholder="Username"
              placeholderTextColor="#004aad"
            ></Input>
            <Input
              id="email"
              value={emailInput}
              type="test"
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
              minlength="1"
              placeholder="Email"
              placeholderTextColor="#004aad"
            ></Input>
            <LoginButton type="submit">Log in</LoginButton>
          </LoginInputWrap>
          <Confirmation>{message}</Confirmation>
        </form>
      </OuterWrap>
    </Container>
  );
};

const Container = styled.div`
  max-width: 540px;
  margin-right: auto;
  margin-left: auto;
`;

const OuterWrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px var(--blue) solid;
  border-radius: 5px;
  padding: 35px 25px 15px 25px;
  min-height: 312px;
`;

// Login message
const InnerWrap = styled.div``;

const LoginMessageTitle = styled.p`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 10px;
`;

const LoginMessage = styled.p`
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
`;

const Input = styled.input`
  width: 85%;
  padding: 10px 15px;
  border: var(--mid-gray) 1px solid;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const LoginButton = styled.button`
  color: var(--blue);
  width: 85%;
  padding: 10px 15px;
  border: var(--mid-gray) 1px solid;
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
const Confirmation = styled.p`
  text-align: center;
  opacity: 75%;
  font-size: 14px;
`;

export default Login;
