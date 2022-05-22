import styled from 'styled-components';

const StatusWrapper = styled.div`
  p {
    font-size: 2rem;
    color: ${({color}) => `${color}` };
  }
`;
export default StatusWrapper;