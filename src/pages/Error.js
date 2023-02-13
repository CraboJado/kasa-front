import React from "react";
import "../styles/Error.css";

export default function Error() {
  return (
    <section className="Error">
      <p className="Error__code">404</p>
      <div className="Error__msg">
        <span>Oups! La page que</span>
        <span>vous demandez n'existe pas.</span>
      </div>
      <a href="">Retourner sur la page d’accueil</a>
    </section>
  );
}
