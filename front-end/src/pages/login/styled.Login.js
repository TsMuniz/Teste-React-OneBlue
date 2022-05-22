import styled from "styled-components";

const LoginWrapper = styled.section`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  padding: 2.5rem;
  color: royalblue;
  h1 {
    color: royalblue;
    font-size: 4rem;
    font-weight: 700;
  } 
  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export default LoginWrapper;