import React from 'react';
import Form from '../../components/form/Form';
import RegisterContainer from './styled.Register';



function Register() {
  return (
    <RegisterContainer>
        <h1>Cadastre-se</h1>
       <Form path="cadastro"/>
    </RegisterContainer>
  );
}

export default Register;