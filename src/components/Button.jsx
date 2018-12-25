import React from 'react';
import { string, func, node } from 'prop-types';

const Button = ({ onClick, className, children }) => (
  <button type="button" className={className} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: string,
  onClick: func.isRequired,
  children: node.isRequired,
};

Button.defaultProps = {
  className: string,
};

const ButtonInline = ({ onClick, children }) => (
  <Button type="button" className="button-inline" onClick={onClick}>
    {children}
  </Button>
);

ButtonInline.propTypes = {
  onClick: func.isRequired,
  children: node.isRequired,
};

export { ButtonInline };
export default Button;
