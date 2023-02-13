import React from "react";
import '../styles/Collapse.css'

export default function Collapse({ title, children }) {

  return (
    <article className="Collapse">
      <div className="Collapse__header">
        <h3 className="Collapse__title">{title}</h3>
        <i className="fa-sharp fa-solid fa-chevron-up Collapse__chevron-up"></i>
        <i className="fa-sharp fa-solid fa-chevron-down Collapse__chevron-down"></i>
      </div>
      {children}
    </article>
  );
}
