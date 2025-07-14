import React from "react";
import { Link } from "react-router-dom";
import "./materialSupport.scss";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer.jsx";
import Sponsors from "../../components/sponsors/Sponsors.jsx";
export default function MaterialSupport() {
  return (
    <div className="materialSupportPage">
      <NavBar />
      <div className="materialSupportHeader">
        <div className="innerWrapper">
          <h1>Parama daiktais</h1>
          <p>
            Priimame gyvūnų priežiūros reikmenis, narvus, valymo priemones
            patalpoms ir kt. Turite kitų nereikalingų daiktų? Susisiekite su
            mumis!
          </p>
          <button>
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7517 26.1211H23.5817C3.93171 24.9911 1.14171 8.41109 0.751712 3.35109C0.720288 2.95767 0.766801 2.56192 0.888587 2.1865C1.01037 1.81109 1.20504 1.4634 1.46143 1.16335C1.71782 0.863294 2.0309 0.616782 2.38272 0.437933C2.73455 0.259085 3.11821 0.151416 3.51171 0.121095H9.02171C9.42227 0.120707 9.81372 0.240604 10.1453 0.465256C10.477 0.689909 10.7335 1.00896 10.8817 1.38109L12.4017 5.12109C12.5481 5.48464 12.5844 5.88317 12.5062 6.26719C12.4279 6.6512 12.2386 7.00377 11.9617 7.28109L9.83171 9.4311C10.1644 11.3218 11.0699 13.0648 12.4256 14.4241C13.7813 15.7833 15.5218 16.6934 17.4117 17.0311L19.5817 14.8811C19.8632 14.6073 20.2191 14.4223 20.605 14.3494C20.9909 14.2765 21.3897 14.3188 21.7517 14.4711L25.5217 15.9811C25.8882 16.134 26.2009 16.3925 26.42 16.7238C26.639 17.055 26.7545 17.444 26.7517 17.8411V23.1211C26.7517 23.9167 26.4356 24.6798 25.873 25.2424C25.3104 25.805 24.5474 26.1211 23.7517 26.1211ZM3.75171 2.12109C3.4865 2.12109 3.23214 2.22645 3.04461 2.41399C2.85707 2.60152 2.75171 2.85588 2.75171 3.12109V3.20109C3.21171 9.12109 6.16171 23.1211 23.6917 24.1211C23.8231 24.1292 23.9548 24.1113 24.0792 24.0684C24.2037 24.0255 24.3184 23.9585 24.4169 23.8712C24.5154 23.7839 24.5956 23.6779 24.6531 23.5595C24.7106 23.4411 24.7441 23.3125 24.7517 23.1811V17.8411L20.9817 16.3311L18.1117 19.1811L17.6317 19.1211C8.93171 18.0311 7.75171 9.33109 7.75171 9.24109L7.69171 8.7611L10.5317 5.8911L9.03171 2.12109H3.75171Z"
                fill="white"
              />
            </svg>
            +370 60436652 
          </button>
          <img src="./img/boxes.png" className="booksImage" alt="a mouse"></img>
        </div>
      </div>
      <div className="thingsWeNeed">
        <div className="innerWrapper">
          <h2>Mums nuolat reikia šių DAIKTŲ:</h2>
          <div className="listsContainer">
            <div className="list">
              <h5>Gyvūnų priežiūros reikmenys:</h5>
              <p>
                Šildymo lempos ir šildymo kilimėliai, UVB lempos, termometrai,
                higrometrai, dubenėliai, gertuvės, Popierinis kraikas, Smėlis
                šinčiloms, Daugkartinio naudojimo palutės ir pan.
              </p>
            </div>
            <div className="list">
              <h5>Narvai ir priedai:</h5>
              <p>
                Narvai ir terariumai, Priedai narvams (pvz., šakos, slėptuvės,
                laipiojimo įranga), Bėgimo rateliai (mediniai/plastikiniai nuo
                27 cm skersmens), guoliai, gyvūnų hamakai ir pan.
              </p>
            </div>
            <div className="list">
              <h5>Valymo priemonės:</h5>
              <p>
                Dideli šiukšlių maišai, drėgnos servetėlės, popieriniai
                rankšluosčiai, Dezinfekcinės priemonės, patalpų valymo
                priemonės, Vienkartinės pirštinės, Skalbimo milteliai ir pan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="foodWeNeed">
        <div className="innerWrapper">
          <h2>Mums nuolat reikia šio MAISTO:</h2>
          <div className="foodWeNeedContentContainer">
            <div className="foodWeNeedContentLeftSide">
              <div className="foodList">
                <h4>Graužikų maistas:</h4>
                <p>Šienas</p>
                <p>Granulės</p>
                <p>Švieži vaisiai ir daržovės</p>
                <p>Šviežios šakelės graužikams</p>
              </div>
              <div className="foodList">
                <h4>Paukščių maistas:</h4>
                <p>Specializuoti paukščių mišiniai ir granulės</p>
                <p>Švieži vaisiai ir daržovės</p>
                <p>Sėklų mišiniai</p>
              </div>
              <div className="foodList">
                <h4>Roplių maistas:</h4>
                <p>Gyvi vabzdžiai (svirpliai, kirminai)</p>
                <p>Užšaldytos pelės ir žiurkės </p>
                <p>Specializuotos roplių granulės ir sausas maistas</p>
              </div>
              <div className="foodList">
                <h4>Vėžlių maistas:</h4>
                <p>Spacializuotos vėžlių granulės</p>
                <p>Šviežios daržovės </p>
                <p>Vaisiai</p>
              </div>
            </div>
            <img src="./img/peleValgo.jpg" alt="mouse eating"></img>
          </div>
        </div>
      </div>
      <div className="learnMore">
        <h1>
          Norite padėti finansiškai? Išsiaiškinkite daugiau apie galimus paramos
          būdus!
        </h1>
        <Link to="/monetarySupport">Sužinoti daugiau</Link>
      </div>
      <Sponsors />
      <div className="connectorContainer"></div>
      <div className="materialSupportExpo">
        <div className="innerWrapper">
          <h3>Džiaugiamės jūsų dosnumu ir parama mūsų veiklai!</h3>
          <h2>Jūsų aukotų daiktų nuotraukos</h2>
          <p>
            Kas vienam smulkmena, kitam gali būti gyvybiškai svarbu. Visos jūsų
            lauktuvės, mūsų globotiniams yra labai svarbios ir reiklingos - AČIŪ
          </p>
          <div className="materialSupportPhotoContainer">
            <img src="./img/food1.jpg" alt="animal food"></img>
            <img src="./img/food2.jpg" alt="animal food"></img>
            <img src="./img/food3.jpg" alt="animal food"></img>
            <img src="./img/food4.jpg" alt="animal food"></img>
            <img src="./img/food5.jpg" alt="animal food"></img>
            <img src="./img/food6.jpg" alt="animal food"></img>
            <img src="./img/food7.jpg" alt="animal food"></img>
            <img src="./img/food8.jpg" alt="animal food"></img>
            <img src="./img/food9.jpg" alt="animal food"></img>
            <img src="./img/food10.jpg" alt="animal food"></img>
            <img src="./img/food11.jpg" alt="animal food"></img>
            <img src="./img/food12.jpg" alt="animal food"></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
