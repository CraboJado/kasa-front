import React from "react";
import carrousel from "../assets/images/Carrousel.png";
import maskGroup from "../assets/images/MaskGroup.png";
import '../styles/SlideShow.css'

export default function SlideShow() {
  return (
    <section className="slideshow">
      <div className="slides">
        <img src={carrousel} alt="carrousel" />
        <img src={maskGroup} alt="maskGroup" />
      </div>
      <i className="fa-solid fa-chevron-left slideshow__chevron-left"></i>
      <i className="fa-solid fa-chevron-right slideshow__chevron-right"></i>
      <div className="pages">
        <span className="current">1</span>/<span className="total">4</span>
      </div>
    </section>
  );
}
