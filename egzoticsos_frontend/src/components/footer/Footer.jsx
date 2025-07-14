import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerInnerContainer">
        <div className="footerTopContainer">
          <div className="footerTopContainerLeftSide">
            <span className="footerLogoContainer">
              <img src="/img/logo.png" alt="company logo"></img>
            </span>
            <div className="footerInfoFieldContainer">
              <p>
                Tel. Nr.:
                <span className="footerinfoFieldBold">
                  +370 604 36 652 – Rūta
                </span>
              </p>
              <p>
                El. paštas:
                <span className="footerinfoFieldBold">
                  egzoticsos@gmail.com
                </span>
              </p>
              <p>
                Adresas:
                <span className="footerinfoFieldBold">
                  Prienų r. Dambravos k., Juodupės g. 28
                </span>
              </p>
            </div>
            <div className="footerSocialMediaContainer">
              <img
                src="/img/instagram.png"
                alt="instagram"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/pagalba_egzotiniams/",
                    "_blank"
                  )
                }
              ></img>
              <img
                src="/img/facebook.png"
                alt="facebook"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/pagalba.egzotinei.faunai/",
                    "_blank"
                  )
                }
              ></img>
              <img
                src="/img/tiktok.png"
                alt="tiktok"
                onClick={() =>
                  window.open("https://www.tiktok.com/@egzoticsos", "_blank")
                }
              ></img>
            </div>
          </div>
          <div className="footerTopContainerRightSide">
            <div className="footerNavigationCell">
              <h2>Nuorodos</h2>
              <Link to="/">Pagrindinis</Link>
              <Link to="/volunteering">Savanorystė</Link>
              <Link to="/education">Edukacija</Link>
              <Link to="/performanceReports">Veiklos ataskaitos</Link>
              <Link to="/animalCare">Gyvūnų priežiūra</Link>
            </div>
            <div className="footerNavigationCell">
              <h2>Gyvūnai</h2>
              <Link to="/allAnimals">Priglausti</Link>
              <Link to="/lookingForHome">Dovanojami</Link>
              <Link to="/underCare">Globojami</Link>
              <Link to="/foundHome">Padovanoti</Link>
              <Link to="/remainsInMemory">Liks atmintį</Link>
            </div>
            <div className="footerNavigationCell">
              <h2>Parama</h2>
              <Link to="/gpmSupport">1,2 % GPM parama</Link>
              <a href="https://www.patreon.com/egzoticsos" target="_blank">
                EgzoticSOS Patreon
              </a>
              <Link to="/monetarySupport">Finansinė parama</Link>
              <Link to="/materialSupport">Parama daiktais</Link>
            </div>
          </div>
        </div>
        <div className="footerSeparatorLine"></div>
        <div className="footerBottomContainer">
          <div className="footerBottomContainerLeftSide">
            Copyright © 2024 egzoticsos.lt | Visos teisės saugomos 
          </div>
          <div className="footerBottomContainerRightSide">
            <Link to="/privatumoPolitika">Privatumo politika</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
