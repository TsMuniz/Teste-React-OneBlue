import { login, newUser} from "../../services/Api";
import * as yup from "yup";

const reg = /^[abcdefghijklmnopqrstuvwxyz]+$/i;

export const schema = yup.object({
  name: yup.string('Nome invalido!')
  .matches(reg, 'Apenas letras são permitidas').required('Campo Obrigatório!'),
  password: yup.string('Senha inválida!').min(6, 'Sua senha deve conter mais que 6 caracterees').required('Campo Obrigatório!')
})


const loginValidation = async(user) => {
  try {
    const response = await login(user.name, user.password)
    return response.data.ok
  } catch (error) {
    return error.response.data.ok
  }
}

const registerValidation = async(user) => {
  try {
    const response = await newUser(user.name, user.password)
    return response.data.ok
  } catch (error) {
    return error.response.data.ok
  }
}

export {loginValidation, registerValidation};