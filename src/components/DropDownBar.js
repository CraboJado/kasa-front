import React from "react";
import '../styles/DropDownBar.css'

export default function DropDownBar({ title }) {

  return (
    <div className="DropDownBar">
      <h3 className="DropDownBar__title">{ title }</h3>
      <i className="fa-sharp fa-solid fa-chevron-up DropDownBar__chevron-up"></i>
      <i className="fa-sharp fa-solid fa-chevron-down DropDownBar__chevron-down"></i>
    </div>
  );
}
