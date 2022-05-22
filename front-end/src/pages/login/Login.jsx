import Form from '../../components/form/Form';
import LoginWrapper from './styled.Login';

// import { Container } from './styles';

function Login() {  
  return (
    <LoginWrapper>
      <h1>Login</h1>
      <Form path="login"/>
    </LoginWrapper>
  ) ;
}

export default Login;