import React from "react";
import locationImg from '../assets/images/Img.png';
import '../styles/Location.css'

export default function Location() {
  return (
    <article className="location-list__item">
      <img src={locationImg} alt="location image" />
      <h2>Titre de la location</h2>
    </article>
  );
}
