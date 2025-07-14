import React, { useRef, useEffect, useState } from "react";
import "./iguana.scss";
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
export default function Iguana({ state }) {
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
    <div className="iguanaPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/iguana.jpg"
              alt="triusis"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>
                Iguanoms būdinga išilgai nugaros auganti aštrių spyglių ketera,
                ilga uodega.{" "}
              </p>
              <p>guanos gali išaugti iki 1.8 metrų ilgio.</p>
              <p>Svoris sviruoja nuo 2 iki 8 kg.</p>
              <p>Jų gyvenimo trukmė nuo 20 iki 30 metų.</p>
              <p>
                Dažniausiai būdinga žalsva spalva, bet gali būti ir rudos,
                pilkos, oranžinės ar rausvos spalvos ir kitos spalvinės formos.
              </p>
            </div>
            <UsefullFact
              message={
                "Kai kurios iguanos, ypač patinai, gali keisti spalvą. Tai gali būti susiję su komunikacija, šilumos reguliavimu ar poravimosi sezono metu, kai jos tampa ryškesnės, kad pritrauktų pateles arba gąsdintų konkurentus."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Iki vienerių metų laiko iguanų lities nustatyti neįmanoma(tik
                DNR), litis nstatoma tik pilnai suaugusių. Patinai daug
                riškesnių spalvų sviruoja geltona, oranžinė spalva. Galvos daug
                stambesnės ir su dideliais žandais, spygliai yra didesni.
                Patinai yra didesni nei patelės. Patinai ant galinių kojų turi
                taškelius, vadinamąsias poras. Uodegoje ryškūs iškilimai.
                Patinai plonesni ir ilgesni. Patelės yra mažesnės, apvalesnės,
                smulkesnės galvos, trumpesni spigliai. Pilkšvos arba samaninės
                spalvos.{" "}
              </p>
              <div className="imageWrapper">
                <img
                  src="./img/animalCare/iguanosLytis.png"
                  alt="gyvaciu lyties nustatymas"
                />
              </div>
            </div>

            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Iguanoms reikalingas erdvus, aukštas terariumas, bent 2×1,5×2
                metrų. Terariumo negalima statyti arti triukšmingų vietų,
                televizoriaus ar radijo, nes jų klausa geresnė net 18 kartu nei
                žmogaus . Terariume turėtų būti įvairių stora šaką laipiojimui,
                keramikinį indelį maistui. Svarbu palaikyti atitinkamą terariumo
                temperatūrą su šildomu kilimu ar kabeliu, dieną šiltojoje
                terariumo zonoje 30-35 °C, šaltojoje apie 25 °C, naktį ne
                žemesnė nei 20 °C. Terariume būtina įrengti lempą (UVB 8 %,
                soler glo arba megarei), ji turi būti 30cm atstumu nuo gyvūno.
                Apšvietimas turėtų būti įjungtas 12 valandų per parą. Dugnas
                turi būti sausas( subtraktais, pjuvenos, durpės sukele plačių
                bei parazintines ligas), dažnai augintojai tiese tiesiog
                medzanes paklodes ar palas( turi būti be islindusiu siulų galų,
                sagų ar skylių). Vasarą iguaną rekomenduojama išnešti į lauką
                ant saulės, tai pagerina kalcio absorbciją organizme.
              </p>
              <p>
                Iguana maudoma kiekvieną dieną 30-35 °C vonioje. Gyvūnui vandens
                turi būti tiek, kad siektu kojomis dugną. Vandens procedūros
                padeda pagerinti medžiagų apykaitą.{" "}
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Tai yra žolėdis gyvūnas, mintantis augalų lapais, vaisiais,
                žiedais. Jaunos ar neturinčios svorio iguanos gali ėsti
                vabzdžius, kiaušinius. Jaunos iguanos minta tiek augalinės, tiek
                gyvūninės kilmės maistu. Todėl iguana, kuri sveria iki 800gr
                galima duoti kartą per savaitę zoofobusų, svirplių. Suaugusioms
                ir sveikoms iguanoms negalima šerti gyvūninės kilmės
                maistu(jeigu gyvūnas gauna perdideli kieki baltymų joms
                išsivysto padagara ir ju gyvenimo trukmė sutrumpėja iki 10 metų)
                . Būtina tinkamai subalansuoti racioną, jog augintinis gautų
                reikiamų vitaminų, svarbu maitinti kuo įvairesniu maistu. Jaunos
                iguanos šeriamos 3 kartus dienoje. Svarbu prieš pateikiant
                maistą švariai nuplauti. Gyvūnas reikemos drėgmės organizmui
                gauna su maistu.{" "}
              </p>
              <p>
                Racioną turėtų sudaryti: 60-70% daržovės, žalumynai; 5-15%
                vaisiai ir uogos. Jaunoms iguanoms būtinas ir baltiminis
                maistas.{" "}
              </p>
              <p>
                Maistui tinkamos daržovės, žalumynai: morkos, baklažanai,
                cukinijos, agurkai, moliūgai, ropė, brokuliai, kalafijorai,
                briuselio kopūsteliai, šparaginės pupelės, žirneliai,
                kiaulpienės, pienių žiedai, garstyčių lapai, krapai,dobilų,
                špinatai, salotos, garšva, gražgarstė, nasturtų lapai ir žiedai,
                liucerna, trauklapis. Žiemą galima duoti ir šaldytus
                produktus(be druskų ir prieskonių). Kietas maistas yra
                tarkuojamas, per brokinę tarką. Maistas turi būti įvairūs –
                mixas ir kaitaliojimas.{" "}
              </p>
              <p>
                Maistui tinkami vaisiai ir uogos: kiviai, melionai, braškės,
                mangai, vynuogės, persikai, kriaušės, bananai. Retkarčiais
                galima, pomidorų, mandarinų, ropė ir jos lapai,
                persimonų,persikai, abrikosai, porai, vyšnių ir trešnių be
                kauliukų, slyvų(be kauliukų) , obuoliai (saldūs ir minkšti),
                agrastų saldžių ir minkštų, arbūzai, papaja, paprika, .{" "}
              </p>
              <p>
                Mineralai( Elekrolit ir Nekton D3) ir vitaminai (Nekton- Iguana
                ) duodami į savaitę vieną kartą. kalcis naudojamas pasitarus tik
                su specialistais.{" "}
              </p>
              <p>Vitaminų A kiekis ME/100gr</p>
              <p>
                Ropės gumbai, pupų ankštys, garstyčios, cikorija, morkos,
                pomidorai, lapinės salotos, agurkai, obuoliai, baklažanai,{" "}
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                <ul>
                  <li>Bulvės, burokėliai ir jų lapai</li>
                  <li>Avokadas</li>
                  <li>Kopūstai, pekino kopūstai</li>
                  <li>Juodieji serbentai</li>
                  <li>Grybai</li>
                  <li>Petražolės</li>
                  <li>
                    Draudžiama duoti žmonių ir kitų gyvūnų maisto, vitaminų
                  </li>
                </ul>
              </p>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                <b>Metabolinė kaulų liga.</b> Dažniausiai pasireiškia, kai
                gyvūnas gauna nepakankamą kiekį ultravioletinių spindulių (UVB).
                Taip pat šią ligą sukelia netinkamas mitybos racionas, per mažas
                kalcio kiekis maiste( tai nutinka kai duodamas tik vienodas
                maistas) . Tai per ilgą laiką išsivystanti liga, pasireiškia
                netaisyklinga kojų laikysena (kreivos kojos), minkšas
                žandikaulis, nerangi, sunki eisena, ilgainiui augintinis
                visiškai nebegali vaikščioti. Problema dažnai apsunkina
                vitaminoD3 ir kalcio trūkumas. Siekiant išvengti ligos, būtina
                užtikrinti gerą, įvairų mitybos racioną, kuriame būtų gausu
                įvairių vitaminų bei kalcio. Taip pat, būtina UVB lempa.
              </p>
              <p>
                <b>Užpakalinių kojų paralyžius </b>– B1 vitaminų trūkumo ištinka
                galinių kojų paralyžių. Ši problema sprendžiama injekcijomis bei
                mytybos balancu. Užpakalinės dalies paralyžius taip pat gali
                kilti dėl mineralų (ypač Ca) trūkumo. Šiai problemai spręsti
                taip pat būtinos Ca injekcijos.
              </p>
              <p>
                <b>Podagra</b> – priežastis – netinkamos laikymo salygos ir
                netaisiklingas maitinimas (laisvėje šią liga gyvūnai neserga)
              </p>
              <p>
                <b>Infekcinis stomatitas</b> – burnos puvinys. Tai burnos
                uždegimas, sukeltas, virusinių, bakterinių ar grybinių
                infekcijų. Liga pasireiškia nusilpus augintinio imunitetui.
                Imunitetas gali nusilpti dėl, netinkamos mitybos ar streso.
                Burnos puvinio simptomai: sumažėjęs apetitas, nesidomėjimas
                maistu, patinusi bei paraudusi burna, iš burnos teka seilės.
              </p>
              <p>
                <b>Gribelinės išorinės ir vidinės ligos</b> – tai odos
                pasikeitimai su ištamsėjimais ir tai matoma tik per mikroskopa.
                Šios ligos diagnozuojamos jau paveluotai ir jų gydymas būna
                ilgas ir sudėtingas.
              </p>
              <p>
                <b>Parazitinės ligos.</b> Užsikrėsti parazitais augintiniai gali
                2 būdais: nuolat šeriami laukiniais vabzdžiais arba trūkstant
                bendros higienos ir švaros terariume. Užsikrėtimo požymiai:
                išsipūtęs pilvas, silpnumas, staigus svorio kritimas. Siekiant
                išvengti parazitinių užsikrėtimų būtina švariai plauti maistą,
                taip pat, būtina palaikyti nuolatinę terariumo švarą.
              </p>
              <p>
                Jeigu gyvūnas gyvena su kailiuotais augintiniais, iguana būtina
                nukirminti kas 6 mėnesius(„panakur „milteliai)
              </p>
              <p>
                <b>Kvėpavimo sistemos ligos.</b> Dažniausiai išsivysto dėl per
                didelės drėgmės, prasideda antrinė bakterinė infekcija.
                Pagrindiniai simptomai yra pajuodyje ties mentimis. Dažniausiai
                veterinarijos klinikoje skiriama antibiotikų terapija.
              </p>
              <p>
                Nagų peraugimas nesunkiai pašalinamos su smulke dilde(nekaryti)
                . Taip gyvūnas jausis patogiai ir jūsų neapdraskys.{" "}
              </p>
              <p>
                Dažnai inguanų patelės, net ir gyvendamos vienos deda
                kiaušinius. Tačiau pasitaiko atvejų, jog jos jų neišdeda ir
                laiku joms nesuteikus pagalbos – miršta.{" "}
              </p>
              <p>
                Dėl tinkamo auginimo patareme konsultuotis su specialistais.
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
