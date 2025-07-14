import React, { useRef, useEffect, useState } from "react";
import "./degu.scss";
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
export default function Degu({ state }) {
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
    <div className="deguPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/degu1.jpg"
              alt="triusis"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>Gyvenimo trukmė nelaisvėje: 6-8 metų .</p>
              <p>Kūno ilgis apie 25-30cm + uodega (apie 8-12cm).</p>
              <p>Svoris 170-300g.</p>
              <p>
                Laisvėje degu gyvena kolonijomis, todėl šiems augintiniams
                reikia skirti daug dėmesio bei bendravimo, jei sudaryti tokias
                sąlygas sudėtinga, rekomenduojama auginti 4 ar daugiau šių
                gyvūnėlių. Degu yra lengvai prijaukinami augintiniai, nesunkiai
                atpažįsta šeimininką. Gyvūnas greitai pripranta prie rankų,
                mėgsta, kai jį glosto ir kutena paausius. Negalima imti už
                uodegos.{" "}
              </p>
            </div>
            <UsefullFact
              message={
                "Degų dantys yra oranžinės spalvos dėl didelio geležies kiekio emalyje. Ši spalva rodo sveikus dantis. Baltos spalvos dantys gali reikšti sveikatos problemas arba mitybos trūkumus."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Nustatyti degu lytį gali būti šiek tiek sudėtinga, ypač jei jie
                yra jauni, tačiau su tinkamomis žiniomis ir patirtimi tai
                įmanoma. Štai kaip tai padaryti:
              </p>
              <p>
                1. Anogenitalinis atstumas: Pagrindinis būdas nustatyti degu
                lytį yra patikrinti atstumą tarp išangės ir šlapimo organo.
                Patinams šis atstumas yra didesnis nei patelėms. Tai yra dėl to,
                kad patinų penio pagrindas yra toliau nuo anuso nei patelių
                vaginos.
              </p>
              <p>
                2. Sėklidžių buvimas: Suaugusiems patinams dažnai galima matyti
                arba apčiuopti sėklides, kurios yra šiek tiek padidėjusios
                srityje aplink anusą. Jauniems patinams sėklidės gali būti
                mažiau matomos, tačiau dažniausiai galima pastebėti šiek tiek
                patinusią sritį.
              </p>
              <p>
                3. Spenelių buvimas: Patelės turi spenelius, kurie dažniausiai
                yra matomi ir apčiuopiami, ypač jei jos yra vyresnės arba
                nėščios. Patinai spenelių neturi arba jie yra labai maži ir
                sunkiai pastebimi.
              </p>
            </div>
            <img
              src="./img/animalCare/deguLytis.png"
              alt="degu lyties nustatymas"
            />

            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>

              <p>
                Degu yra labai aktyvūs, todėl jiems reikalingas erdvaus narvas,
                kuriame būtų įrengtos įvairios slėptuvės, būstai, pavyzdžiui,
                storesnė medžio šaka su išpjautu viduriu. Kuo daugiau narvelyje
                slėptuvių, tuo geriau jame jausis augintinis.
              </p>
              <div className="imageWrapper">
                <img
                  src="./img/animalCare/deguLog.png"
                  alt="tusciaviduris rastas"
                />
              </div>
              <p>
                Narvelio dugną galima iškloti medžio pjuvenomis arba presuotomis
                granulėmis. Nenaudokite spygliuočių medžių pjuvenų, nes jų sakai
                gali būti pavojingi augintiniui. Kad augintiniui nebūtų nuobodu
                į narvelį galite įdėti įvairių žaislų, kopetėlių ir ratelį(
                diametras 30cm). Degu mėgsta smėlio vonias, todėl į narvelį
                reikia įdėti indelį su smėliu (geriausiai tinka šinšiloms
                skirtas smėlis), tai padės augintiniui išlaikyti švarų kailį.
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Rekomenduojama skirti kuo įvairesnį pašarą. Pagrindinę degu
                raciono dalį turėtų sudaryti šienas bei specializuotas pašaras.
                Kaip ir kitų graužikų, taip ir degu dantys auga nuolat, todėl
                rekomenduojama į narvelį įdėti lapuočių madžio šakų . Per dieną
                degu skiriama 5-10g pašaro. Rekomenduojama degu šerti 2 kartus
                per dieną, tuo pačiu laiku. Papildomai galima duoti šiek tiek
                skanumynų, tokių kaip saulėgrąžos ar žemės riešutai. Negalima
                duoti daug cukraus turinčio maisto, saldžių vaisių, nes jų
                organizmas neprisitaikęs perdirbti cukrų. Taip pat narvelyje
                visa laiką turėtų būti pakabinta gertuvė šviežio vandens.
              </p>
              <p>Racionas:</p>
              <ul>
                <li>
                  Kiekvienos dienos maistas – vanduo, šienas, specializuotas
                  pašaras, nedidelis kiekis lapinių daržovių (per didelis
                  lapinių daržovių kiekis gali sukelti augintinio pilvo pūtimą);{" "}
                </li>
                <li>
                  Maistas, kurį galima duoti retkarčiais (pavyzdžiui, kartą per
                  mėnesį) – morkos, obuoliai,kukurūzas, saulėgrąžos.
                </li>
                <li>
                  <span style={{ color: "red" }}>Vengti</span> – triušiams
                  skirto maisto (dažnai turi ingridientų, kurie yra toksiški
                  degu), žiurkėnams skirto maisto (dažniausiai turi per daug
                  baltymų), žmonių maisto, vaisių.
                </li>
              </ul>
              <p>
                Prie naujo maisto degu turi būti pratinami pamažu, iš pradžių
                skiriant nedidelius naujo maisto kiekius ir po truputį juos
                didinant. Staigiaia pakeistas maistas gali sukelti virškinimo
                sutrikimus, viduriavimą.
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                Degai yra labai jautrūs tam tikriems maisto produktams, kurie
                gali sukelti rimtų sveikatos problemų, todėl svarbu žinoti,
                kokių maisto produktų reikėtų vengti. <br />
                Cukrus ir saldumynai yra ypač pavojingi degams, nes jie yra
                linkę sirgti diabetu. Todėl reikėtų vengti visų rūšių saldumynų,
                įskaitant vaisius su dideliu cukraus kiekiu, tokius kaip
                vynuogės ir bananai.
                <br /> Be to, degu mityboje neturėtų būti maisto produktų,
                turinčių daug riebalų ar angliavandenių, kaip riešutai, sėklos
                ir grūdai, nes jie gali sukelti nutukimą ir kitas su tuo
                susijusias sveikatos problemas. <br />
                Kai kurios daržovės, tokios kaip bulvės ir avokadai, taip pat
                yra kenksmingos, nes jos gali būti toksiškos arba sunkiai
                virškinamos. <br />
                Svarbu degams suteikti subalansuotą ir sveiką mitybą, pagrįstą
                specializuotu pašaru, šviežiomis daržovėmis ir šienu, kad jie
                išliktų sveiki ir gyvybingi.
              </p>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                <b>Dantų, burnos ertmės ligos.</b> Pagrindinis degu sveikatos
                rodiklis – jo{" "}
                <span style={{ color: "red" }}>
                  dantys, kurie turi būti oranžinės spalvos
                </span>
                . Jei pastebėjote, jog jūsų augintinio dantys balti, būtina kuo
                skubesnė veterinarijos gydytojo apžiūra, nes tai gali reikšti
                rimtus jūsų augintinio sveikatos sutrikimus.
              </p>
              <div className="imageWrapper">
                <img src="./img/animalCare/deguLigos.png" alt="degu dantys" />
              </div>
              <p>
                Kaip ir kitiems graužikams, degu būdingi dantų peraugimai ir su
                peraugimu susijusios ligos. Dėl peraugusių dantų augintinis gali
                jausti didelį diskomfortą – galimas svorio kritimas, apatija,
                gyvūnėlis nustoja ėsti. Norint išvengti šių problemų narve
                būtinai turi būti padėta įvairių šakų, specialios kreidos, jog
                gyvūnėlis galėtų nusidilinti dantis.
              </p>
              <p>
                Be dantų peraugimo problemų, degu yra jautrūs įvairioms burnoms
                infekcijoms. Jų galima išvengti palaikant švarą narvelyje,
                maitinant subalansuotu racionu, kuriame gausu vitaminų bei
                mineralų, taip pat būtina užtikrinti, jog augintinis nuolat
                turėtų švaraus, šviežio vandens.
              </p>
              <p>
                <b>Diabetas.</b> Degu organizmai negeba perdirbti į organizmą
                patekusios gliukozės. Todėl augintinis gali susirgti, jei yra
                per daug šeriamas saldžiu maistu (saldžiais vaisiais,
                razinomis). Vienas iš pagrindinių simptomų – padidėjęs
                troškulys, gyvūnas geria ypač daug vandens.
              </p>
              <p>
                <b>Kepenų ligos.</b> Kepenų funkcijos sutrikimai pasireiškia
                viršsvorį turintiems, nutukusiems degu. Todėl labai svarbu
                augintinį šerti pagal nurodytas rekomendacijas, tinkamu pašaru,
                tuo pačiu laiku, skanėstai (saulėgrąžos, riešutai) turi sudaryti
                tik mažą dalį augintinio raciono.
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
