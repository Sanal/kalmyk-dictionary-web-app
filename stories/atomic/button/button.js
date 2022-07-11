import PropTypes from 'prop-types';
import { StyledButton } from './parts';

export const Button = ({ children, className, onClick, type = 'button' }) => {
  return (
    <StyledButton className={className} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
