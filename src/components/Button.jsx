import React from 'react';
import { string, func, oneOf, node } from 'prop-types';

const Button = ({ type, onClick, className, children }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  type: oneOf(['button', 'submit', 'cancel']).isRequired,
  className: string,
  onClick: func,
  children: node.isRequired,
};

Button.defaultProps = {
  className: null,
  onClick: null,
};

const ButtonInline = ({ type, onClick, children }) => (
  <Button type={type} className="button-inline" onClick={onClick}>
    {children}
  </Button>
);

ButtonInline.propTypes = {
  type: oneOf(['button', 'submit', 'cancel']).isRequired,
  onClick: func.isRequired,
  children: node.isRequired,
};

export { ButtonInline };
export default Button;
