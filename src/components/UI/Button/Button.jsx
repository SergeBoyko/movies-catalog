import React from "react";
import PropTypes from 'prop-types';

const Button = ({ actionclass = "primary", title, clicked, ...rest }) => {
  const classes = `btn btn-${actionclass}`;

  return (
    <button className={classes} onClick={clicked} {...rest} data-test='ButtonComponent'>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  clicked: PropTypes.func
}

export default Button;
