import React, { useRef, useEffect, useState } from "react";

import "./gyvalazdes.scss";
import NavBar from "../../../components/navBar/NavBar";
import Footer from "../../../components/footer/Footer.jsx";
import { useLocation } from "react-router-dom";
import CarePageHeader from "../../../components/carePageHeader/CarePageHeader.jsx";
import { useNavigate } from "react-router-dom";
import "../../../utilityStyles/animalCareContentContainer.scss"; // bendras wrapperis visiem gyvunu prieziuros komponentam\
import "../../../utilityStyles/animalCareSideBar.scss";
import UsefullFact from "../../../components/usefullFact/UsefullFact.jsx";
import AnimalsLookingForHome from "../../../components/animalsLookingForHome/AnimalsLookingForHome.jsx";
import ReadMore from "../../../components/readMore/ReadMore.jsx";
import cardArray from "../../../utility/cardArray.jsx";

export default function Gyvalazdes({ state }) {
  const navigate = useNavigate();
  const location = useLocation();
  const headerInfo = {
    img: location.state.img,
    header: location.state.name,
    info: location.state.info,
  };
  const [bendraVisible, setBendraVisible] = useState(true);
  const [lytisVisible, setLytisVisible] = useState(false);
  const [laikymasVisible, setLaikymasVisible] = useState(false);
  const [mitybaVisible, setMitybaVisible] = useState(false);
  const [maistasVisible, setMaistasVisible] = useState(false);
  const [ligosVisible, setLigosVisible] = useState(false);
  const [prieziuraVisible, setPrieziuraVisible] = useState(false);

  const resetAll = () => {
    setBendraVisible(false);
    setLytisVisible(false);
    setLaikymasVisible(false);
    setMitybaVisible(false);
    setMaistasVisible(false);
    setLigosVisible(false);
    setPrieziuraVisible(false);
  };

  const handleClick = (check) => {
    const item = document.getElementById(check);
    item.scrollIntoView({ behavior: "smooth" });
  };

  const elementsRef = useRef([]);
  const [closestElementIndex, setClosestElementIndex] = useState(null);

  const getCenterDistance = (element) => {
    const rect = element.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;

    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;

    const distanceX = elementCenterX - viewportCenterX;
    const distanceY = elementCenterY - viewportCenterY;

    return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  };

  const findClosestElement = () => {
    let closestIndex = null;
    let minDistance = Infinity;

    elementsRef.current.forEach((element, index) => {
      if (element) {
        const distance = getCenterDistance(element);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });
    setClosestElementIndex(closestIndex);
    switch (closestIndex) {
      case 0:
        resetAll();
        setBendraVisible(true);
        break;
      case 1:
        resetAll();
        setLytisVisible(true);
        break;
      case 2:
        resetAll();
        setLaikymasVisible(true);
        break;
      case 3:
        resetAll();
        setMitybaVisible(true);
        break;
      case 4:
        resetAll();
        setMaistasVisible(true);
        break;
      case 5:
        resetAll();
        setLigosVisible(true);
        break;
      case 6:
        resetAll();
        setPrieziuraVisible(true);
        break;
      default:
        resetAll();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      findClosestElement();
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    findClosestElement();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="gyvalazdesPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/gyvalazde.jpg"
              alt="gyvalazde"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>Dydis: 3 – 36cm.</p>
              <p>Gyvenimo trukmė: apie 1m.</p>
              <p>
                Gyvalazdės savo išvaizda dažnai imituoja augalų šakas arba
                lapus, kai kurios rūšys turi spygliukus ant viso kūno, taip
                siekdamos apsisaugoti nuo plėšrūnų. Tai naktį aktyvūs gyvūnai.
              </p>
              <p>
                Dažniausiai gyvalazdės dauginasi partenogenezės būdu – tai
                reiškia, jog patelė padeda nepavaisintus kiaušinėlius, iš kurių
                išsirita motinai identiški palikuoniai, todėl patinėliai yra
                labai reti. Patelė kiaušinėlius deda ant žemės arba klijuoja ant
                lapų (priklauso nuo rūšies), gali padėti nuo 100 iki 1500
                kiaušinėlių. Gyvalazdžių yra labai daug rūšių.{" "}
              </p>
            </div>
            <UsefullFact
              message={
                "Yra apie 700 gyvalazdžių rūšių, ir jos gali būti randamos įvairiose aplinkose – nuo gėlo vandens telkinių ir pelkių iki drėgnų miškų ir net sausumos."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Gyvalazdžių lyties nustatymas gali būti sudėtingas, nes jie
                neturi akivaizdžių lytinių požymių, kurie būtų lengvai
                pastebimi.
              </p>
            </div>
            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Nelaisvėje gyvalazdės auginamos terariumuose. Labai svarbu, jog
                terariumas būti kuo aukštesnis, nes nėrimosi metu, gyvalazdė
                stengiasi užsikabinti kuo aukščiau ir neriasi žemyn. Kai kurioms
                rūšims tinkamas substratas – durpės, jos gerai sulaiko drėgmę,
                gyvalazdei patogu dėti kiaušinėlius. Terariumas turi būti
                drėgnas, nuolat purškiamas vandeniu, drėgmė ypač svarbi
                sėkmingam gyvalazdės nerimuisi. Terariumą rekomenduojama pridėti
                kuo daugiau medžio šakelių, įvairių lapų, jog gyvalazdė turėtų
                kur laipioti bei slėptis.
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Tinkamas pašaras – daiginti grūdai (kviečiai, avižos, gilės),
                mėta, melisa, ąžuolo, klevo,beržo, salotos, avietės, kinrožės
                lapai, tradeskantės gėlė, braškių lapai, žemuogių lapai, laukinė
                rožė .{" "}
              </p>
              <p>Juodoji vikralazdė(nuodinga) minta tik alyvos lapais. </p>
              <p>
                Kuo labiau paįvairinsite vabzdžio racioną, tuo gyvūnas gaus
                įvairesnių aminorūgščių, ir, tikėtina, gyvens ilgiau. papildomo
                vandens šaltinio nereikia, gyvūnai reikiama vandens kiekį gauna
                iš maisto bei drėgnos aplinkos.
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                Gyvalazdės yra labai specifinių maisto poreikių gyvūnai, ir jų
                dietos pasirinkimai priklauso nuo jų rūšies. Dauguma gyvalazdžių
                yra kraujo siurbėjai, tačiau kai kurios rūšys yra detritivorai
                arba mitybos bendradarbiai, valgytojai kitų mažų organizmų.
                Priklausomai nuo gyvalazdžių rūšies ir jų dietos pobūdžio, tam
                tikri maisto produktai gali būti kenksmingi. Štai keletas bendrų
                maisto produktų, kurių reikėtų vengti duodant gyvalazdėms:
                <ul>
                  <li>Perdirbti maisto produktai</li>
                  <li>Druskos turintys produktai</li>
                  <li>Pieno produktai</li>
                  <li>Cukrus ir saldumynai</li>
                  <li>Vaisiai ir daržovės</li>
                  <li>Kofeinas ir alkoholis</li>
                  <li>Riešutai ir sėklos</li>
                  <li>Mėsos produktai su kaulais</li>
                  <li>Sūrus maistas</li>
                  <li>Maisto produktai su konservantais ir priedais</li>
                </ul>
              </p>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                <b>Parazitų infekcijos. </b>Gyvalazdės gali būti užkrėstos
                įvairiais parazitais, tokiais kaip pirmuonys, kirminai ir
                plokštieji kirmėliai.
              </p>
              <p>
                <b>Bakterinės infekcijos. </b>Bakterijos gali sukelti įvairias
                infekcijas gyvalazdžių kūne.
              </p>
              <p>
                <b>Virusinės infekcijos. </b>Nors retesnės, virusinės infekcijos
                taip pat gali paveikti gyvalazdes.
              </p>
              <p>
                <b>Grybelių infekcijos. </b>Grybeliai gali sukelti odos ligas ir
                infekcijas.
              </p>
              <p>
                <b>Traumos. </b>Gyvalazdės gali patirti traumas, susijusias su
                mechaniniais pažeidimais ar aplinkos veiksniais.
              </p>
              <p>
                <b>Apsinuodijimai. </b>Gyvalazdės gali būti apsinuodijusios dėl
                cheminių medžiagų, toksinų ar netinkamo maisto.
              </p>
              <p>
                <b>Metaboliniai sutrikimai. </b>Nesubalansuota dieta ar
                maistinių medžiagų trūkumas gali sukelti metabolinius
                sutrikimus.
              </p>
              <p>
                <b>Išoriniai parazitai. </b>Gyvalazdės gali turėti išorinių
                parazitų, tokių kaip mažieji vabalai ar kiti nedideli gyvūnai.
              </p>
              <p>
                <b>Ekologiniai stresai. </b>Aplinkos veiksniai, tokie kaip
                vandens kokybės pablogėjimas, temperatūros pokyčiai ar kiti
                stresoriai, gali paveikti gyvalazdžių sveikatą.
              </p>
              <p>
                <b>Metamorfiniai sutrikimai. </b>Kai kurios gyvalazdžių rūšys
                gali patirti sutrikimų per metamorfinio vystymosi fazę.
              </p>
              <p>
                <b>Priklausomybė nuo aplinkos veiksnių. </b>Gyvalazdės,
                gyvenančios nepalankiose aplinkos sąlygose, gali patirti
                sveikatos sutrikimus dėl netinkamų sąlygų, tokių kaip mažas
                deguonies kiekis ar tarša.
              </p>
            </div>
          </div>
          <div className="animalCareSideBar">
            <div className="navigationContainer">
              <h2>Navigacija:</h2>
              <p
                onClick={() => handleClick("bendra")}
                className={bendraVisible && "active"}
              >
                - Bendra informacija
              </p>
              <p
                onClick={() => handleClick("lytis")}
                className={lytisVisible && "active"}
              >
                - Lyties nustatymas
              </p>
              <p
                onClick={() => handleClick("laikymas")}
                className={laikymasVisible && "active"}
              >
                - Laikymo sąlygos
              </p>
              <p
                onClick={() => handleClick("mityba")}
                className={mitybaVisible && "active"}
              >
                - Mityba
              </p>
              <p
                onClick={() => handleClick("maistas")}
                className={maistasVisible && "active"}
              >
                - Kenksmingas maistas
              </p>
              <p
                onClick={() => handleClick("ligos")}
                className={ligosVisible && "active"}
              >
                - Dažnos ligos ir negalavimai
              </p>
            </div>
            <div className="markContainer">
              <h2>Temų žymos:</h2>
              <div className="markList">
                {cardArray.map((item) => {
                  return (
                    <div
                      className="link"
                      onClick={() => {
                        navigate(item.link, {
                          state: {
                            img: item.img,
                            name: item.name,
                            info: item.info,
                          },
                        });
                      }}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimalsLookingForHome breed={headerInfo.header} />
      <ReadMore breed={headerInfo.header} />
      <Footer />
    </div>
  );
}
