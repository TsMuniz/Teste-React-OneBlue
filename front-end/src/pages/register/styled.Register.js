import styled from "styled-components";

const RegisterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  padding: 2.5rem;
  background-color: #fafafa;
  color: royalblue;

  h1 {
    font-size: 4rem;
    font-weight: 700;
  } 
  @media (min-width: 1024px) {
    padding: 0;
  }
`;

export default RegisterContainer;