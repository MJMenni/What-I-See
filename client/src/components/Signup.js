import { useState, useContext } from "react";
import UserContext from "./UserContext";
import styled from "styled-components";

const Signup = () => {
  const [userInput, setUserInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle login from new user
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
      <LoginWrap>
        <MessagesWrap>
          <LoginMessageTitle>New to the site?</LoginMessageTitle>
          <LoginMessage>Create your free account today</LoginMessage>
        </MessagesWrap>

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
            <LoginButton type="submit">Create account</LoginButton>
          </LoginInputWrap>
          <Confirmation>{message}</Confirmation>
        </form>
      </LoginWrap>
    </Container>
  );
};

const Container = styled.div`
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
  min-height: 312px;
`;

// Login message
const MessagesWrap = styled.div`
  border-radius: 5px;
`;

const LoginMessageTitle = styled.p`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 10px;
`;

const LoginMessage = styled.p`
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
  margin-bottom: 25px;
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
  margin-bottom: 20px;
`;

export default Signup;
