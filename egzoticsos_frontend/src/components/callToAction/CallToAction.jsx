import React from "react";
import "./callToAction.scss";
import { Link } from "react-router-dom";
export default function CallToAction() {
  return (
    <div className="callToActionContainer">
      <div className="callToActionInnerWrapper">
        <h5>Prisidėkite prie mūsų veiklos</h5>
        <h2>Jūsų veiksmai gali išgelbėti egzotiniams gyvūnams gyvybes!</h2>
        <p>
          Prisijungti prie „EgzoticSOS“ veiklos galima įvairiais būdais.
          Vertiname kiekvieną pagalbos formą: vieni gali padėti finansiškai,
          kiti – skirdami savo laiką ir žinias. Įvertinkite savo laiko galimybes
          bei laukiame Jūsų susisiekiant.
        </p>
        <div className="callToActionCardContainer">
          <Link to="/gpmSupport">
            <div className="callToActionCard gpmParama">
              <span className="cardTextContainer">Skirk 1,2 % GPM paramos</span>
              <img src="/img/papuga.png" alt="parrot"></img>
            </div>
          </Link>
          <Link to="/materialSupport">
            <div className="callToActionCard daiktuParama">
              <span className="cardTextContainer">Parama Daiktais</span>
              <img src="/img/pele.png" alt="mouse"></img>
            </div>
          </Link>
          <Link to="/monetarySupport">
            <div className="callToActionCard pinigineParama">
              <span className="cardTextContainer">Finansinė parama</span>
              <img src="/img/vezlys.png" alt="turtle"></img>
            </div>
          </Link>
          <Link to="/volunteering">
            <div className="callToActionCard savanoriaukParama">
              <span className="cardTextContainer">Savanoriauk</span>
              <img src="/img/triusis.png" alt="rabbit"></img>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
