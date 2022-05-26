// import process from "process";
import React from "react";

import classes from "./Avatar.module.css";

const Avatar = props => {
  return (
    <div className={`${classes.avatar} ${props.className}`} style={props.style}>
      <img
        src={`${process.env.REACT_APP_API}/api/users/images/${props.image}`}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
