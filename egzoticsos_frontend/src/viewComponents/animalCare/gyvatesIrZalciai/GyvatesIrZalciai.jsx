import React, { useRef, useEffect, useState } from "react";

import "./gyvatesIrZalciai.scss";
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
export default function GyvatesIrZalciai({ state }) {
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
    <div className="gyvatesIrZalciaiPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/zaltys.jpg"
              alt="triusis"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>Gyvenimo trukmė: 15-30 metų, priklausomai nuo rūšies.</p>
              <p>
                Vidutiniškai užauga apie 1- 3metrų ilgiau, priklausomai nuo
                rūšies.
              </p>
              <p>Tai naktį aktyvūs gyvūnai.</p>
            </div>
            <UsefullFact
              message={
                "Kai kurie žalčiai, pajutę pavojų, gali apsimesti mirusiais. Jie apvirsta ant nugaros, atidaro burną ir net išskiria kvapą, panašų į pūvančią mėsą, kad atbaidytų plėšrūnus."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Lytį galima nustatyti pagal gyvatės uodegos formą: patinų uodega
                storesnė, plonėjanti palaipsniui, patelių uodega plonesnė,
                staigiai suplonėjanti.
              </p>
              <div className="imageWrapper">
                <img
                  src="./img/animalCare/gyvatesLytis.png"
                  alt="gyvaciu lyties nustatymas"
                />
              </div>
              <p>
                Taip pat gyvačių lytis nustatoma zonduojant kloaką. Naudojamas
                specialus minkštas zondas, pagal angos dydį nustatoma lytis,
                patelių mažesnė, patinėlių didesnė. Šią procedūrą rekomenduojama
                atlikti patirties turintiems gyvačių augintojams.
              </p>
              <div className="imageWrapper">
                <img
                  src="./img/animalCare/gyvatesLytis2.png"
                  alt="gyvaciu lyties nustatymas"
                />
              </div>
            </div>

            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>

              <p>
                Rekomenduojamas terariumo dydis bent 100x50x50, vėlgi,
                priklausomai nuo auginamos gyvatės rūšies. Minimalus terariumo
                ilgis turi būti toks, kad gyvatė jame galėtų išsitiesti visu
                ilgiu.
              </p>
              <p>
                Terariume būtina palaikyti gyvatei optimalią šilumą, šilumos
                zonos sukuriamos naudojant šilimo kabelius, šilumos kilimėlius
                Turi būti bent 2 skirtingos šilumos zonos: karštoji zona – 32°C,
                šaltoji zona – 25°C, naktį temperatūra turėtų būti apie 20-22°C.{" "}
              </p>
              <p>
                Kukurūziniams žalčiams, žiurkiniams žalčiams, amūriniams
                žalčiams naudojama UVB 5 % spindulius skleidžiančią lempą.
                Nakties metu lempa išjungiama. Pieninei gyvatei, meksikos ir
                kalifornijos gyvaitėms UVB lempos nenaudojamos. Lempos
                įjungiamos 12 valandų per parą.
              </p>
              <p>
                Labai svarbu užtikrinti terariumo drėgmės lygį, tai būtina geram
                gyvatės odos nėrimuisi. Būste turėtų būti padėtas vandens
                dubenėlis, pakankamai didelis, kad augintinis galėtų jame
                maudytis, vanduo turi būti šiltas.
              </p>
              <p>
                Terariumo substratas turi būti natūralus,jei gyvatė jo suėstų.
                Substratui tinka koralinis smėlis, popierius, sutrupinta medžio
                žievė, kokoso durpės, buko drožlės .{" "}
              </p>
              <p>
                Terariume turėtų būti įrengta įvairių slėptuvių ir medžio šakų,
                dirbtinių augalų, terariumas turi kuo labiau atkartoti natūralią
                gyvačių gyvenamąją aplinką. Šakos turėtų būti be aštrių
                atsikišimų, kad augintinis laipiodamas jomis nesusižeistų.
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Dėl pačių gyvačių saugumo rekomenduojama maitinti jau negyvu
                maistu. Dažniausiai maitinama šaldytomis pelėmis. Būtina
                užtikrinti, jog maistas yra švarus, nesugedęs, prieš šeriant jį
                reikia atšildyti. Jaunos gyvatės maitinamso 1-2 kartus per
                savaitę, suaugusios kas 1 – 2 savaites.{" "}
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                <ul>
                  <li>
                    Pieno produktai: Žalčiai negali virškinti pieno produktų,
                    nes jų organizme nėra tam reikalingų fermentų. Pienas gali
                    sukelti virškinimo sutrikimus.
                  </li>
                  <li>
                    Žalias kiaušinis: Nors kai kurie žalčiai gali ėsti
                    kiaušinius, žalias kiaušinis gali būti pavojingas, nes gali
                    užkrėsti salmonelėmis ar sukelti biotino trūkumą, kuris
                    kenkia žalčio sveikatai.
                  </li>
                  <li>
                    Žmogaus maistas: Daugelis žmonių vartojamų maisto produktų,
                    tokių kaip sūdyti, kepti ar stipriai prieskoniuoti
                    patiekalai, yra pavojingi žalčiams. Jie gali sukelti
                    virškinimo sutrikimus, apsinuodijimą ar net mirtį.
                  </li>
                  <li>
                    Vaisiai ir daržovės: Žalčiai yra mėsėdžiai, todėl augalinės
                    kilmės maistas jiems nėra tinkamas. Jų virškinimo sistema
                    nėra pritaikyta efektyviai virškinti vaisius ar daržoves,
                    todėl tokie produktai gali sukelti virškinimo problemų.
                  </li>
                  <li>
                    er didelis riebalų kiekis: Maistas, turintis daug riebalų,
                    gali sukelti žalčio kepenų ligas. Žalčių mityba natūraliai
                    yra liesa, todėl per didelis riebalų kiekis yra kenksmingas.
                  </li>
                </ul>
              </p>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                <b>Išoriniai parazitai.</b> Lietuvoje dažniausi gyvačių
                parazitai yra erkės. Gyvačių erkės randamos įsisiurbusios odos
                tarp žvynų žandikaulių srityje, aplink akis, kloakos srityje,
                gali būti pavienės ant viso kūno. Pagrindinis užsikrėtimo
                požymis – pakilę, atsikiše žvynai, normaliai žvynai turi būti
                prigludę prie odos. Taip pat, gyvatės galvos braukymas į
                įvairius daiktus gali indikuoti šį užsikrėtimą. Erkės turi būti
                pašalinamso mechaniniu būdu, gyvatė maudoma bent 30min. Po
                vonios gyvūnas nusausinamas ir ištepamas vazelino aliejumi, po 2
                valandų vėl nuvalomas. Toks gydymas ne visada efektyvus, todėl
                būtina konsultuotis su veterinarijos gydytoju.
              </p>
              <p>
                <b>Kvėpavimo takų ligos.</b> Atsiranda dėl aplinkos stresorių,
                blogos ventiliacijos, per didelės drėgmės, hipotermijos,
                bakterinių infekcijų. Pagrindiniai požymiai – sutrikęs
                kvėpavimas, putos iš nosies, švokščiantis garsas kvėpuojant.
                Svarbu pakelti augintinio ir terariumo kūno temperatūrą,
                sureguliuoti aplinkos drėgmę. Augintinio gydymui skiriami
                antibiotikai.
              </p>
              <p>
                <b>Stomatitas.</b> Dažniausios priežastys: burnos traumos,
                bakterinės infekcijos, per šalta aplinkos temperatūra. Sergant
                stomatitu gyvatės burna būna nepilnai užsivėrusi, patinusi,
                padidėja seilėjimasis, gleivinė paraudusi, augintinis visai
                nebesimaitina. Tokiu atveju turi būti taikoma antibiotikų
                terapija.
              </p>
              <p>
                <b>Podagra.</b> Gali pasireikšti dėl per žemos temperatūros,
                dehidratacijos, peršėrimo riebiu pašaru, infekcijų. Pagrindiniai
                simptomai: atsisakymas maitintis, dehidratacija, patinusi
                uodega. Gydymas komplikuotas. Būtina užtikrinti geras augintinio
                aplinkos sąlygas.
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
