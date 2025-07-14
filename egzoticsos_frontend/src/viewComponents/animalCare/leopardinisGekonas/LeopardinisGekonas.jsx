import React, { useRef, useEffect, useState } from "react";

import "./leopardinisGekonas.scss";
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
export default function LeopardinisGekonas({ state }) {
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
    <div className="leopardinisGekonasPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/gekonas.jpg"
              alt="triusis"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>
                Leopardiniai gekonai yra populiarūs augintiniai dėl savo ramaus
                būdo. Šie ropliai užauga iki 22 cm ir gyvena iki 20-25 metų.
                Leopardinio gekono geltono kūno fone yra juodos dėmės ar
                dryžiai, nugara ir uodega karpotos. Storoje uodegoje leopardinis
                gekonas kaupia maisto atsargas. Gekonai keičia savo odą kas 2-5
                savaites, savo išnarą suėda, nes joje yra reikalingų maistinių
                medžiagų. Yra daug spalvinių formų – balti, orandžiniai,
                geltoni, įvairių spalvų raštai.{" "}
              </p>
            </div>
            <UsefullFact
              message={
                "Kaip ir kai kurie kiti ropliai, leopardiniai gekonai gali atsiskirti nuo savo uodegos, jei jiems gresia pavojus. Uodega nukrinta ir toliau juda, nukreipdama plėšrūną, o laikui bėgant atauga."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Lytis nustatoma pagal skirtumus, matomus uodegos srityje. Jei
                augintinis nepratęs prie rankų, jį reikia paimti labai švelniai
                ir lėtai, kitu atveju, pajutęs pavojų, gekonas gali pamesti savo
                uodegą. Jei prie kloakos matomi išsikišimai (guzeliai), tai
                patinėlis.{" "}
              </p>
              <div className="imageWrapper">
                <img
                  src="./img/animalCare/gekonoLytis.png"
                  alt="gyvaciu lyties nustatymas"
                />
              </div>
            </div>
            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Rekomenduojamas bent 60x40x40 cm terariumas ( vienam gyvūnui) .
                Temperatūra 25-30°C dieną. Terariume turėtų būti kelios šilumos
                vietos, vienoje pusėje apie 22-23°C , kitoje 30°C , taip
                augintinis galės išsirinkti jam tinkamesnę aplinkos temperatūrą.
                Terariume reikia palaikyti 50-70% drėgmę, tai labai svarbu
                tinkamam augintinio nėrimuisi, purkšti vandeniu. Terariume
                būtina įrengti įvairių slėptuvių, tai gali būti medžio žievės,
                įvairios dėžutės ir pan., slėptuvėse jie praleidžia visą dieną.{" "}
              </p>
              <p>
                Gruntas turėtų būti nugludinti akmenys arba servetėlės, bet ne
                smėlis, nes kalcio trūkumo metu gali jo prisivalgyti. Galima
                naudoti nepavojingą augintiniui substratą, kuris būtų lengvai
                virškinamas ir pilnai pasišalintų iš organizmo, pavyzdžiui,
                koralinis smėlis.
              </p>
              <p>
                Terariumas turi būti toli nuo ryškios šviesos, nes ji kelia
                stresą. Į terariumą negalima dėti UVA ar UVB lempų. Kaip šildymo
                priemonę patartina naudoti po terarium šildymą kabelį arba
                šildymo kilimėlį.{" "}
              </p>
              <p>
                Negalima į suaugusių gekonų terariumą įleisti jauniklio, nes jį
                suės. Negalima kartu auginti dviejų patinų, nes jie kovos vienas
                su kitu. Viename terariume patartina auginti arba tik pateles,
                arba 3-5 pateles ir vieną patinėlį.{" "}
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Maitinasi naktį. Maitinti galima svirpliais, tarakonais (kaip
                pagrindiniu maistu), bei zoofobais. Terariume turėtų būti
                padėtas indelis su vandeniu.
              </p>
              <p>
                Gekonai šeriami kas 2-3 dienas, per dieną galima sušerti,
                pavyzdžiui, apie 5 svirplius ir 2 milčius, tačiau reiketų
                atsižvelgti į individualų augintinio suvalgomo maisto kiekį.
                Maistą reikia apibarstyti multivitaminais ir kalciu skirtu
                naktiniams dreižams.{" "}
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                <ul>
                  <li>
                    Dideli vabzdžiai: Vabzdžiai, kurie yra per dideli
                    leopardiniam gekonui praryti, gali sukelti užspringimą ar
                    sužeidimus burnoje ir gerklėje. Rekomenduojama, kad
                    vabzdžiai būtų ne didesni už atstumą tarp gekono akių.
                  </li>
                  <li>
                    Vabzdžiai su kietu chitinu: Vabzdžiai su labai kieta išorine
                    danga, pavyzdžiui, kai kurios vabalų rūšys, gali būti
                    sunkiai virškinami ir sukelti virškinimo problemas. Tai gali
                    sukelti vidurių užkietėjimą ar netgi žarnyno užsikimšimą
                  </li>
                  <li>
                    Vabzdžiai su chemikalais: Vabzdžiai, kurie buvo sugauti
                    laukinėje gamtoje, gali turėti pesticidų ar kitų nuodingų
                    chemikalų, kurie yra kenksmingi gekonams. Todėl geriausia
                    šerti gekonus specialiai tam skirtomis, parduotuvėje
                    įsigytomis maisto rūšimis.
                  </li>
                  <li>
                    Žaliaviniai kiaušiniai ir mėsa: Žaliaviniame maiste gali
                    būti bakterijų, tokių kaip salmonelės, kurios gali būti
                    pavojingos leopardiniams gekonams. Be to, jie nėra
                    pritaikyti mėsos virškinimui.
                  </li>
                  <li>
                    Žalumynai ir vaisiai: Leopardiniai gekonai yra
                    vabzdžiaėdžiai ir jų virškinimo sistema nėra pritaikyta
                    efektyviai virškinti augalinį maistą. Vaisiai ir daržovės
                    gali sukelti virškinimo sutrikimus ir maistinių medžiagų
                    trūkumus.
                  </li>
                  <li>
                    Perdirbtas žmonių maistas: Leopardiniams gekonams negalima
                    duoti jokių žmonėms skirtų maisto produktų, ypač tų, kurie
                    yra perdirbti, sūdyti ar prieskoniuoti. Toks maistas gali
                    būti labai kenksmingas jų sveikatai.
                  </li>
                </ul>
              </p>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                Pagrindiniai požymiai, jog augintinis serga: sumažėjęs
                aktyvumas, apatija, dingęs apetitas, patinusios akys, svorio
                kritimas.
              </p>
              <p>
                <b>Metabolinė kaulų liga.</b> Ligą sukelia kalcio ir vitamino D3
                trūkumas. Pasireiškia bendru augintinio silpnumu ir kaulų
                deformacija. Tokiam gyvūnui būtina skirti kalcio ir vitamino D,
                galima panaudoti silpną UVB lempą, tačiau prieš naudojant lempą
                būtina pasitarti su veterinarijos gydytoju, kadangi sveikiems
                leopardiniams gekonams UVB spinduliai gali net pakenkti.
              </p>
              <p>
                <b>Parazitiniai susirgimai.</b> Užsikrėsti parazitais augintinia
                gali 2 būdais: nuolat šeriami laukiniais vabzdžiais arba
                trūkstant bendros higienos ir švaros terariume. Užsikrėtimo
                požymiai: išsipūtęs pilvas, silpnumas, staigus svorio kritimas,
                viduriavimas. Siekiant išvengti parazitinių užsikrėtimų derėtų
                maistą pirkti iš specializuotų parduotuvių. Taip pat, būtina
                palaikyti nuolatinę terariumo švarą.
              </p>
              <p>
                <b>Odos nėrimosi problemos.</b> Nenormalus nėrimasis yra dažnai
                pasitaikanti problema. Dažniausiai odos gabalėliai lieka kojų
                srityje, ypač ant pirštų. Todėl būtina profilaktiškai apžiūrėti
                augintinio kojas ar aplink jas nėra likusios senos odos, kuri
                spaustų galūnes, nes ilgainiui tai gali sutrikdyti kraujotaką.
                Siekiant išvengti nėrimosi sutrikimų, terariume reikia
                užtikrinti reikiamą drėgmės kiekį.
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
