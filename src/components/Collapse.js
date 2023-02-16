import React, { useState } from "react";
import '../styles/Collapse.css'

export default function Collapse({ title, children }) {

  const [isOpen, setIsOpen] = useState(false)

  const showContent = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article className="Collapse">
      <div className="Collapse__header" onClick = { showContent }>
        <h3 className="Collapse__title">{title}</h3>
        {
          isOpen ? 
          <i className="fa-sharp fa-solid fa-chevron-up Collapse__chevron-up"></i>
          :
          <i className="fa-sharp fa-solid fa-chevron-down Collapse__chevron-down"></i>
        }
      </div>
      {isOpen ? children : null}
    </article>
  );
}
