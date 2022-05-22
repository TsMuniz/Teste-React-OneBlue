import axios from "axios";
const URL = 'http://localhost:4000';

export const api = axios.create({
  baseURL: URL,
})

export const newUser = async (name, password) => {
  return api.post('/user/cadaster', {name, password})
}

export const login = async (name, password) => {
  return api.post('/login', {name, password})
}