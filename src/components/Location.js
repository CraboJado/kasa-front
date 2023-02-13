import React from "react";
import locationImg from '../assets/images/Img.png';
import '../styles/Location.css'

export default function Location() {
  return (
    <article className="Location">
      <img className="Location__img" src={locationImg} alt="location image" />
      <h2 className="Location__title" >Titre de la location</h2>
    </article>
  );
}
