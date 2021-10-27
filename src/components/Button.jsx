import React from "react";
import classNames from "classnames";
import "components/Button.scss";

export default function Button(props) {
  // let buttonClass = "button";
  // if (props.confirm) {
  //   buttonClass += " button--confirm";
  // }
  // if (props.danger) {
  //   buttonClass += " button--danger";
  // }
  const {confirm, danger} = props
  let buttonClass = classNames("button", {
    "button--confirm": confirm,
    "button--danger": danger
  });
 
  return (
    <button 
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

