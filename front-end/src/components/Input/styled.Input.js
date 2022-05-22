import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;

  label {
      font-size: 1.8rem;
      margin-right: 0.5rem;
      font-weight: 600;
      display: none;
     
    }
    
    input {
      border-style: none;
      width: 100%;
      height: 4rem;
      font-size: 1.8rem;
      padding: 0.8rem ;
      box-shadow: 0.15rem 0.15rem 0.15rem 0.15rem rgba(0,0,0,0.1);
    }
    @media (min-width: 900px) {
      width: 60%;
      max-width: 80rem;
      display: flex;
      align-items: center;
      label {
         display: flex;
         font-size: 2.5rem;
         font-weight: 700;
       }
      }
`;

export default InputWrapper;