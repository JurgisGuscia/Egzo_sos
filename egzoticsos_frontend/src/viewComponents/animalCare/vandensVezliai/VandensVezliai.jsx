import React, { useRef, useEffect, useState } from "react";

import "./vandensVezliai.scss";
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
export default function VandensVezliai({ state }) {
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
    <div className="vandensVezliaiPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/vandensVezlys.jpg"
              alt="vandens vezlys"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>Vandens vėžliai gamtoje gyvena kolonijomis. </p>
              <p>
                Nelaisvėje rekomenduojama laikyti tos pačios rūšies, dvi pateles
                arba porelę, nes dažnai du patinai nesutaria.
              </p>
              <p>
                Dažniausiai vandens vėžliai tinkamai prižiūrimi išgyvena iki 30
                metų.
              </p>
            </div>
            <UsefullFact
              message={
                "Vandens vėžliai, ypač jūrų vėžliai, turi gerai išvystytą navigacijos gebėjimą. Jie gali keliauti didelius atstumus naudodami saulės šviesą, magnetinį lauką ir kitus gamtos ženklus."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Nustatyti mažų vėžliukų lytį neįmanoma, tačiau suaugusius
                atskirti padės šie požymiai: dažnai patinai būna mažesni už
                pateles; jų nagai ir uodegos yra ilgesni nei patelių. Viena
                šeima – patinai su ilgais nagais ir stora ilga uodega, patinai
                mažesni už pateles( raudonpilviai, siaurajuosčiai ir kiti) kitos
                šeimos – patinų ir patelių nagai ir ūgis yra vienodi, skiriasi
                tik uodegos storis ir ilgis ( rivsai, kinijos, ilgakakliai).{" "}
              </p>
              <div className="imageWrapper">
                <img
                  style={{ width: 500 + "px" }}
                  src="./img/animalCare/vandensVezliuLytis1.png"
                  alt="vandens vezliu lyties nustatymas"
                />
              </div>
              <div className="imageWrapper">
                <img
                  style={{ width: 500 + "px" }}
                  src="./img/animalCare/vandensVezliuLytis2.png"
                  alt="vandens vezliu lyties nustatymas"
                />
              </div>
            </div>
            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Nelaisvėje vandens vėžliai puikiai gyvena akvariumuose su
                sausumos salele. Akvariumas turėtų būti bent 120 – 150 ir
                daugiau litrų talpos, vandens filtras turėtų buti galingesnis 2
                kartus už vandens kiekį. Vandenį reikia keisti pagal aplinkybęs.
                Šiluma vandenį turi būti palaikoma maždaug 25 – 26Claipsnių
                temperatūra( iki 1 metų laiko vėžliukams temperatūra 27 – 28 C.
                Į akvariumą gruntas dedamas – akmenukai vėžlio galvos dydžio,
                kad negalėtų praryti. Smėlio į akvariuma pilti negalima. Esant
                per žemai aplinkos temperatūrai jų organizmo funkcijos sulėtėja,
                suėda mažiau pašaro, sutrinka virškinimas bei maisto medžiagų
                įsisavinimas. Akvariume turi būti įrengta sausumos salelė, kur
                vėžlys galėtų išlipti pasišildyti. Virš salelės būtina pakabinti
                specialią UVB 5% lempą, kuri turi būti ne aukščiau, kaip 30 cm
                atstumu ir ne žemiau, nei 25 cm atstumu.
              </p>
              <p>
                Suaugusį vandens vėžlį galima keliom valandom išleisti
                pasivaikščioti į sausumą .{" "}
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Racionas turi būti kuo įvairesnis, vėžliai turi gauti tiek
                gyvūninės, tiek augalinės kilmės pašaro. Vėžliai iki 2 metų
                maitinami kasdien, o vyresni kas 2 – 3 dienas. Maisto reikia
                duoti tiek, kiek suvalgo akvariume per 10 minučių.
              </p>
              <p>
                Iki 1metų amžiaus: 80% proteininė dieta/20% augalinė dieta;
                granulės (kombinuotas pašaras), žuvytės, vištienos filė,
                vištienos širdelės, svirpliai, milčius, pienių lapai, žliugė,
                dobilai, akvariuminiai minkštalapiai augalai.{" "}
              </p>
              <p>
                Virš 1 metų amžiaus: 60% proteininė dieta/40%. Augalinė dieta,
                granulės, žuvytės, vištienos širdelės, vištienos filė, jautiena,
                svirpliai, zoofobusai, pienių lapai, žliugė, dobilų,
                akvariuminiai minkštalapiai augalai.{" "}
              </p>
              <p>
                Dažniausiai naudojamas maistas: kalendra, sraigės, moliūgas,
                mangas, žaliosios pupelės, svirpliai, sliekai, morkos,
                cukinijos, specialus vėžlių pašaras.
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                <ul>
                  <li>Vaisiai ir daržovės</li>
                  <li>Pieno produktai</li>
                  <li>Cukrus ir saldumynai</li>
                  <li>Riešutai ir sėklos</li>
                  <li>Šokoladas</li>
                  <li>Sūrus ir perdirbtas maistas</li>
                  <li>Alkoholis ir kofeinas</li>
                  <li>Žalia mėsa</li>
                  <li>Taisyklių pažeidimas su pašaru</li>
                  <li>Per daug gyvūninių baltymų</li>
                  <li>Aštrūs ir prieskoniai</li>
                </ul>
              </p>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                <b>Metabolinė kaulų liga.</b> Tai yra kaulų, kiauto
                suminkštėjimas, taip gali atsitikti dėl netinkamo mitybos
                raciono, kalcio ir vitamino D trūkumo. Dažnai pasireiškia
                jauniems, augantiems vėžliams. Siekiant išvengti ligos, sudarant
                vėžlio racioną labai svarbu atkreipti dėmesį į Ca:P
                (kalcio:fosforo) santykį bei užtikrinti ultravioletinių
                spindulių šaltinį. Galima kelias valandas per dieną išnešti ant
                saulės. Žiemą vitaminus patartina lašinti į vandenį.
              </p>
              <p>
                <b>Endoparazitai.</b> Dauguma vėžlių, kurie parduodami, yra
                sugauti laisvėje arba atgabenti iš didelių gyvūnų fermų, todėl
                būna užsikrėtę daugybe skirtingų parazitų. Gyvūnai gali būti
                išliesėję, neėsti, viduriuoti, išmatose gali matytis parazitai.
                Užsikrėtus vėžliui skiriami antiparazitiniai vaistai. Norint
                išvengti parazitinių užsikrėtimų, būtina užtikrinti akvariumo
                švarą, palaikyti higieną, maitinti švariu, plautu maistu.
              </p>
              <p>
                <b>Hipovitaminozė A.</b> Ligą sukelia netinkama mityba, kai
                racione yra per mažas vitamino A kiekis. Pasireiškia sutinimu
                ausų srityje. Todėl į racioną būtina įtraukti maistą, kuriame
                gausu vitamino A.
              </p>
              <p>
                <b>Snapo peraugimas.</b> Jei apatinis ir viršutinis vėžlio
                snapas auga nevienodai, dažniausiai tai – metabolinės kaulų
                ligos pasekmė. Tačiau tai gali nutikti ir vėžlį maitinant vien
                tik minkštu maistu. Šiuo atveju yra reikalingas chirurginis
                snapo lyginimas, siekiant atkurti anatomiškai natūralią jo
                formą.
              </p>
              <p>
                Tik išsiritę vandens vėžliukai gali būti pavojingi žmogui kaip
                salmonelių nešiotojai, todėl laikant jį rankose, palietus
                kiautą, būtina nusiplauti rankas po tekančiu vandeniu su muilu.
                O paaugę, tos ligos neturi. Nes turintys šią ligą mažyliai
                miršta.{" "}
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
