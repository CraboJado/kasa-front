import React from "react";
import SlideShow from "../components/SlideShow";
import Collapse from "../components/Collapse";
import CollapseContent from "../components/CollapseContent";

import "../styles/Detail.css";

export default function Detail() {
  return (
    <main className="Detail">
      <SlideShow />
      <section className="Detail__info">
        <div className="Detail__location-wrap">
          <div className="Detail__location">
            <h2 className="Detail__location__title">
              Cozy loft on the Canal Saint-Martin
            </h2>
            <p className="Detail__location__city">Paris, Île-de-France</p>
            {/* map to render li */}
            <ul className="Detail__location__hashtags">
              <li>Cocy</li>
              <li>Canel</li>
              <li>Paris 10</li>
            </ul>
          </div>
          <div className="Detail__evaluation">
            <div className="Detail__evaluation__host">
              <p className="host__name">Alexandre Dumas</p>
              <img
                className="host__avatar"
                src="./assets/images/host.png"
                alt=""
              />
            </div>
            <ul className="stars">
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="Detail__content-wrap">
          <Collapse title="Description">
            <CollapseContent content={"Description"} />
          </Collapse>
          <Collapse title="Équipements">
            {/* map to generate li */}
            <ul className="equipment-list">
              <li>Climatisation</li>
              <li>Wi-Fi</li>
              <li>Cuisine</li>
              <li>Espace de travail</li>
              <li>Fer à repasser</li>
              <li>Sèche-cheveux</li>
              <li>Cintres</li>
            </ul>
          </Collapse>
        </div>
      </section>
    </main>
  );
}
