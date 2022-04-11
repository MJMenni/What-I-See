import styled from "styled-components";

const Loading = () => {
  return (
    <>
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    </>
  );
};

const LoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Loader = styled.span`
  margin-top: 50px;
  border: 4px solid white;
  border-top: 4px solid var(--blue);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: loading 2s linear infinite;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Loading };
