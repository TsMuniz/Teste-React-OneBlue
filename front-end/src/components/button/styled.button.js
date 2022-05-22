import styled from "styled-components";


const StyledButton = styled.span`
  height: 5.2rem;
  width: 70%;
  max-width: 55rem;
  background-color: white;
  color: royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  a {
    display: flex;
    font-size: 2.8rem;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1024px){
    background-color: royalblue;
    margin-bottom: 1rem;
    a {
      color: white;
    }
    &:hover {
      transform: scale(1.01);
    }
  }
`;
export default StyledButton;