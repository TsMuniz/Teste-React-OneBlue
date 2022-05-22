import PropTypes from "prop-types"
import React from 'react';
import InputWrapper from './styled.Input';


function Input({name, type, label, register}) {
  return (
  <InputWrapper>
    <label htmlFor={name}>{label}</label>
    <input 
      id={name} 
      type={type} 
      placeholder={label}
      name={name} 
      {...register(`${name}`)}
      />
  </InputWrapper>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Input;