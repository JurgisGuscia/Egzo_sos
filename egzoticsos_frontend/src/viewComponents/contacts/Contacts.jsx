import React from "react";
import "./contacts.scss";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer.jsx";
import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <div className="contactsPage">
      <NavBar />
      <div className="header">
        <div className="innerWrapper">
          <h1>Mūsų Kontaktai</h1>
          <img
            src="./img/vezlys.png"
            alt="turtle"
            className="contactHeaderImage"
          ></img>
        </div>
      </div>
      <div className="infoContainer">
        <div className="innerWrapper">
          <div className="contactInfo">
            <div className="contacts">
              <h3>Kontaktai</h3>
              <div className="contactLine">
                <img src="/img/phone.svg" alt="phone icon"></img>+370 604 36 652
                - Rūta
              </div>
              <div className="contactLine">
                <img src="/img/mail.svg" alt="email icon"></img>
                egzoticsos@gmail.com
              </div>
              <div className="contactLine">
                <img src="/img/loc.svg" alt="location icon"></img>Prienų r.
                Dambravos k., Juodupės g. 28
              </div>
            </div>
            <div className="info">
              <h3>Rekvizitai</h3>
              <div className="infoCellsContainer">
                <div className="infoCell">
                  <p>Įmonės pavadinimas:</p>
                  <h6>Egzoticsos, VšĮ</h6>
                </div>
                <div className="infoCell">
                  <p>Registracijos adresas:</p>
                  <h6>Juodupės g. 1, Dambrava, LT-59309 Prienų r. </h6>
                </div>
                <div className="infoCell">
                  <p>Įmonės kodas:</p>
                  <h6>305634919</h6>
                </div>
                <div className="infoCell">
                  <p>Sąskaitos numeris:</p>
                  <h6>LT737300010164951801 (SWEDBANK)</h6>
                </div>
              </div>
            </div>
            <div className="follow">
              <h3>Sekite mus</h3>
              <div
                className="followLinkContainer"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/pagalba.egzotinei.faunai/",
                    "_blank"
                  )
                }
              >
                <img src="/img/facebook2.png" alt="facebook"></img>Facebook
              </div>
              <div
                className="followLinkContainer"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/pagalba_egzotiniams/",
                    "_blank"
                  )
                }
              >
                <img src="/img/instagram2.png" alt="instagram"></img>Instagram
              </div>

              <div
                className="followLinkContainer"
                onClick={() =>
                  window.open("https://www.tiktok.com/@egzoticsos", "_blank")
                }
              >
                <img src="/img/tiktok2.png" alt="tiktok"></img>Tiktok
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactFormContainer">
        <div className="innerWrapper">
          <div className="contactForm">
            <h3>Parašykite mums</h3>
            <form
              action="#"
              method="POST"
              id="contactLetter"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label for="nameInput">Vardas</label>
              <input
                type="text"
                id="nameInput"
                name="nameInput"
                autoComplete="off"
                placeholder="Pvz., Vardenis"
              ></input>
              <label for="emailInput">El. paštas</label>
              <input
                type="email"
                id="emailInput"
                name="emailInput"
                autoComplete="off"
                placeholder="pvz., vardas@mail.com"
              ></input>
              <p>
                Mes neparduodame ar kitaip neatskleidžiame jūsų asmens duomenų
                trečiosioms šalims. Daugiau{" "}
                <Link to="/privatumoPolitika">privatumo politikoje.</Link>
              </p>
              <label>Žinutė</label>
              <textarea placeholder="Jūsų tekstas"></textarea>
              <button>Siųsti žinutę</button>
            </form>
          </div>
          <div className="mapContainer">
            <iframe
              width="775"
              height="638"
              frameborder="0"
              title="map"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=775&amp;height=638&amp;hl=en&amp;q=Juodup%C4%97s%20g%201%20Dambrava+(EgzotiSOS)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>{" "}
            <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=fa2b68be1bc1b38e087a7922edc6ad9944c28004"
            ></script>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
