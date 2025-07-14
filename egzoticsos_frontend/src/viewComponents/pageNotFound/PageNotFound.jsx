import React from "react";
import "./pageNotFound.scss";
import NavBar from "../../components/navBar/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="pageNotFoundPage">
      <NavBar />
      <div className="notFoundContainer">
        <div className="innerWrapper">
          <img
            src="./img/404.png"
            alt="404 error"
            className="pageNotFoundImage"
          ></img>
          <h1>Atsiprašome! Puslapis nerastas.</h1>
          <p>
            Puslapis, kurio ieškojote, buvo perkeltas, pervadintas arba
            pašalintas.
          </p>
          <Link to="/">Grįžti į pagrindinį</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
