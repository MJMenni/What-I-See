import { useState, useContext } from "react";
import UserContext from "./UserContext";
import styled from "styled-components";

// Missing useHistory b/c using new React version. Refer to Facespace to see useHistory use.

const Login = () => {
  const [state, setState] = useState(true);
  const [userInput, setUserInput] = useState("");
  const { loggedInUser, setLoggedInUser, status, setStatus } =
    useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ userInput }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedInUser(data.data);
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
            Log in to save your stats and track your symptoms
          </LoginMessage>
        </MessagesWrap>

        <form onSubmit={handleSubmit}>
          <LoginInputWrap>
            <UserInput
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
              value={userInput}
              type="test"
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
              minlength="1"
              placeholder="Email"
              placeholderTextColor="#004aad"
            ></Email>
            <LoginButton type="submit">Log in</LoginButton>
            {state === false ? (
              <div>Invalid username, please try again</div>
            ) : null}
          </LoginInputWrap>
          <ConfirmationMessage>Success. Logged in!</ConfirmationMessage>
          {/* <ConfirmationMessage>
            Missing some info, try again!{" "}
          </ConfirmationMessage> */}
          <DownloadWrap>
            <DownloadButton>Download stats</DownloadButton>
          </DownloadWrap>
        </form>
      </LoginWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 50px;
  max-width: 540px;
  /* width: 38%; */
  margin-right: auto;
  margin-left: auto;
`;

const LoginWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px var(--blue) solid;
  border-radius: 5px;
`;

const MessagesWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;
`;

const LoginMessage = styled.div`
  font-weight: 900;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const ConfirmationMessage = styled.div`
  opacity: 60%;
  text-align: right;
  font-size: 14px;
  margin-right: 25px;
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

const DownloadWrap = styled.div`
  width: 150px;
  font-size: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const DownloadButton = styled.button`
  background-color: var(--blue);
  color: white;
  border: var(--blue) 1px solid;
  border-radius: 5px;
  padding: 10px 15px;
  font-weight: 900;
  margin: 20px 0px;
`;

export default Login;
