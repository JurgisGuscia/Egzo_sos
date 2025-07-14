import React, { useEffect, useState } from "react";
import "./companyIntro.scss";
import { Link } from "react-router-dom";
export default function CompanyIntro() {
  const [stats, setStats] = useState();
  useEffect(() => {
    fetch(`https://www.egzoticsos.nyxie.lt/getTotalStats.php`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setStats(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="companyIntro">
      <div className="transitionFromCallToAction"></div>
      <div className="companyIntroContainer">
        <div className="companyIntroInnerWrapper">
          <img src="/img/pele2.png" alt="mouse" className="hangingMouse"></img>
          <div className="becomeVolunteerContainer">
            <h5>Kas mes esame?</h5>
            <h3>Savanoriška organizacija, gelbėjanti neįprastus augintinius</h3>
            <p>
              Mūsų organizacija - savanoriška įstaiga, teikianti pagalbą
              egzotiniams ir dekoratyviniams gyvūnams. Turime ne vienerių metų
              praktiką ir patirtį globojant egzotinius ir dekoratyvinius
              augintinius. Kiekvienas gyvūnas, ar tai būtų plunksnuotas,
              žvynuotas ar kailiniuotas, nusipelno šanso gyventi. Stengiamės,
              jog kiekvienas augintinis rastų sau mylinčius šeimininkus.
            </p>
            <Link to="/volunteeringForm" className="becomeVolunteerButton">
              Tapk savanoriu
            </Link>
            <img
              src="/img/kidphoto.jpg"
              className="kidPhoto"
              alt="grown up with few kids"
            ></img>
            <img
              src="/img/photoborder.png"
              className="photoFrame"
              alt="playful border"
            ></img>
          </div>

          <div className="companyAnimalStatusCardContainer">
            <div className="companyAnimalStatusCard">
              <h3>
                {stats ? (
                  stats.priglausta
                ) : (
                  <img
                    src="/img/loading.gif"
                    className="loadingInfo"
                    alt="loading"
                  />
                )}
              </h3>
              <h4>Priglausta</h4>
            </div>
            <div className="companyAnimalStatusCard">
              <h3>
                {stats ? (
                  stats.padovanoti
                ) : (
                  <img
                    src="/img/loading.gif"
                    className="loadingInfo"
                    alt="loading"
                  />
                )}
              </h3>
              <h4>Padovanoti</h4>
            </div>
            <div className="companyAnimalStatusCard accentBg widerStatusCard">
              <h3>
                {stats ? (
                  stats.dovanojami
                ) : (
                  <img
                    src="/img/loading.gif"
                    className="loadingInfo"
                    alt="loading"
                  />
                )}
              </h3>
              <h4>Dovanojama</h4>
            </div>
            <div className="companyAnimalStatusCard">
              <h3>
                {stats ? (
                  stats.globojami
                ) : (
                  <img
                    src="/img/loading.gif"
                    className="loadingInfo"
                    alt="loading"
                  />
                )}
              </h3>
              <h4>Globojama</h4>
            </div>
            <div className="companyAnimalStatusCard">
              <h3>10+</h3>
              <h4>Savanorių</h4>
            </div>
          </div>
          <div className="additionalCallToActionCardContainer">
            <div className="additionalCallToActionCard">
              <h3>
                Negalite auginti arba radote egzotinį ar dekoratyvinį gyvūną?
              </h3>
              <p>
                Gyvūno amžius ir būklė visiškai nesvarbi – mes juo pasirūpinsime
                bei surasime jam naujus namus.
              </p>
              <div className="phoneNumberContainer">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.7517 29.8516H26.5817C6.93171 28.7216 4.14171 12.1416 3.75171 7.08156C3.72029 6.68814 3.7668 6.29239 3.88859 5.91697C4.01037 5.54156 4.20504 5.19387 4.46143 4.89381C4.71782 4.59376 5.0309 4.34725 5.38272 4.1684C5.73455 3.98955 6.11821 3.88188 6.51171 3.85156H12.0217C12.4223 3.85118 12.8137 3.97107 13.1453 4.19573C13.477 4.42038 13.7335 4.73943 13.8817 5.11156L15.4017 8.85156C15.5481 9.21511 15.5844 9.61364 15.5062 9.99765C15.4279 10.3817 15.2386 10.7342 14.9617 11.0116L12.8317 13.1616C13.1644 15.0523 14.0699 16.7952 15.4256 18.1545C16.7813 19.5138 18.5218 20.4239 20.4117 20.7616L22.5817 18.6116C22.8632 18.3377 23.2191 18.1528 23.605 18.0799C23.9909 18.007 24.3897 18.0493 24.7517 18.2016L28.5217 19.7116C28.8882 19.8644 29.2009 20.123 29.42 20.4542C29.639 20.7855 29.7545 21.1744 29.7517 21.5716V26.8516C29.7517 27.6472 29.4356 28.4103 28.873 28.9729C28.3104 29.5355 27.5474 29.8516 26.7517 29.8516ZM6.75171 5.85156C6.4865 5.85156 6.23214 5.95692 6.04461 6.14446C5.85707 6.33199 5.75171 6.58635 5.75171 6.85156V6.93156C6.21171 12.8516 9.16171 26.8516 26.6917 27.8516C26.8231 27.8597 26.9548 27.8418 27.0792 27.7989C27.2037 27.756 27.3184 27.689 27.4169 27.6017C27.5154 27.5143 27.5956 27.4084 27.6531 27.29C27.7106 27.1716 27.7441 27.043 27.7517 26.9116V21.5716L23.9817 20.0616L21.1117 22.9116L20.6317 22.8516C11.9317 21.7616 10.7517 13.0616 10.7517 12.9716L10.6917 12.4916L13.5317 9.62156L12.0317 5.85156H6.75171Z"
                    fill="#3B41F0"
                  />
                </svg>
                +370 60436652
              </div>
              <img
                src="/img/papuga2.png"
                className="parrotImage"
                alt="small parrot"
              ></img>
            </div>
            <div className="additionalCallToActionCard">
              <h3>Norite auginti dekoratyvinį ar egzotinį augintinį?</h3>
              <p>
                Išsirinkite augintinį iš mūsų dovanojamų augintinių sarašo ir
                susisiekite telefonu ar mesengeriu.
              </p>
              <div
                className="lookForPetScrollButton"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.7506 26.4382L20.1986 18.8862C22.0134 16.7075 22.9184 13.913 22.7253 11.0841C22.5322 8.25514 21.2559 5.60956 19.1618 3.69768C17.0678 1.78581 14.3173 0.754841 11.4826 0.819252C8.64778 0.883664 5.94696 2.03849 3.94194 4.04351C1.93693 6.04852 0.782102 8.74934 0.71769 11.5841C0.653278 14.4189 1.68424 17.1694 3.59612 19.2634C5.50799 21.3574 8.15357 22.6337 10.9825 22.8268C13.8114 23.0199 16.6059 22.115 18.7846 20.3002L26.3366 27.8522L27.7506 26.4382ZM2.7506 11.8522C2.7506 10.0721 3.27844 8.33208 4.26738 6.85203C5.25631 5.37199 6.66192 4.21844 8.30645 3.53725C9.95099 2.85606 11.7606 2.67783 13.5064 3.0251C15.2522 3.37237 16.8559 4.22953 18.1146 5.48821C19.3732 6.74688 20.2304 8.35052 20.5777 10.0964C20.9249 11.8422 20.7467 13.6518 20.0655 15.2963C19.3843 16.9409 18.2308 18.3465 16.7507 19.3354C15.2707 20.3243 13.5306 20.8522 11.7506 20.8522C9.36447 20.8495 7.07682 19.9005 5.38957 18.2132C3.70231 16.526 2.75325 14.2383 2.7506 11.8522Z"
                    fill="#3B41F0"
                  />
                </svg>
                Ieškoti augintinio
              </div>
              <img
                src="/img/degu.png"
                className="deguImmage"
                alt="small degu"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
