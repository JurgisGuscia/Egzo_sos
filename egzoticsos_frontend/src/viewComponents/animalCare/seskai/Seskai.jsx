import React, { useRef, useEffect, useState } from "react";

import "./seskai.scss";
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
export default function Seskai({ state }) {
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
    <div className="seskaiPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/seskas.jpg"
              alt="seskas"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>Gyvenimo trukmė: 5 – 10 metų.</p>
              <p>Svoris: 1 – 2 kg, ilgis apie 40 – 50 cm. </p>
              <p>Per parą šeškai miega apie 14 – 18 valandų, aktyvūs naktį.</p>
            </div>
            <UsefullFact
              message={
                'Šeškai kartais šoka vadinamąjį "karinį šeško šokį", kai jie yra labai susijaudinę arba džiaugiasi. Tai reiškia šuoliukus, sukiojimąsi ir bėgiojimą pirmyn-atgal. Nors šis šokis atrodo grėsmingas, tai paprastai būna žaidimo ženklas.'
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Šeškų lytis nustatoma pagal išorinius lytinius organus.
                Atsižvelgiama į šeško dydį – patinai stambesni už pateles. Taip
                pat, skiriasi patinų ir patelė snukio forma – patelės turi
                smulkesnę galvą ir smailesnę nosi, patinėliai – apvalesnį.
              </p>
              Patinas
              <div className="imageWrapper">
                <img
                  src="./img/animalCare/seskoPatinas.png"
                  alt="sesko lyties nustatymas"
                />
              </div>
              Patelė
              <div className="imageWrapper">
                <img
                  src="./img/animalCare/seskoPatele.png"
                  alt="sesko lyties nustatymas"
                />
              </div>
            </div>
            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Šeškus galima laikyti narve, voljere. Kai gyvūnas yra
                paleidžiamas pasilakstyri, svarbu namie uždengti įvairius
                kampus, tarpus, kur šeškas galėtų įlįsti. Renkant narą naminiams
                šeškams būtina atsižvelgti į tai, jog jie yra labai judrūs ir
                jiems reikia daug vietos. Minimalus narvo dydis 80×100×60 cm.
                Jei jūsų augintinis didesnę laiko dalį praleis narvelyje, geriau
                įrengti dviejų aukštų būstą. Kuo šeško narvelis bus didesnis,
                tuo jis geriau jausis.
              </p>
              <p>
                Narvelyje turi būti gertuvė su šviežiu vandeniu, indelis
                maistui, tualetui skirta vieta (dėžutė su kraiku),
                namelis-slėptuvė, pakabinamas hamakas. Šeškai labai mėgsta
                landžioti po įvairius urvus, vamzdžius, laipioti kopečiomis. Į
                šeško guolį galite pridėti įvairių medvilnės skiaučių.
              </p>
              <p>
                Šeško narvelis turi stovėti vėsioje ir vėdinamoje patalpoje.
                Derėtų vengti tiesioginių saulės spindulių ar radiatorių, nes
                šie gyvūnai yra jautrūs karščiui, taip pat šeškams pavojingas
                skersvėjis. Jei šeškas laikomas narvelyje, būtina jį išleisti
                palankstyti bent kelias valandas per dieną.
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Naminis šeškas yra plėšrūnas, todėl jo mitybos pagrindą turėtų
                sudaryti gyvūninės kilmės baltymai. Galima rinktis aukštos
                kokybės mažiems kačiukams skirtą sausą pašarą, arba tokį, kuris
                yra skirtas naminiams šeškams. Šie gyvūnai labai pripranta prie
                duodamo pašaro, Ankstyvame amžiuje rekomenduojama pratinti
                augintinį prie įvairių rūšių ėdalo.{" "}
              </p>
              <p>
                Šie gyvūnai negali badauti, todėl jei dėl kokių nors ligų šeškas
                neėda, būtina jį maitinti per prievartą. Reikia šeškui duoti-
                žalios mėsos( triušiena, ėriena, jautiena ir kita) . Racione
                turi būti įvairios mėsos bei jos subproduktų – nevirti vištienos
                kaulai, raumuo, kepenys. Šeškus galima palepinti duodant katėms
                skirtų skanėstų ar putpelės kiaušinių.
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                <ul>
                  <li>Vaisiai ir daržovės</li>
                  <li>Angliavandeniai ir cukrus</li>
                  <li>Pieno produktai</li>
                  <li>Šokoladas</li>
                  <li>Kofeinas ir alkoholis</li>
                  <li>Kaulėti arba riebaluoti mėsos produktai</li>
                  <li>Sūrus ir perdirbtas maistas</li>
                  <li>Žalia mėsa be kontrolės</li>
                  <li>Riešutai ir sėklos</li>
                </ul>
              </p>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                Viena dažniausiai pasitaikančių šeškų ligų – <b>insulinoma</b> –
                tai yra gerybinis kasos navikas. Vieni iš simptomų gali būti
                svirduliavimas, nesiorientavimas aplinkoje, seilėtekis. Būtina
                stebėti šeško mitybą, negalima leisti jam badauti.
              </p>
              <p>
                <b>Hiperadrenokorticizmas</b> – tai yra prieinkstinių liaukų
                liga. Dažna šeškų liga, dėl kurios būtina gyvūną nuolat stebėt.
                Pagrindinis požymis – kailio plikimas, pirmiausia pradeda plikti
                uodegos sritis, tuomet pilvo šonai. Taip pat būdingi elgesio
                pokyčiai, intensyvus kasymasis, agresyvumas, sustiprėja
                specifinis šeško kvapas.
              </p>
              <p>
                <b>Aplastinė anemija (mažakraujystė).</b> Ši liga pasireiškia
                dėl užsitęsusios patelių rujos, todėl jas būtina kastruoti
                (rekomenduojama apie 6 mėn. amžiaus). Sergant šia liga
                susilpnėja bendras organizmo imunitetas, gali išsivystyti
                antrinės bakterinės ligos. Pagrindiniai ligos požymiai – ilgai
                trunkanti ruja (2 – 3 mėn.), padidėję lytiniai organai, būdingas
                išsekimas, svorio kritimas, blyškios gleivinės.
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
