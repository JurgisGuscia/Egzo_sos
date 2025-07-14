import React, { useRef, useEffect, useState } from "react";
import "./ziurkes.scss";
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
export default function Ziurkes({ state }) {
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
    <div className="ziurkesPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/ziurke1.jpg"
              alt="ziurkenas"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>
                Dekoratyvinės žiurkės yra populiarūs augintiniai dėl jų žavios
                išvaizdos, socialumo ir žaismingumo. Šie maži gyvūnai,
                priklausomai nuo rūšies, gali būti trumpaplaukiai, ilgaplaukiai
                ar net margi, pateikiantys platų spalvų ir raštų spektrą. Jie
                yra labai bendraujantys, mylintys žaidimus ir aktyvų gyvenimo
                būdą.
              </p>
              <p>
                Dekoratyvinės žiurkės yra naktiniai gyvūnai, tad dažniausiai
                aktyvios vakare ir naktį, dieną - miega. Joms labai svarbi
                tinkama mityba.
              </p>
            </div>
            <UsefullFact
              message={
                "Žiurkės kutenamos juokiasi. Žiurkės gali skleisti aukšto dažnio cypimą, kurio žmonės negirdi. Tai yra žiurkių 'juokas'."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Lytis nustatoma pagal atstumą tarp lytinių organų ir išangės.
                Pas patinėlius šis atstumas bus 1,5 cm arba daugiau, pas pateles
                jis bus daug mažesnis.
              </p>
              <p>
                <b>Veisimas:</b>
              </p>
              <p>
                Žiurkių nėštumas trunka nuo 21 iki 28 dienų.
                <br />
                Gimę – mažylių kailis pradeda augti nuo 9 dienos. Atsimerkia nuo
                12-14 dienų.
                <br />
                Vadoje gali būti nuo 6 iki 20 jauniklių.
                <br />
                Atskirti jauniklių pateles nuo patinėlių reikia nuo 20-21
                dienos.
                <br />
                Jos labai vislios, per metus būna iki 3 vadų ir daugiau.
                <br />
                Lytiškai subręsta 5-6 sav. amžiaus.
                <br />
                Veisimas – tai atsakingas selekcinis darbas, nes dažnai įsigyti
                augintiniai būna genetiškai artimi.
                <br />
                Todėl tai daryti turėtų tik veislynai, kurie užtikrins, kad jūsų
                augintiniai bus genetiškai sveiki.
              </p>
            </div>

            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Žiurkės paprastai laikomos metaliniuose narvuose, renkantis
                svarbu atkreipti dėmesį į jo dydį.
                <br />
                Todėl jo dydis turėtų būti nuo 70 cm ilgio, 40 cm gylio, ir 70
                cm aukščio. Galite pasiskaičiuoti ir patys kiek augintinių
                galite auginti turimame narvelyje.
              </p>
              <p>
                Žiurkei reikia laisvai judėti nors 2 val. per dieną, todėl
                narvelis skirtas žiurkėnui ar pelei jai bus gerokai per mažas.
                Narvas turėtų būti padėtas toliau nuo tiesioginių saulės
                spindulių bei skersvėjo. Narvelyje turėtų būti gertuvė su švariu
                bei šviežiu vandeniu, kurį reikia keisti kasdien.
              </p>
              <p>
                Dekoratyvinėms žiurkėms bėgimo rateliai nereikalingi. Narve joms
                geriau pritaisykite karstykles, kopėtėles (kurias galite
                pasigaminti ir patys), hamakų ir slėptuvių. Jos turėtų būti
                sukabintos įvairiuose aukščiuose.
                <br />
                Kadangi žiurkės yra socialios jas laikyti po vieną nepatartina
                (tik išskirtiniais atvejais), laikyti tik tos pačios lyties po
                kelis. Norint laikyti skirtingų lyčių būtina kastruoti.
              </p>
              <p>
                Norint užtikrinti švarą ir gerą kvapą, graužiko narvelį būtina
                reguliariai valyti.
                <br />
                Pasirinkite tinkamą kraiką ar patiesalą, dažniausiai naudojami:
                <br />
                Medžio drožlių kraikai – joms per kietas kojytėms. Jeigu vis dėl
                to renkatės, rinkitės tik lapuočių medžio drožles, nes pušų ar
                kedro medžio skiedrose esantys aliejai gali pakenkti augintinio
                sveikatai. Taip pat geriau nenaudoti smulkių pjuvenų, nes jos
                gali patekti į akis ar kvėpavimo takus ir taip sukelti rimtus
                augintinio sveikatos sutrikimus. Praktiškiausia tiesiog patiesti
                kilimą ar storą medžiagą.
                <br />
                Būtinas tualetas.
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Žiurkės – visaėdžiai gyvūnai, todėl jų negalima šerti vien tik
                augaliniu maistu.
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                <span style={{ colore: "red" }}>Žiurkėms negalima duoti:</span>
              </p>
              <ul>
                <li>Šokolado, ar kitų saldumynų</li>
                <li>Žalių bulvių</li>
                <li>Pupų</li>
                <li>Briuselio kopūstų</li>
                <li>Citrusinių vaisių</li>
              </ul>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                <b>Raudonų ašarų liga/porfirinas.</b> Jei pastebėjote aplink
                akis ar/ir nosį raudonos spalvos sekretą, tai gali reikšti, jog
                gyvūnas patiria nebūtina stresą, tai gali būti bet kokios ligos
                pirmas požymis. <br />
                Šį sekretą reikėtų skirti nuo kraujo. Svarbu pašalinti faktorių,
                ir stebėti augintinio būklę.
              </p>
              <p>
                <b>Kvėpavimo takų ligos.</b> Kvėpavimo takų ligomis žiurkės
                serga gana dažnai, jas gali sukelti bakterijos, virusai, dulkės.
                Pagrindiniai simptomai: čiaudulys, kosėjimas, pakitęs kvėpavimas
                – švokštimas, dusimas.
              </p>
              <p>
                <b>Virškinimo trakto ligos.</b> Dažniausiai virškinimo
                sutrikimus gali sukelti netinkama mityba. Pagrindiniai
                simptomai: viduriavimas, išmatų konsistencijos ar spalvos
                pakitimai, svorio pokyčiai, gyvūnas apatiškas. Taip pat,
                virškinimo trakto ligas gali sukelti ir kitos priežastys –
                bakterijos, virusai, parazitai, stresas. Todėl būtina į tai
                atkreipti dėmesį ir pasireiškus simptomams kreiptis į
                veterinarijos gydytoją.
              </p>
              <p>
                <b>Odos ligos.</b> Dažniausiai odos ligas sukelia ektoparazitai
                ar grybelinės kilmės ligos. Pagrindiniai požymiai: gyvūnas
                neramus, nuolat kąsosi, pablogėja kailio kokybė, atsiranda
                pleiskanų, nuplikimų, ar žaizdelių. Siekiant išvengti odos ligų,
                būtina užtikrinti pastovią narvelio švarą, subalansuotą racioną.
                <br />
                Kilus įtarimams dėl sveikatos būtina kreiptis į veterinarijos
                gydytoją.
              </p>
              <p>
                <b>Dantų ligos.</b> Graužikų priekiniai dantys nuolat auga ir
                gali peraugti bei trukdyti maitintis. Todėl narvelyje turėtų
                būti įvairių graužalų – medžio šakelių, medinių žaislų.
              </p>
              <p>
                <b>Pieno liaukų navikai.</b> Žiurkėms gana dažnai išsivysto
                pieno liaukos augliai, nepriklausomai nuo lyties ir amžiaus.
                Dažniausiai taip atsitinka dėl sutrikusių hormonų gamybos. Iš
                pradžių augliai būna nedideli, žirnio dydžio, tačiau vėliau gali
                išaugti labai dideli ir net sudaryti iki trečdalio gyvūno
                svorio. Jeigu pastebėjote guziuką butina kreiptis į
                veterinarijos gydytoją, kadangi tai gali būti ne auglys, o
                pūlinukas.
              </p>
              <p></p>
              <p></p>
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
