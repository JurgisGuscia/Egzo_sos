import React from "react";
import "./animalCard.scss";
import { Link } from "react-router-dom";

export default function AnimalCard({ animal }) {
  const linkTo = `/detailedAnimalInfo/${animal.id}`;
  return (
    <Link to={linkTo}>
      <div className="animalCard">
        <div className="animalCardInfoDisplay">
          <h3 className="animalCardInfoDisplayHeader">{animal.name}</h3>
          <div className="animalCardInfoLine">
            <span className="header">Rūšis</span>
            <span className="infoText">{animal.mark}</span>
          </div>
          <div className="animalCardInfoLine">
            <span className="header">Į prieglaudą pateko </span>
            <span className="infoText">{animal.date}</span>
          </div>
          <div className="animalCardSplitInfoLine">
            <span className="leftSide">
              <span className="header">Lytis</span>
              <span className="infoText">
                {!animal.gender ? "Nenurodyta" : animal.gender}
              </span>
            </span>
            <span className="rightSide">
              <span className="header">Amžius</span>
              <span className="infoText">
                {animal.age === -1 ? "Nenurodyta" : animal.age}
              </span>
            </span>
          </div>
          <span className="readMoreLink">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 0.5V2.5H16.59L0 19.09L1.41 20.5L18 3.91V16.5H20V0.5H4Z"
                fill="#3B41F0"
              />
            </svg>
            Skaityti daugiau
          </span>
        </div>
        {animal.category === "Globojami" && (
          <div className="animalCardHover globojama">
            <span className="overlayText">Globojama</span>
          </div>
        )}
        {animal.category === "Padovanoti" && (
          <div className="animalCardHover padovanota">
            <span className="overlayText">Padovanota</span>
          </div>
        )}
        {animal.category === "Liks atmintį" && (
          <div className="animalCardHover liksAtminty">
            <span className="overlayText">Liks atmintyje</span>
          </div>
        )}
        <img src={animal.img} alt="animal" />
        <div className="whiteOval"></div>
        <p className="animalName">
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.85352V8.85352H22.59L6 25.4435L7.41 26.8535L24 10.2635V22.8535H26V6.85352H10Z"
              fill="#3B41F0"
            />
          </svg>
          {animal.name}
        </p>
      </div>
    </Link>
  );
}
