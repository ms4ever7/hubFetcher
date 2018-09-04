import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  let buttonElement = <button
    onClick={props.onClick}
    className="button-element"
  >
    {props.children}
  </button>


  const classList = ['button', `button-color-${props.color}`, props.className];

  if (props.disabled) {
    classList.push('button-disabled');
  }

  return (
    <div className={classList.join(' ')}>
      {buttonElement}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  as: PropTypes.string,
  color: PropTypes.oneOf(['purple', 'red', 'black']),
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  disabled: false,
  color: 'purple',
  onClick: null,
  href: '',
  as: '',
};

export default Button;