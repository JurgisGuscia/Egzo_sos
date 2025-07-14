import { useLocation } from "react-router-dom";
import CarePageHeader from "../../../components/carePageHeader/CarePageHeader.jsx";
import NavBar from "../../../components/navBar/NavBar";
import Footer from "../../../components/footer/Footer.jsx";
import "./dekoratyviniaiTriusiai.scss";

import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../utilityStyles/animalCareContentContainer.scss"; // bendras wrapperis visiem gyvunu prieziuros komponentam\
import "../../../utilityStyles/animalCareSideBar.scss";
import UsefullFact from "../../../components/usefullFact/UsefullFact.jsx";
import AnimalsLookingForHome from "../../../components/animalsLookingForHome/AnimalsLookingForHome.jsx";
import ReadMore from "../../../components/readMore/ReadMore.jsx";

export default function DekoratyviniaiTriusiai({ state }) {
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
    <div className="dekoratyviniaiTriusiaiPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img src="./img/animalCare/triusis1.jpg" alt="triusis"></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>
                Dekoratyviniai triušiai, priklausomai nuo rūšies, gali būti
                20-50 cm ilgio ir sverti 0,4-3 kg.
              </p>
              <p>
                Gyvenimo trukmė: 8-10 metų. Triušiai būna aktyvūs ankstyvą rytą
                ar vakare, dažniausiai miega atsimerkę , taip saugodamiesi nuo
                pavojų.
              </p>
              <p>
                Jeigu triušiukas nėra žymėtas, ženklintas ir neturi dokumentų
                jis vardijamas kaip mišrūnas.
              </p>
              <UsefullFact
                message={
                  "Triušiai nėra graužikai. Triušiai priklauso kiškiams."
                }
              />
              <p>
                Triušiai nėra graužikai. Triušiai priklauso kiškiams. Kuo
                skiriasi triušiukas nuo jūrų kiaulytės? – Jie turi savybių,
                kurios jas visiškai pašalino iš graužikų. {<br />} Visų pirma,
                triušių viršutinėje lūpoje yra dvi eilės priekinių dantų. Jų
                dantų formulė yra: priešakiniai dantys 2/1, iltiniai 0/0,
                prieškrūminiai 3/2, krūmini9ai 3/3, o ne kaip graužikams:
                viršuje ir apačioje: 1+0+2-0+3-2. Šie dantys neturi šaknų. Jų
                žandikaulių darbas kramtant taip pat skiriasi- triušiai sukioja
                dantimis sukamaisiais judesiais, o graužikai juda aukštyn ir
                žemyn. Taip pat graužikams neatsiranda plyšio viršutinėje
                lūpoje.{<br />} Triušiams taip pat būdingas visiškai kitoks
                virškinimo procesas, jie valgo savo išmatas ir taip du kartus
                virškina maistą, kad iš jų gautų maksimalų maistinių medžiagų
                kiekį. Maistas praeina per ilgąją žarną, yra iš anksto
                virškinimas ir išskiriamas minkštų išmatų, padengtų gleivių
                sluoksniu, pavidalu. Tada triušis suvalgo išmatas ir vėl
                suvirškina. Tik po antrojo virškinimo jie gauna sausų rutulių
                formą. Dėl šios priežasties kiškiai protingai valdo vandenį ir
                maistą, ir gali gyventi tokiose vietose kaip stepės ir tundra.
              </p>
            </div>
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Triušių lytis nustatoma apžiūrint lytinius organus. tarp patelių
                lytinių organų ir išangės beveik nėra tarpo, pas patinėlius
                matomas tarpas, taip pat pas patinus kaba sėklidės, o pas
                pateles matomas lytinių organų griovelis.{<br />}Visada
                rekomenduojama laikyti du triušiukus, dėl draugijos. Jeigu
                gyvūnai yra skirtingų lyčių – jie turėtų būti tik kastruoti.
                {<br />}Kastruoti patartina ir dėl nuotaikų svyravimo, žymėjimo
                bei agresijos.{<br />}
                Kastruoti jau galite ir kelių mėn. triušiuką.
              </p>
            </div>
            <img
              src="./img/animalCare/triusioLytis.png"
              alt="triusio lyties nustatymas"
            />
            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Dekoratyvinių triušių narvelis turėtų būti kiek įmanoma
                erdvesnis.
                {<br />}
                Mažiausias rekomenduojamas vieno triušio narvo dydis turėtų būti
                nuo 100×50 cm. Viskas priklauso kokio dydžio užaugs augintinis.
                Triušiuko narvas turėtų būti tokio aukščio, kad augintinis
                galėtų atsistoti ant užpakalinių kojų.{<br />}
                Narve būtina įmontuoti namelį, kuriame augintinis galėtų
                pasislėpti ar ant jo užšokti. Taip pat narvelyje turi būti
                dubenėlis maistui, gertuvė su šviežiu vandeniu, ėdžios su šienu.
                {<br />}
                Narvelio dugną patartina ištiesti neslystančia danga. Triušiuką
                galima išmokinti daryti į tualeto dėžutę, kur turi būti priberta
                medžio granulių ar pjuvenų.{<br />}
                Jeigu jo gyvenamąjį visą plotą pribersite granulėmis/ pjuvenomis
                ar šienu, jis dergs, miegos ar ės tai kas ,,paklota”.{<br />}
                Narvelį laikyti toliau nuo skersvėjų. Labai svarbu, jog narvelio
                nepasiektų tiesioginiai saulės spinduliai, nes triušiai yra ypač
                jautrūs aukštai temperatūrai ir perkaitimui, tinkamiausia
                aplinkos temperatūra yra 18-22°C.{<br />}
                Triušiai yra labai judrūs augintiniai, todėl turėtų būti
                išleidžiami iš narvelio kuo dažniau, mažiausiai 3 val. per
                dieną. Išleidus augintinį lakstyti po namus, svarbu nepamiršti
                apsaugoti tiek jį, tiek namie esančius daiktus – neprileisti
                triušio prie laidų, augalų, įvairių cheminių valymo medžiagų ir
                pan.
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Graužikai maitinasi daugiausia javų grūdais, o kiškiai – žole ir
                šakelėmis. Štai todėl taip svarbu pasirinkti tinkamą maistą.
                {<br />}
                Triušio pagrindinis maistas turėtų būti granulės – žolelių,
                daržovių ir žolės mišinys.{<br />} Maistas su grūdais naudojamas
                mėsiniams triušiukams priaugti svorio. atkreipti į tai dėmesį
                rinkdamiesi maistą savo augintiniui.{<br />}
                Šeriant triušius geriausia laikytis rėžimo ir jų racioną turi
                sudaryti 80% šienas, granuliuotas maistas 10%, šviežios daržovės
                ir vaisiai 10%. {<br />}Suaugę triušiai per parą suėda apie
                0,4-1 kg šieno. Lapuočių medžių šakos (obels, karklo, aviečių,
                beržo) būtinos dėl dažno dantų peraugimo.{<br />}
                Morkos yra labai vertingas pašaras, svarbu jų nepadauginti.
                {<br />}
                Retkarčiais triušiams galima duoti petražolių, krapų salierų,
                bananų, aviečių, moliūgų. Paprastai šakniavaisiai duodami žiemą,
                kai nėra žaliųjų pašarų.
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                Patartina vengti abrikosų, rugiagėlių, akacijų, begonijų, vyšnių
                uogų ir lapų, dumblių, gvazdikų, garstyčių, hiacintų, irisų,
                figmedžių, laueo lapų, kanapių, aguonų, saulučių, narcizų,
                pomidorų lapų, snieguolių, chrizantemų, našlaičių, tulpių,
                citrusinių vaisių.{<br />} Miusli tipo mityba (mišinysi š žolių,
                kukurūzų, džiovintų vaisių ir daržovių, riešutų, avižinių
                dribsnių) yra per riebi triušiui.{<br />} Bulvių, burokėlių ir
                jų lapai gali sukelti viduriavimą.{<br />} Tokia dieta gali
                privesti prie kepenų suriebėjimo.{<br />} Kopūstai pučia
                vidurius, per didelis kiekis obuolių taip pat gali sukelti
                vidurių pūtimą. Sausame pašare neturėtų būti grūdų, džiovintų
                vaisių, riešutų.{<br />}
                Kreida, kalcis ar druska – sukelia inkstuose akmenis.
              </p>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                Dantų peraugimas – tai gali būti dėl netinkamo maitinimo ar
                genetikos. Be veterinaro pagalbos patys galite apžiūrėti tik
                priekinius dantis, galinių dantų apžiūrai reikia spec.
                žiodiklių, kuriuos turi tik gydytojas besispecializuojantis
                tokiuose gyvūnuose. {<br />}
                Kirpti dantų nerekomenduojama tik dildinti. Tai turėtų daryti
                tik veterinarijos gydytojas.{<br />}
                Nagų peraugimas gresia jų neprižiūrint, jeigu bijote patys juos
                nukirpti kreipkitės į vet. gydytoją.{<br />}
                Nustojus maitintis ar pasidarius vangiam – kuo skubiau kreiptis
                į gydytoją.
              </p>
              <p>
                Viduriavimas, nesituštinimas, pakitusi išmatų spalva, šie
                požymiai gali indikuoti apie rimtas augintinio ligas.{<br />}
                Virškinimo sutrikimai gali atsirasti ir dėl per staigiai
                pakeisto mitybos raciono, aplinkos pokyčių.{<br />}
                Infekcinis rinitas. Paprasčiau tariant – sloga. Iš nosies teka
                išskyros, triušis dažnai čiaudi, pasunkėja kvėpavimas. Negydoma
                gali komplikuotis.{<br />}
                Konjuktyvitas. Triušio akys parausta, teka ašaros, neretai
                atsiranda pūlingos išskyros.{<br />}
                Niežai . Sukeliami erkių, matoma suprastėjusi kailio kokybė, jis
                neblizga, plinka, oda pleiskanoja, triušis dažnai kasosi.
                {<br />}
                Pododermatitas. Tai yra pėdučių uždegimas, laikant triušį ant
                tinklinių metalinių grindų atsiranda įtrūkimai ir opos,
                triušelis tampa nervingas, blogai ėda, sunkiai vaikšto.{<br />}
                Grybas – tai labai užkrečiama liga. Pastebėjus ant kūno, ausų ar
                snukučio odos pakitimus, kuo skubiau vykyte pas veterinarą.
                {<br />}
                Saulės, karščio smūgis. Triušis vangus, guli ant šono, atsiranda
                spazmai, padažnėja kvėpavimas.{<br />}
                Pastebėjus šiuos simptomus, būtina triušį vėsinti.
              </p>
              <p>
                Jeigu pastebėjote nors vieną iš šių negalavimų kuo skubiau
                kreipkitės į veterinarijos gydytoją. Net kelių valandų delsimas
                jūsų augintiniui gali baigtis mirtimi.
              </p>
              <p>
                Daugiau informacijos galite rasti Facebook puslapyje:{" "}
                <a href="https://www.facebook.com/maziejitriusiukai">
                  https://www.facebook.com/maziejitriusiukai
                </a>
              </p>
            </div>
            <div id="prieziura" ref={(el) => (elementsRef.current[6] = el)}>
              <h2>Priežiūros atmintinė</h2>
              <div className="memoContainer">
                <img
                  src="./img/animalCare/triusioAtmintine1.png"
                  alt="atmintine"
                ></img>
                <img
                  src="./img/animalCare/triusioAtmintine2.png"
                  alt="atmintine"
                ></img>
                <img
                  src="./img/animalCare/triusioAtmintine1.png"
                  alt="atmintine"
                ></img>
                <img
                  src="./img/animalCare/triusioAtmintine1.png"
                  alt="atmintine"
                ></img>
                <img
                  src="./img/animalCare/triusioAtmintine1.png"
                  alt="atmintine"
                ></img>
                <img
                  src="./img/animalCare/triusioAtmintine1.png"
                  alt="atmintine"
                ></img>
              </div>
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
              <p
                onClick={() => handleClick("prieziura")}
                className={prieziuraVisible && "active"}
              >
                - Priežiūros Atmintinė
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

// struktura, kad prisitaikytu stiliai is animalCareContentContainer.scss
// <div className="animalCareContentContainer">
//    <div className="innerWrapper">
//        <div className="animalCareContent">
//            naudoti <img> <h2> ir <p>
//            Content
//        </div>
//        <div className="animalCareSideBar">
//            Sidebar
//        </div>
//    </div>
// </div>
