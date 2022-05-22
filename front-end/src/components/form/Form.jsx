import PropTypes from "prop-types"
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import Input from '../Input/Input';
import FormWrapper from './styled.Form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from "../errorMessage/ErrorMessage";
import { loginValidation, registerValidation, schema} from "./validation";
import StatusMessage from '../StatusMessage/StatusMessage';

function Form({path}) {
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsREgistered] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  
  
  
  const {register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
    
  function handleUser(user) {

      if (path === 'cadastro') {
        setLoading(true);
        registerValidation(user).then((response) => setIsREgistered(response));
        setLoading(false);
      }

      if (path === 'login') {
        setLoading(true);
        loginValidation(user).then((response) => setIsLogged(response));
        setLoading(false);
      }
  }

  return (
    <FormWrapper onSubmit={handleSubmit(handleUser)}>
      <Input label="Nome" name="name" type="text" register={register}/>
      <ErrorMessage errorMessage={errors.name?.message}/>
      <Input label="Senha" name="password" type="password" register={register}/>
      <ErrorMessage errorMessage={errors.password?.message}/>
      <button>
        {path === "login" && ('Entrar')}
        {path === "cadastro" && ('Enviar')}
      </button>
      {
        loading && (<h2>carregando...</h2>)
      }
      <div>
      {  isRegistered &&  (<StatusMessage message="Usuario(a) cadastrado com sucesso!!" color="green"/>) }

      { isRegistered === false &&  (<StatusMessage message="Este usuário(a) já foi cadastrado, tente novamente!" color="red"/>) }

      { isLogged  === true &&  (<StatusMessage message="Sucesso ao logar" color="green"/>) }

      {isLogged === false && (<StatusMessage message="Usuáario ou senha incorretos!" color="red"/>) }
      </div>
    </FormWrapper>
  ) ;
}

Form.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Form;