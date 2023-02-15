import React from "react";
import "../styles/CollapseContent.css";

export default function CollapseContent({ content, equipments }) {

  if (equipments) {

    return (
      <ul className="CollapseContent">
        {equipments.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    );
  } else {

    return <p className="CollapseContent"> {content} </p>;
    
  }
}
