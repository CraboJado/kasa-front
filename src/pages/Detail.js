import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import CollapseContent from "../components/CollapseContent";
import Hashtags from "../components/Hashtags";
import Stars from "../components/Rating";
import { useParams } from "react-router-dom";

import "../styles/Detail.css";


export default function Detail() {
  
  const { id } = useParams();
  const [lodge, setLodge] = useState({})

  // normally, we fetch a product detail with id 
  useEffect(()=>{
    fetch('http://localhost:3000/logements.json')
    .then( response => response.json())
    .then( data => {
      const lodge = data.find(element => element.id === id)
      setLodge(lodge)
    })
    .catch( err => console.log(err))
  },[])

  console.log(lodge.tags)
  return (
    <main className="Detail">
      <Carousel pictures = {lodge.pictures?lodge.pictures:[]} />
      <section className="Detail__info">
        <div className="Detail__location-wrap">
          <div className="Detail__location">
            <h2 className="Detail__location__title">
              {lodge.title}
            </h2>
            <p className="Detail__location__city">{lodge.location}</p>
            <Hashtags tags = { lodge.tags?lodge.tags:[] } />
          </div>
          <div className="Detail__evaluation">
            <div className="Detail__evaluation__host">
              <p className="host__name">{lodge.host ? lodge.host.name : ""}</p>
              <img
                className="host__avatar"
                src={lodge.host ? lodge.host.picture : ""}
                alt=""
              />
            </div>
            <Stars rating = {lodge.rating ? lodge.rating : "0" }/>
          </div>
        </div>
        <div className="Detail__content-wrap">
          <Collapse title="Description">
            <CollapseContent content={lodge.description ? lodge.description : ""} />
          </Collapse>
          <Collapse title="Équipements">
            <CollapseContent equipments = {lodge.equipments ? lodge.equipments : []}/>
          </Collapse>
        </div>
      </section>
    </main>
  );
}
