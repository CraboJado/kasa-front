import React from "react";
import banner from "../assets/images/MaskGroup.png"
import '../styles/Banner.css'

export default function Banner() {
  return (
    <section className="banner">
      <h1>chez vous, partout et ailleurs</h1>
      <img src={banner} alt="" />
    </section>
  );
}
