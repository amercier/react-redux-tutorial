import React from 'react';
import { string, func, oneOf, node } from 'prop-types';

/**
 * A button.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.type - Button type.
 * @param {Function} props.onClick - Function to call on click.
 * @param {string} props.className - Class name.
 * @param {*} props.children - Button content.
 * @returns {React.Element} The rendered <button> element.
 */
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

/**
 * A button with "button-inline" class.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.type - Button type.
 * @param {Function} props.onClick - Function to call on click.
 * @param {*} props.children - Button content.
 * @returns {React.Element} The rendered <button> element.
 */
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
