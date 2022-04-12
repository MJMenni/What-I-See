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
      <LoginWrap>
        <MessagesWrap>
          <LoginMessage>
            New to the site? Create your free account today
          </LoginMessage>
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
        </form>
      </LoginWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 50px;
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
  padding-bottom: 15px;
`;

const MessagesWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

const LoginMessage = styled.div`
  font-weight: 900;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const LoginInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 15px 10px 15px;
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
  width: 150px;
  padding: 5px 10px;
  color: var(--blue);
  border: lightgray 1px solid;
  border-radius: 5px;
`;

export default Signup;
