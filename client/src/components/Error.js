import styled from "styled-components";

const Error = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  border: 1px solid red;
  height: 75px;
  width: 85%;
  justify-content: center;
  align-items: center;
  color: #ee673e;
  font-size: 14px;
`;

export default Error;
