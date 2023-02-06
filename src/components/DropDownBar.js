import React from "react";
import '../styles/DropDownBar.css'

export default function DropDownBar({ title }) {

  return (
    <div className="dropdown">
      <h3 className="dropdown__title">{ title }</h3>
      <i className="fa-sharp fa-solid fa-chevron-up chevron-up"></i>
      <i className="fa-sharp fa-solid fa-chevron-down chevron-down"></i>
    </div>
  );
}