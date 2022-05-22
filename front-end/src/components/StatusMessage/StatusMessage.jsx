import React from 'react';
import StatusWrapper from './styled.StatusMessages';

const  StatusMessage = ({ message, color }) => {
  console.log(color)
  return (
    <StatusWrapper 
      color={color}
    >
      <p>{message}</p>
    </StatusWrapper>
  );
};

export default StatusMessage;
