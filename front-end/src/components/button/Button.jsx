import { Link } from 'react-router-dom';
import StyledButton from './styled.button';

function Button({name}) {
  return (    
    <StyledButton>
      <Link
        to={`/${name}`}
      >
        {name}
      </Link>
    </StyledButton>
  )
}

export default Button;