import React, { useRef, useEffect, useState } from "react";
import "./sinsilos.scss";
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
export default function Sinsilos({ state }) {
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
  const cardArray = [
    {
      name: "Degu",
      tags: ["Graužikai", "Degu"],
      link: "/degu",
      img: "./img/animalCare/careDegu.png",
      info: "Tinkama degu priežiūra",
    },
    {
      name: "Jūrų kiaulytės",
      tags: ["Graužikai", "Jūrų kiaulytės"],
      link: "/juruKiaulytes",
      img: "./img/animalCare/careJuruKiaulyte.png",
      info: "Tinkama Jūrų kiaulyčių priežiūra",
    },
    {
      name: "Šinšilos",
      tags: ["Graužikai", "Šinšilos"],
      link: "/sinsilos",
      img: "./img/animalCare/careSinsila.png",
      info: "Tinkama Šinšilų priežiūra",
    },
    {
      name: "Žiurkėnai",
      tags: ["Graužikai", "Žiurkėnai"],
      link: "/ziurkenai",
      img: "./img/animalCare/careZiurkenai.png",
      info: "Tinkama žiurkėnų priežiūra",
    },
    {
      name: "Dekoratyvinės žiurkės",
      tags: ["Graužikai", "Dekoratyvinės žiurkės"],
      link: "/ziurkes",
      img: "./img/animalCare/careZiurkes.png",
      info: "Tinkama dekoratyvinių žiurkių priežiūra",
    },
    {
      name: "Barzdotoji agama",
      tags: ["Ropliai", "Barzdotoji agama"],
      link: "/barzdotojiAgama",
      img: "./img/animalCare/careAgama.png",
      info: "Tinkama barzdototojų agamų priežiūra",
    },
    {
      name: "Gyvatės ir žalčiai",
      tags: ["Ropliai", "Gyvatės", "Žalčiai"],
      link: "/gyvatesIrZalciai",
      img: "./img/animalCare/careGyvates.png",
      info: "Tinkama gyvačių ir žalčių priežiūra",
    },
    {
      name: "Iguana",
      tags: ["Ropliai", "Iguana"],
      link: "/iguana",
      img: "./img/animalCare/careIguana.png",
      info: "Tinkama iguanų priežiūra",
    },
    {
      name: "Leopardinis gekonas",
      tags: ["Ropliai", "Leopardinis gekonas"],
      link: "/leopardinisGekonas",
      img: "./img/animalCare/careGekonas.png",
      info: "Tinkama gekonų priežiūra",
    },
    {
      name: "Sausumos vėžliai",
      tags: ["Ropliai", "Sausumos vėžliai"],
      link: "/sausumosVezliai",
      img: "./img/animalCare/careSausiVezliai.png",
      info: "Tinkama sausumos vėžlių priežiūra",
    },
    {
      name: "Vandens vėžliai",
      tags: ["Ropliai", "Vandens vėžliai"],
      link: "/vandensVezliai",
      img: "./img/animalCare/careSlapiVezliai.png",
      info: "Tinkama vandens vėžlių priežiūra",
    },
    {
      name: "Šalmuotasis chameleonas",
      tags: ["Ropliai", "Šalmuotasis chameleonas"],
      link: "/salmuotasisChameleonas",
      img: "./img/animalCare/careChameleonas.png",
      info: "Tinkama chameleonų priežiūra",
    },

    {
      name: "Paukščiai",
      tags: ["Paukščiai", "Papūgos"],
      link: "/pauksciai",
      img: "./img/animalCare/carePauksciai.png",
      info: "Tinkama paukščių priežiūra",
    },
    {
      name: "Dekoratyviniai triušiai",
      tags: ["Kiti", "Dekoratyviniai triušiai"],
      link: "/dekoratyviniaiTriusiai",
      img: "./img/animalCare/careTriusiai.png",
      info: "Tinkama triušių priežiūra",
    },
    {
      name: "Gyvalazdės",
      tags: ["Kiti", "Gyvalazdės"],
      link: "/gyvalazdes",
      img: "./img/animalCare/careGyvalazdes.png",
      info: "Tinkama gyvalazdžių priežiūra",
    },
    {
      name: "Šeškai",
      tags: ["Kiti", "Šeškai"],
      link: "/seskai",
      img: "./img/animalCare/careSeskai.png",
      info: "Tinkama šeškų priežiūra",
    },
  ];
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
    <div className="sinsilosPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/sinsila1.jpg"
              alt="triusis"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>Gyvenimo trukmė – apie 15 – 20 metų .</p>
              <p>Svoris: 350-500g.</p>
              <p>Ilgis: 20-40cm</p>
              <p>
                Šinšilos yra gana jautrūs gyvūnai. Jas lengvai gali išgąsdinti
                pašalinis triukšmas, svetimi žmonės. Įsigijus šinšilą pirmiausia
                derėtų leisti jai apsiprasti su nauja aplinka, tuomet pamažu
                pradėti ją jaukinti maitinant iš rankų, pratinti prie rankų
                lėtais judesiais.
              </p>
              <p>
                Gamtoje šinšilos gyvena grupėse, todėl rekomenduojama laikyti
                bent dvi šinšilas tos pačios lyties, taip jos geriau jaučiasi,
                tampa socialesnės. šinšilos aktyviausios naktį. Šie gyvūnai
                jautriai reaguoja į aplinkos pokyčius.
              </p>
              <p>
                <b>Veislės:</b>
              </p>
              <p>
                Pasaulyje žinomos dvi šinšilų veislės – ilgauodegės šinšilos bei
                trumpauodegės šinšilos. Pastarosios yra gan retai auginamos,
                dažniausiai namie laikomos ilgauodegės šinšilos.
              </p>
              <p>
                Yra skirtingos šinšilų spalvų variacijos – balta, juoda,
                smėlinė, violetinė, ruda, pilka rausvai-balta, karamelinės,
                šokoladinės.
              </p>
            </div>
            <UsefullFact
              message={
                "Šinšilos gyvena ganėtinai ilgą gyvenimą, vidutiniškai nuo 10 iki 20 metų."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Šinšilų lytis nustatoma pagal atstumą tarp lytinių organų bei
                išangės. Pas patinus tarpas tarp šių organų bus didesnis, pas
                pateles jo beveik nėra.
              </p>
              <p>
                Šinšilų nėštuminis laikotarpis 112 dienų. Palikuonių atsiveda
                1-4. Mama maitina 3 mėnesius, todėl jaunikliai atskiriami tik po
                3 mėnesių.
              </p>
              <p>
                Kastruoti galima nuo – patiną nuo 4 mėnesių, patelę nuo 5
                mėnesių.
              </p>
            </div>

            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Narvelis turėtų būti pakankamai didelis bei aukštas, vienai
                šinšilai-nuo 80cm ilgio ir 80cm aukščio. Kadangi šinšilos yra
                aktyvūs gyvūnai, mėgstantys šokinėti bei karstytis.
                <br /> Augintiniui bus smagiau, jei į narvelį įdėsite kuo
                įvairesnių gamakų, kopetėlių, lapuočio madžio šakų ir lentynų .
                Į narvelį reikėtų įdėti kilnojamą namelį , gamaką kuriame
                šinšila galės miegoti. Taip pat šinšiloms būtinos „smėlio
                vonios“ – įdėkite indelį/maudyklę su specialiu šinšiloms skirtu
                smėliu. Nes šių gyvūnų maudyti negalima! Narvo dugnas turi būti
                padengtas medžio kraiku arba stambiomis pjuvenomis.
              </p>
              <p>
                Jas galima pasileisti palakstyti po kambarį, tačiau turite
                pasirūpinti jo saugumu nuo laidų ar aštrių daiktų. Neužmirškite
                kad tai šoklus augintinis ir jis gali užšokti ant baldų.
              </p>
              <p>
                <span style={{ color: "red" }}>
                  Nešti į lauką negalima, pavadėliu dėti negalima.{" "}
                </span>
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Šinšilos yra žoliaėdžiai graužikai, juos patartina šerti
                granuliuotu maistu(be grūdų ar kitų priedų, išskyrus su
                džiovinta žolia ar džiovintomis žolelės) 1 kartą per dieną.
                <br /> Racione turi būti šieno 24 val per parą!
                <br />
                Galima duoti razinų, riešutų, tik nedarykite to pernelyg dažnai,
                ne dažniau kaip 1–2 kartus per savaitę ir tik nedideliais
                kiekiais (pvz.: viena razina, pusė lazdyno riešuto)!
                <br />
                Maisto racione neturi būti kreidos ar druskos(jos kenkia
                sveikatai, o ir dantų dildinimui tai nepadeda).
                <br />
                Skanėstai ant pagaliuko-jie su medumi, grūdais – NE.
              </p>
              <p>Natūralūs žoliniai skanėstai-TAIP. </p>
              <p>
                Taip pat šinšiloms būtina nuolatinė prieiga prie vandens,
                atsigerti. Vanduo gertuvėje turi būti švarus bei šviežias.
              </p>
              <p>
                Džiovinti vaisiai ir daržovės turėtų būti duodami nedideliais
                kiekiais, kaip skanėstai(pvz. viena skiltelė obuoliuko). Tinkami
                džiovinti vaisiai – obuoliai, razinos.
              </p>
              <p>
                Dėl didelio cukraus kiekio bananai paprastai yra pavojingi
                šinšiloms. Pilvo pūtimas ir skrandžio sutrikimas yra dažnas
                šalutinis poveikis valgant per daug bananų. Paprastai patartina
                tiesiog praleisti šį vaisių, o kitus vaisius pasilikti
                ypatingoms progoms.
              </p>
              <p>
                Pirktiniame maiste – vaisių, riešutų, grūdų ir sėklų(pvz.
                Saulėgrąžų) reikėtų vengti . Šiose maistuose dažnai yra daug
                riebalų ir cukraus ir nesvarbu, kad jis sumaišytas su
                granulėmis. Šinšilos neturėtų jų valgyti, nes jos nesveikos ir
                gali nutukti.
                <br />
                Vasara galite saikingai palepinti lapeliais- dobilų , kiaupienės
                , dilgėlės, beržo, aviečių, braškių.
                <br />
                Džiovintais taip pat. Dar galite prisidžiovinti- medetkų,
                liepžiedžių, morkų.
              </p>
              <p>
                Šakelės pagraužtukai gali būti duodamos kiekvieną dieną – beržo
                , liepos, aviečių, obels, lazdyno.
              </p>
              <p>
                <span style={{ color: "red" }}>Viską duoti su saiku!</span>
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>Maistas, kurio duoti draudžiama:</p>
              <ul>
                <li>paprastasis kopūstas</li>
                <li>kukurūzai</li>
                <li>bananai</li>
                <li>saulėgrąžų sėklos</li>
                <li>avokadai</li>
                <li>rabarbarai</li>
                <li>pupelės</li>
                <li>brokoliai</li>
                <li>špinatai</li>
                <li>citrusiniai vaisiai</li>
                <li>žmonių ir kitų gyvūnų maistas</li>
              </ul>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                Vienas pagrindinių sveikatingumo rodiklių – kailis. Jis turi
                būti švarus, purus, blizgus, vientisas, be nuplikimų.
                <br />
                Taip pat kaip ir kitiems graužikams, būtina atkreipti dėmesį į
                šinšilos dantis. Jeigu pastebėjote kad augintis nustojo valgyti
                kuo skubiau vežkite pas veterinarą, nes gali būti, kad peraugo
                dantys.
                <br />
                Dantų kirpti negalima, tik dildinti. Peraugusius dantis jūs
                galite apžiūrėti tik priekinius, galinius gali apžiūrėti tik
                vet. gydytojos su specialiais žiodikliais. Dantys turi būti
                oranžinės spalvos. Sveiko gyvūnėlio nosis turi būti sausa,
                švari, o akys skaidrios, blizgios.
              </p>
              <p>
                <b>Parazitai.</b>
              </p>
              <p>
                Šinšilos dažniausiai užsikrečia virškinamojo trakto parazitais
                dėl prastų laikymo sąlygų, prastos aplinkos higienos, taip pat
                gali užsikrėsti nuo kitų namie laikomų augintinių. Dažniausi
                simptomai – apetito netekimas, viduriavimas, pilvo išsipūtimas,
                gyvūnas tampa apatiškas, gali pradėti kristi svoris.
                <br />
                Kaip ir kiti kailiniai žvėreliai, šinšilos gali užsikrėsti
                išoriniais parazitais(gali būti parazitų ir jūsų nupirktame
                šiene) . Ryškiausi užsikrėtimo požymiai – pablogėjusi kailio
                kokybė, nuplikimai, žaizdelės, intensyvus kasymasis.
              </p>
              <p>
                {" "}
                Pastebėjus šiuos požymius būtina parodyti augintinį
                veterinarijos gydytojui, kuris pritaikys reikiamą gydymą. Norint
                išvengti šių ligų, būtina reguliariai valyti gyvūno gyvenamąją
                aplinką, profilaktiškai naudoti preparatus nuo parazitų, juos
                jums turėtų paskaičiuoti pagal svorį veterinaras.
              </p>
              <p>
                <b>Šilumos smūgis.</b>
              </p>
              <p>
                Šinšilos yra jautrios aplinkos temperatūros pokyčiams, ypač
                karščiui, skersvėjui. Geriausia šinšilą laikyti 16-21°C aplinkos
                temperatūroje. Rekomenduojama narvą laikyti toliau nuo
                tiesioginių saulės spindulių, radiatorių, šildytuvų. Simptomai –
                gyvūnas letargiškas, silpnas, padažnėjęs kvėpavimas, gali būti
                seilėtekis. Būtina kuo skubiau gydyti, nelaukti kol simptomai
                praeis.
              </p>
              <p>
                Jeigu pastebėjote, kad augintinis vangus, nevalgo ar papilvė
                šlapia kuo skubiau vežkite pas gydytoją. Nelaukite ryto ar
                vakaro.
              </p>
              <p>Jūsų pastabumas – sveikas augintinis.</p>
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
