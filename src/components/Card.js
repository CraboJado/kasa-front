import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Card.css'

export default function Card(lodge) {

  const navigate = useNavigate();

  const checkDetail = (id) => {
    navigate(`/detail/${id}`);
  }
  
  return (
    <article className="Card" onClick = { id => checkDetail(lodge.id) }>
      <img className="Card__img" src={lodge.cover} alt="Card image" />
      <h2 className="Card__title" >{lodge.title}</h2>
    </article>
  );
}
