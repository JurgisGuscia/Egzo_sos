import React, { useRef, useEffect, useState } from "react";

import "./salmuotasisChameleonas.scss";
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
export default function SalmuotasisChameleonas({ state }) {
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
    <div className="salmuotasisChameleonasPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/chameleonas.jpg"
              alt="chameleonas"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>Kūnas pailgas, 40 mm–100 cm ilgio.</p>
              <p>Gyvenimo trukmė: 3-5 metų, priklausomai nuo gyvūno rūšies.</p>
              <p>
                Tai labai specializuoti driežai, prisitaikę gyventi medžiuose.
                Turi stveriamąsias galūnes ir kibią uodegą. Akis gali kraipyti
                nepriklausomai vieną nuo kitos. Juda lėtai, vabzdžius ir
                smulkius bestuburius gaudo labai toli išmetamu lipniu liežuviu.
                Deda kiaušinius. Keičia kūno spalvą, išplėsdami ar sutraukdami
                odoje išsibarsčiusias pigmentines ląsteles – chromatoforus.
              </p>
            </div>
            <UsefullFact
              message={
                "Akyse – nepriklausomas judėjimas: Chameleonas gali judinti akis nepriklausomai vieną nuo kitos. Tai leidžia jiems vienu metu stebėti aplinką ir ieškoti grobio, nesukant galvos."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                2 – 3 menesių patinėliai turi ant galinių kojų gumbiukus.
                Didesni patiniai turi šalmą ir yra riškesnių spalvų.{" "}
              </p>
              <div className="imageWrapper">
                <img
                  src="./img/animalCare/chameleonoLytis.png"
                  alt="chameleono lyties nustatymas"
                />
              </div>
            </div>
            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Terariumo matmenys turi būti mažiausiai 120x80x60cm dydžio.
                Terariumas negali stovėti ant grindų, jis turi būti maždaug akių
                lygyje. Terariume būtina UVB 5 % lempa, naktį ji išjungiama, kad
                augintinis galėtų ilsėtis.
              </p>
              <p>
                Terariumas turi atspindėti aplinką. Būtina dėti medžio šakų, kad
                galėtų laipioti. Į terariuma ant šoninės sienelės klijuojamas
                šildomas kilimas. Viduje būtina įtaisyti termometrą ir
                hidrometrą, kad galėtumėte nesunkiai kontroliuoti terariumo
                aplinką. Terariume temperatūra – šiltoji zona 28 C, vėsioji zona
                – 20 C laipsnių šiluma. Drėgmė -. Purus substraktas(durpės,
                smėlis) netinka, dugnas turi būti padengtas tuom ko gyvūnas
                negalėtų praryti( plokščti akmenys, stambios medžio žievės) .{" "}
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Chameleonų kasdienį racioną sudaro skėriai, svirpliai, žiogai,
                ir kiti įvairiausi vabzdžiai. Retkarčiais galima duoti zoofobusų
                lervų, pienių lapų,zligė, uogų – mėlynės, šilauogė, žemuogės.
                Būtinas kalcis su D3. su maistu, kiekviena diena. Chameleonai
                geria iš bėgančio vandens šaltinio, taip pat laižo rasą nuo
                lapų, todėl jų terariume privalo būti nedidelis vandens
                fontanelis ar kriokliukas, iš kurio jis galėtų atsigerti. Kitu
                atveju chameleonas išseks nuo dehidratacijos, nes vandens
                indelyje jie negeria.
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                <ul>
                  <li>
                    Dideli ar kieti vabzdžiai: Per dideli vabzdžiai, kuriuos
                    chameleonas negali lengvai praryti ar suvirškinti (pvz.,
                    dideli tarakonai ar vabzdžiai su kietais egzoskeletais),
                    gali sukelti uždusimą ar virškinimo problemų.
                  </li>
                  <li>
                    Vabzdžiai iš gamtos: Niekada nereikėtų maitinti chameleono
                    vabzdžiais, surinktais iš laukinės gamtos (sodų, parkų). Šie
                    vabzdžiai gali būti užkrėsti pesticidais, kurie yra labai
                    nuodingi chameleonui.
                  </li>
                  <li>
                    Pesticidais apdoroti vaisiai ir daržovės: Jei chameleonas
                    valgo vaisius ar daržoves (nors tai nėra jų pagrindinis
                    maistas), svarbu, kad jie nebūtų apdoroti cheminėmis
                    medžiagomis, nes pesticidai gali būti mirtini.
                  </li>
                  <li>
                    Per daug riebus maistas: Vabzdžiai, kuriuose yra daug
                    riebalų, pavyzdžiui, vaškagraužiai (waxworms), gali būti per
                    riebūs reguliariam maitinimui. Jie gali sukelti antsvorį ar
                    kepenų problemų.
                  </li>
                  <li>
                    Vaisiai su dideliu cukraus kiekiu: Nors šalmuotasis
                    chameleonas retkarčiais gali valgyti vaisius, reikėtų vengti
                    vaisių su aukštu cukraus kiekiu, pavyzdžiui, vynuogių ar
                    bananų, nes jie gali sukelti virškinimo problemų ar
                    antsvorio.
                  </li>
                  <li>
                    Saulėgrąžos ir kiti augalų lapai: Kai kurie augalai yra
                    toksiški chameleonams. Reikėtų vengti duoti augalų lapų,
                    kuriuose yra oksalatų ar kitų nuodingų medžiagų, pvz.,
                    Saulėgrąžų, fikusų, difenbachijų ar oleandrų.
                  </li>
                </ul>
              </p>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                Pagrindiniai požymiai, parodantys, jog gyvūnas negaluoja –
                įdubusios akys; patinę sanariai; žaizdos burnoje ar aplink ją;
                silpnumas ir apatija; mažas aktyvumas laikant rankose; silpnas
                suspaudimas letenėle; kvėpuoja pro burną.
              </p>
              <p>
                <b>Dehidratacija.</b> Dažniausiai pasitaikanti liga, galinti
                lemti net gyvūno mirtį. Dehidratacijos požymiai yra – įdubusios
                akys, sausos išmatos, apetito sumažėjimas, letargija. Siekiant
                išvengti šios ligos, būtina užtikrinti tekančio, šviežaus
                vandens šaltinį, palaikyti tinkamą terariumo drėgmę.
              </p>
              <p>
                <b>Metabolinė kaulų liga.</b> Dažniausiai pasireiškia, kai
                gyvūnas gauna nepakankamą kiekį spindulių (UVB). Taip pat šią
                ligą sukelia netinkamas mitybos racionas, per mažas kalcio
                kiekis. Tai per ilgą laiką išsivystanti liga, pasireiškia
                netaisyklinga kojų laikysena (kreivos kojos), minkšas
                žandikaulis, nerangi, sunki eisena, ilgainiui augintinis
                visiškai nebegali vaikščioti. Siekiant išvengti ligos, būtina
                užtikrinti gerą, įvairų mitybos racioną, kuriame būtų gausu
                maistingų vabzdžių, įvairių vitaminų bei kalcio. Taip pat,
                būtina UVB lempa.
              </p>
              <p>
                <b>Parazitinės infekcijos.</b> Užsikrėsti parazitais augintiniai
                gali 2 būdais: nuolat šeriami laukiniais vabzdžiais arba
                trūkstant bendros higienos ir švaros terariume. Užsikrėtimo
                požymiai: išsipūtęs pilvas, silpnumas, staigus svorio kritimas,
                viduriavimas. Siekiant išvengti parazitinių užsikrėtimų derėtų
                maistą chameleonams pirkti iš specializuotų parduotuvių. Taip
                pat, būtina palaikyti nuolatinę terariumo švarą.
              </p>
              <p>
                <b>Podagra.</b> Gali išsivystyti, kai augintinis su maistu gauna
                per didelį kiekį proteinų, taip pat ši liga gali išsivystyti dėl
                inkstų veiklos sutrikimo. Pagrindiniai požymiai: sumažėjęs
                gyvūno judrumas, sutinę sąnariai, dažnas vandens gėrimas,
                sumažėjęs apetitas, agresyvumas. Siekiant išvengti šios ligos,
                būtina užtikrinti gerą tekančio vandens ir terariumo drėkinimo
                sistemą, taip pat, vengti daug baltymų turinčio maisto.
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
