import React from "react";
import "./educationalClasses.scss";
import { Link } from "react-router-dom";
export default function EducationalClasses() {
  return (
    <div className="educationalClassesContainer">
      <div className="educationalClassesInnerWrapper">
        <div className="imageGradientEffect"></div>
        <img
          src="/img/kids2.png"
          className="blurredKids"
          alt="group of kids"
        ></img>
        <div className="educationalClassesBanner">
          <h3>Edukacinės pamokėlės</h3>
          <h1>Sužinokite daugiau ir susipažinkite su mūsų globotiniais!</h1>
          <p>
            Užsisakę edukacinę pamokėlę į Jūsų ofisus, mokyklas, darželius ne
            tik gausite glėbį šiltų emocijų, bet ir paremsite mūsų prieglaudą
            finansiškai.
          </p>
          <div className="educationClassesButtonContainer">
            <Link to="/education">
              <div className="readMoreButton">Skaityti daugiau</div>
            </Link>
            <div className="phoneNumberContainer">
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
            </div>
          </div>
        </div>
        <img
          src="/img/iguana2.png"
          className="educationalIguana"
          alt="iguana"
        ></img>
      </div>
    </div>
  );
}
