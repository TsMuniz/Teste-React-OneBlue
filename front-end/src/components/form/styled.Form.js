import styled from "styled-components";

const FormWrapper = styled.form`
    width: 100%;
    height: 45rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* border-radius: 0.5rem;
    box-shadow: .2rem .2rem .2rem .2rem rgba(0,0,0,0.6); */
    button {
      height: 3.8rem;
      width: 12rem;
      font-size: 1.8rem;
    }

    div {
      height: 2.5rem;
      font-size: 2rem;
      font-weight: 500;
    }
    @media (min-width: 90rem) {
      align-items: center;
    }
`;

export default FormWrapper;