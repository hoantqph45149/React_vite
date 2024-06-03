import React from "react";
import style from "../components/button.module.scss";

const Button = ({ children }) => {
  return <button className={style.button}>{children}</button>;
};

export default Button;
