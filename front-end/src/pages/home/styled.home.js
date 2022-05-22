import styled from "styled-components";


const HomeContainer = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    margin-bottom: 4rem;
    font-size: 5rem;
    font-weight: 600;
  }
  span {
    width: 90%;
    img {
      width: 100%;
  
    }
  }

  div {
    height:20.5rem;
    background-color: royalblue;
    width: 100%;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  @media (min-width: 1024px) {
    span {
      display: flex;
      justify-content: center;
      width: 50rem;
      height: 40rem;
      img{
        width: 100%;
      };
    }
    div {
      background-color: inherit;
    }
    padding: 0;
  }
`;
export default HomeContainer;