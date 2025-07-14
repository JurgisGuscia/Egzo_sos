import React, { useRef, useEffect, useState } from "react";
import "./barzdotojiAgama.scss";
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

export default function BarzdotojiAgama({ state }) {
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
    <div className="barzdotojiAgamaPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/agama1.jpg"
              alt="triusis"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>
                Svoris: 280 – 510g. <br /> Ilgis: 40–60 cm.
                <br />
                Gyvenimo trukmė: 10 metų.
                <br />
                Spalvos vyrauja nuo tamsiai rudos iki geltonos, oranžinės,
                baltos.
                <br /> Tai yra teritoriniai gyvūnai, todėl patinai kovoje vienas
                su kitu.
                <br /> Patelės būna, kad sugyvena. Skirtingo ūgio agamas laikyti
                negalima. Geriausiai laikyti po vieną.
              </p>
            </div>
            <UsefullFact
              message={
                "Barzdotoji agama gali keisti savo barzdos spalvą. Šviesesnės spalvos padeda atspindėti, o tamsesnės - sugerti saulės šilumą, kas padeda reguliuoti kūno temperatūrą."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Lytis nustatoma įvertinant uodegą. Jei uodegos pagrinde matomi
                du išilgai uodegos išsidėstę išsikišimai – tai patinėlis, jei
                matomas vienas išsikišimas kloakos srityje – tai patelė. <br />
                Norint pamatyti aiškesnį skirtumą, uodegą galima peršviesti
                žibintuvėliu. <br />
                Kairėje nuotraukų pusėje matoma patinėlio uodega, dešinėje –
                patelės.
              </p>
            </div>
            <img
              src="./img/animalCare/agamosLytis.png"
              alt="agamos lyties nustatymas"
            />
            <img
              src="./img/animalCare/agamosLytis2.png"
              alt="agamos lyties nustatymas"
            />

            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Minimalus terariumo dydis turėtų būti bent 110 x 60 x 60 cm.
                Terariume turi būti gera ventiliacija. Agamos yra jautrios
                stresui, todėl terariumą reikėtų statyti ramioje vietoje, kur
                būtų kuo mažiau pašalinių garsų, taip pat rekomenduojama
                terariumą statyti prie sienos, taip gyvūnas jausis saugiau.
                Jokių smulkių akmenukų, nerekomenduojami jokie augalai. Puikiai
                gyvunas jaučiasi kai turi, uzsilipti tai gamakas ar šakos.
              </p>
              <p>
                Terariume turi būti įrengta šildomoji bei UVB 10 % lempos. UV
                spindulių lempa turi būti įrengta 30cm atstumu nuo gyvūnų,
                kitaip gali sukelti nudegimus. Galima padėti akmenų, ant kurių
                augintiniai galėtų šildytis prieš lempą. Gruntui tinka tam
                skirtas spec. smėlis, plokšti akmenys.
              </p>
              <p>
                Terariume turi būti 2 zonos: šiltoji ir šaltoji, kad gyvūnas
                galetų išsirinkti jam optimaliausią temperatūrą. Karščiausioje
                zonoje turėtų būti apie 40°C, vėsesnėje apie 25-30°C.
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Barzdotoji agama yra visaėdis gyvūnas. Minta įvairiais
                vabzdžiais, vaisiais, žolėmis. 60-80% viso raciono turi sudaryti
                augalinės kilmės maistas. Augalinės kilmės maistas šeriamas
                kiekvieną dieną, o gyvūninės kilmės maistas 2-3 kartus per
                savaitę.
              </p>
              <p>Iki metų laiko pagrinde 90% minta vabzdžiais. </p>
              <p>
                Tinkamas augalinis maistas: kiaulpienės, pienių žiedai, dobilai,
                salotos,morkos,garšva. Nerekomenduojama maitinti špinatais ir
                kopustais ir cutrusiniais vaisiais.{" "}
              </p>
              <p>
                Tinkamas gyvūninis maistas: milčiai, tarakonai, svirpliai.
                Retkarčiais zoofobusai.{" "}
              </p>
              <p>
                Mineralai duodami trys kartus per savaitę, su maistu. Jaunom
                agamom duodama po truputi su maistu, kiekviena diena iki metų
                laiko.{" "}
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                Barzdotosioms agamoms gali būti kenksmingi tam tikri maisto
                produktai, kurių reikėtų vengti, siekiant užtikrinti jų sveikatą
                ir gerovę.
                <br /> Vabzdžiai, sugauti laukinėje gamtoje, gali būti užteršti
                pesticidais ar nešti parazitus, kurie gali pakenkti jūsų
                augintiniui. <br /> Rūgštūs vaisiai, tokie kaip apelsinai,
                citrinos ir greipfrutai, gali sudirginti jų virškinimo sistemą
                dėl didelio rūgštingumo.
                <br /> Špinatai ir rūgštynės yra pavojingi dėl juose esančių
                oksalatų, kurie trukdo kalcio absorbcijai, o tai gali sukelti
                kalcio trūkumą ir rimtas sveikatos problemas, pavyzdžiui,
                metabolinę kaulų ligą.
                <br /> Avokadai yra ypač toksiški daugeliui roplių, įskaitant
                barzdotas agamas, dėl juose esančio persino. Taip pat reikėtų
                vengti lapų ir gėlių iš tam tikrų augalų, tokių kaip rododendrai
                ir oleandrai, kurie yra nuodingi ropliams. <br /> Laikydamiesi
                šių rekomendacijų, galite padėti savo barzdotajai agamai išlikti
                sveikai ir gyvybingai.
              </p>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                Pagrindiniai požymiai, parodantys augintinio sveikatos
                sutrikimus: įdubusios akys, susiraukšlėjusi oda, apatija,
                sumažėjęs apetitas, pakitusios išmatos. Miegojimas vidurį
                dienos.{" "}
              </p>
              <p>
                <b>Metabolinė kaulų liga. </b>Dažniausiai pasireiškia, kai
                gyvūnas gauna nepakankamą kiekį ultravioletinių spindulių (UVB).
                Taip pat šią ligą sukelia netinkamas mitybos racionas, per mažas
                kalcio kiekis. Tai per ilgą laiką išsivystanti liga, pasireiškia
                netaisyklinga kojų laikysena (kreivos kojos), minkšas
                žandikaulis, nerangi, sunki eisena, ilgainiui augintinis
                visiškai nebegali vaikščioti. Siekiant išvengti ligos, būtina
                užtikrinti gerą mitybos racioną, kuriame būtų įvairių vitaminų
                bei kalcio. Taip pat, būtina UVB lempa.
              </p>
              <div className="imageWrapper">
                <img
                  src="./img/animalCare/agamosLiga1.png"
                  alt="serganti agama"
                />
              </div>
              <p>
                <b>Geltonasis grybelis.</b> Tai agresyvi grybinė liga,
                pažeidžianti išorinius ir vidinius odos sluoksnius. Pagrindinis
                simptomas, geltonos dėmės ant augintinio kūno. Pažeisti žvynai
                pradeda lūžinėti, dėl to ant kūno atsiveria žaizdos.
              </p>
              <div className="imageWrapper">
                <img
                  src="./img/animalCare/agamosLiga2.png"
                  alt="serganti agama"
                />
              </div>
              <p>
                <b>Kvėpavimo sistemos ligos.</b> Dažniausiai išsivysto dėl per
                didelės drėgmės. Pagrindiniai simptomai yra kvėpavimas atvira
                burna, išskyros iš nosies ir burnos.{" "}
              </p>
              <p>
                <b>Parazitinės infekcijos. </b>Užsikrėsti parazitais augintiniai
                gali 2 būdais: nuolat šeriami laukiniais vabzdžiais arba
                trūkstant bendros higienos ir švaros terariume. Užsikrėtimo
                požymiai: išsipūtęs pilvas, silpnumas, staigus svorio kritimas,
                viduriavimas. Siekiant išvengti parazitinių užsikrėtimų derėtų
                maistą pirkti iš specializuotų parduotuvių. Taip pat, būtina
                palaikyti nuolatinę terariumo švarą.
              </p>
              <p>
                <b>Infekcinis stomatitas – burnos puvinys.</b> Tai burnos
                uždegimas, sukeltas, virusinių, bakterinių ar grybinių
                infekcijų. Liga pasireiškia nusilpus augintinio imunitetui.
                Imunitetas gali nusilpti dėl netinkamos temperatūros terariume,
                netinkamos mitybos ar streso. Burnos puvinio simptomai:
                sumažėjęs apetitas, nesidomėjimas maistu, patinusi bei paraudusi
                burna, iš burnos teka seilės, galvos patinimas.
              </p>
              <div className="imageWrapper">
                <img
                  src="./img/animalCare/agamosLiga3.png"
                  alt="serganti agama"
                />
              </div>
              <p>
                Tikslesnę informacija jums suteiks veisėjai arba galite kreiptis
                į „Drakono namai”.
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
