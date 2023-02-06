import React from 'react';
import SlideShow from '../components/SlideShow';

import DropDownBar from '../components/DropDownBar';
import DropDownContent from '../components/DropDownContent';

import '../styles/Logement.css'

export default function Logement() {
  return (
    <main>
        <SlideShow/>
        <section className="hotel-info">
            <div className="location-wrapper">
                <div className="location">
                    <h2 className="title">Cozy loft on the Canal Saint-Martin</h2>
                    <p className="city">Paris, Île-de-France</p>
                    <ul className="hashtags">
                        <li>Cocy</li>
                        <li>Canel</li>
                        <li>Paris 10</li>
                    </ul>
                </div>
                <div className="evaluation">
                    <div className="host">
                        <p className="host__name">Alexandre Dumas</p>
                        <img className="host__avatar" src="./assets/images/host.png" alt=""/>
                    </div>
                    <ul className="stars">
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                        <li><i className="fa-solid fa-star"></i></li>
                    </ul>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="description">
                    <DropDownBar title = 'Description'/>
                    <DropDownContent content = {'Description'}/>
                </div>
                <div className="equipment">
                    <DropDownBar title = 'Équipements'/>
                    <ul className="equipment-list">
                        <li>Climatisation</li>
                        <li>Wi-Fi</li>
                        <li>Cuisine</li>
                        <li>Espace de travail</li>
                        <li>Fer à repasser</li>
                        <li>Sèche-cheveux</li>
                        <li>Cintres</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
  )
}
