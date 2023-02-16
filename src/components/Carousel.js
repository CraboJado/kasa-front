import React, { useState } from "react";
import '../styles/Carousel.css'

export default function Carousel({pictures}) {
  const [currentPage, setCurrentPage] = useState(1)

  const preSlide = () => {
 
    if(currentPage === 1 ) {
      setCurrentPage(pictures.length)
    }else{
      setCurrentPage(currentPage - 1)
    }
    
  }

  const nextSlide = () => {
    if(currentPage > pictures.length - 1) {
      setCurrentPage(1)
    }else{
      setCurrentPage(currentPage+1)
    }
    
  }

  
  return (
    <section className="Carousel">
      <div className="Carousel__img-wrap">
        {<img  className="Carousel__img" src={pictures[currentPage-1]} alt="carrousel" />}
      </div>
      <i className="fa-solid fa-chevron-left Carousel__chevron-left" onClick = {preSlide}></i>
      <i className="fa-solid fa-chevron-right Carousel__chevron-right" onClick = {nextSlide}></i>
      <div className="Carousel__pages">
        <span className="Carousel__current">{currentPage}</span>/<span className="Carousel__total">{pictures.length}</span>
      </div>
    </section>
  );
}
