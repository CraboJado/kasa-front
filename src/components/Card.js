import React from "react";
import '../styles/Card.css'

export default function Card(lodge) {
  
  return (
    <article className="Card">
      <img className="Card__img" src={lodge.cover} alt="Card image" />
      <h2 className="Card__title" >{lodge.title}</h2>
    </article>
  );
}
