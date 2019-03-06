import React from "react";

const Button = ({ actionclass = "primary", title, clicked, ...rest }) => {
  const classes = `btn btn-${actionclass}`;

  return (
    <button className={classes} onClick={clicked} {...rest}>
      {title}
    </button>
  );
};

export default Button;
