import React from 'react'

export default function SlideShow() {
  return (
    <section className="slideshow">
    <div className="slides">
        <img src="./assets/images/Carrousel.png" alt=""/>
        <img src="./assets/images/MaskGroup.png" alt=""/>
    </div>
    <i className="fa-solid fa-chevron-left slideshow__chevron-left"></i>
    <i className="fa-solid fa-chevron-right slideshow__chevron-right"></i>
    <div className="pages">
        <span className="current">1</span>
        /
        <span className="total">4</span>
    </div>
</section>
  )
}
