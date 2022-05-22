import React from 'react';
import ErrorMessageWrapper from './styled.ErrorMessage';


function ErrorMessage({errorMessage}) {
  return (
    <ErrorMessageWrapper>
      <p>{errorMessage}</p>
    </ErrorMessageWrapper>
  )
}

export default ErrorMessage;