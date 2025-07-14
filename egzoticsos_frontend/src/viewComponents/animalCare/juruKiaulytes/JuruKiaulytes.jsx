import React, { useRef, useEffect, useState } from "react";
import "./juruKiaulytes.scss";
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
export default function JuruKiaulytes({ state }) {
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
    <div className="juruKiaulytesPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/juruKiaulyte1.jpg"
              alt="triusis"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>
                Jūrų kiaulytės yra ramaus būdo augintiniai, jie gana greit
                prisiriša prie šeimininko.
                <br /> Gyvenimo trukmė: apie 6-8 metų.
                <br /> Vidutinis jūrų kiaulytės svoris – 1–1,8 kg.
              </p>
              <p>
                Rekomenduojama laikyti tos pačios lyties nemažiau kaip po 2
                augintinius.{" "}
              </p>
            </div>
            <UsefullFact
              message={
                " Jūrų kiaulytės bendrauja su žmonėmis ir kitomis kiaulytėmis per įvairius garsus, įskaitant gūžimą, švilpimą ir čiulpimą. Skirtingi garsai gali reikšti skirtingas emocijas ir poreikius."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Jūrų kiaulyčių lytį galima nustatyti vizualiai bei apčiuopiant
                pirštais.{" "}
              </p>
              <p>
                Patelė: vizualiai lytiniai organai primena „Y“ raidę, yra šiek
                tiek įgaubti.
              </p>
              <p>
                Patinas: vizualiai lytiniai organai primena „i“ raidę. Švelniai
                pirštais paspaudus virš lytinių organų išlenda patino varpa.
              </p>
            </div>
            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Vienos jūrų kiaulytės narvelis turėtų būti nuo 1 metro ilgio, 2
                jūros kiaulyčių nuo 120 cm, kad būtų pakankamai erdvus. Aptvaras
                ar narvas neturi būti aukštas , jos ne laipioja.
                <br />
                Tinkamų narvų galite rasti – skelbimo portaluose, gyvūnų prekių
                parduotuvėse. Tik turėkite omenyje, kad dažnai prekybininkai
                siūlo tai ką turi prekyboje, tačiau tai nereiškia, kad jūsų
                augintiniui tai tinkama.
              </p>
              <p>
                Norint užtikrinti švarą ir gerą kvapą, narvelį reikėtų tvarkyti
                kasdien. Dažnai jos nebūna tvarkingos ir tuštinasi ten kur miega
                ar kur valgo šieną. Tvarkos palaikymas gali būti sudėtingas, nes
                tvarką jos pasidaro pagal save.
              </p>
              <p>
                Patogiausia narvelio dugną iškloti stambiomis medžio drožlėmis
                ar galite rinktis presuotų granulių kraikus, o ant viršaus
                uždėti guminį vonios kilimėlį.
                <br />
                Rinkdamiesi tokį kraiką graužikui, atsižvelkite į tai, iš ko
                tiksliai jie pagaminti. Geriau rinktis lapuočių medžių granules
                ar drožlias, nes spygliuočių skiedrose esantys aliejai gali būti
                nuodingi augintiniui ir turi specifinį kvapą.
                <br />
                Naudojama ir daugkartinės palutes ar popierinį kraiką (stebėkite
                ar nevalgo).
                <br />
                Popieriniai kraikai – yra gaminami iš celiuliozės pluošto, dėl
                to yra visiškai natūralūs. Jie puikiai sugeria kvapą ir skystį.
              </p>
              <p>
                Jūrų kiaulytėms galite išrinkti medinių žaislų, pavyzdžiui,
                kamuoliuką arba ritinį su varpeliu. Toks žaislas bus ne tik
                nekenksmingas, bet ir augintiniui suteiks daug džiaugsmo. Taip
                pat žaidimams labai tinka kamuoliukas, kurio viduje galima
                paslėpti skanėstą.{" "}
              </p>
              <p>
                Sudarykite sąlygas jūrų kiaulytei pasislėpti – tai gali būti
                kartoniniai ar mediniai nameliai su keliais išėjimais
                (nenaudokite namuko su vienu išėjimu, gyvūnas negalėdamas
                išlysti gali uždusti), medžiaginiai tuneliai ar tiesiog
                uždengtas kampas.
              </p>

              <p>
                <span style={{ color: "red" }}>
                  Kraikas, kurio negalima naudoti:
                </span>
              </p>
              <p>
                Jokiu būdu nenaudokite laikraščių. Juose gausu nuodingų
                medžiagų, kurios gali turėti neigiamos įtakos augintinio
                sveikatai. Vienkartines palutes jūrų kiaulytės mėgsta ragauti,
                todėl būtina stebėti, kad neprisivalgytų.
                <br />
                Kačių kraikas nėra tinkamas graužikams.
                <br />
                Geriau nenaudoti smulkių pjuvenų, nes papuolusios į akis ar
                kvėpavimo takus jos gali sukelti rimtus augintinio sveikatos
                sutrikimus.
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Jūrų kiaulytės pagrindinę raciono dalį turėtų sudaryti 50%
                specializuotas sausas ėdalas, vaisiai ir daržovės, vasara žolė.
                <br />
                Šienas privalo būti 24 val. per parą, kaip maisto racionas
                (ėdžiose)
              </p>
              <p>
                Nuolat augantiems dantims galąsti būtina duoti medžių šakelių
                (pvz., beržo, ievos, obels šakos).
                <br />
                Vitamino C po lašiuką į dieną ant žalumyno (pagal svorį) –
                kiekvieną dieną.
              </p>
              <p>Vandenį keisti kiekvieną dieną. </p>
              <p>Pašaras turėtų būti tik granuliuotas, be grūdų.</p>
              <p>
                <b>Naujo pašaro įvedimas į racioną:</b>
              </p>
              <p>
                Jokiam augintiniui maisto negalima pakeisti staiga, nes tai gali
                sukelti įvairių virškinimo sutrikimų. Prie naujo pašaro
                pratinama palaipsniui. Jūrų kiaulytės gali būti pratinamos taip:
              </p>
              <ul>
                <li>
                  pirma savaitė – 3 dalys įprasto pašaro ir viena dalis naujo
                  pašaro;{" "}
                </li>
                <li>
                  antra savaitė – 2 dalys įprasto pašaro ir 2 dalys naujo
                  pašaro;{" "}
                </li>
                <li>
                  trečia savaitė – 1 dalis įprasto pašaro ir 3 dalys naujo
                  pašaro;{" "}
                </li>
                <li>ketvirta savaitė – galima šerti vien nauju pašaru.</li>
              </ul>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                <span style={{ color: "red" }}>Netinkamas maistas:</span>
              </p>
              <ul>
                <li>Kopūstinės daržovės</li>
                <li>
                  Paprastasis brokolis bei virtos daržovės – nuo tokio tipo
                  pašaro graužikams gali pūsti pilvą bei sutrikdyti virškinimą,
                  gali pakisti išmatų konsistencija.
                </li>
                <li>
                  Šakniagumbiai – bulvės, burokėliai ir jų lapai, ridikai.
                </li>
                <li>Negalima šerti maistu nuo stalo, įvairiais saldumynais.</li>
                <li>Iceberg salotų, česnakų, svogūnų, avokado.</li>
                <li>Saldžių vaisių labai nedaug dėl cukraus.</li>
                <li>
                  Citrusiniais vaisiais – apelsinas, mandarinas, citrina, kivi,
                  avokadas.
                </li>
              </ul>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                <b>Dantų problemos.</b> Jūrų kiaulyčių, kaip ir kitų graužikų,
                dantys nuolat auga. Peraugusių dantų požymiai gali būti –
                sutrikęs gyvūno apetitas, jis neėda, tapo apatiškas, pradėjo
                kristi svoris, pastebite seilėtekį. Tokiu atveju būtinas vizitas
                pas veterinarijos gydytoją. Norint išvengti šių problemų būtina
                augintiniui duoti įvairių graužiamų skanumynų, kurie padėtų
                nudilinti dantis pvz., šienas, šakos.
                <br />
                <br />
                Nerekomenduojama kirpti dantų žirklėmis, tai gali pažeisti dantį
                (pvz., jis gali įskilti), taip pat tai skatina dantų iškrypimą.
                Pakitusi dantų augimo kryptis gali apsunkinti gyvūno
                maitinimąsi, dantys gali įaugti į žandą.
              </p>
              <p>
                <b>Pododermatitas.</b> Tai yra galūnių vidinių plaštakų ir pėdų
                odos uždegimas. Ši liga ypač dažnai pasireiškia jūrų kiaulytėms.
                Ji gali atsirasti dėl netinkamų higieninių sąlygų, prasto,
                drėgno kraiko, tinklinių vielos grindų, judėjimo trūkumo. Ligos
                požymiai – pastebimos paraudusios, patinusios pėdutės, gyvūnas
                šlubuoja, nenori vaikščioti, jei liga progresavusi, ant pėdučių
                matomos žaizdos.
                <br />
                <br />
                Taip pat dažna gyvūno šlubavimo priežastis – peraugę nagai.
                Nagus būtina profilaktiškai patrumpinti.
              </p>
              <p>
                <b>Vitamino C trūkumas.</b> Jūrų kiaulyčių organizmai patys
                negeba gaminti vitamino C, todėl jiems būtina pakankamą kiekį
                šio vitamino gauti su pašaru. Vitaminas C ypač svarbus
                vaikingoms patelėms bei jaunikliams. Esant vitamino C trūkumui
                suaugusiems gyvūnėliams ima kraujuoti dantenos, susidaro
                hemoragijos audinių ir vidaus organų paviršiuje. Jauniems
                gyvūnams ypač sutrinka kremzlinio ir kaulinio audinio
                formavimasis. Ankstyvas vitamino C trūkumo požymis, jūrų
                kiaulytės vangumas. Tokiu atveju derėtų pasitarti su
                veterinarijos gydytoju.
                <br />
                <br />
                Daržovės, turinčios daug vitamino C – špinatai, kiaulpienių
                lapai, žalioji paprika.
                <br />
                <br />
                Vaisiai, turintys daug vitamino C – obuoliai, braškės, papajos.
              </p>
              <p>
                <b>Parazitinės ligos.</b> Kaip ir kiti augintiniai, jūrų
                kiaulytės kenčia nuo parazitinių ligų. Dažniausiai sutinkami
                išoriniai parazitai – niežų erkutės, jos sukelia stiprų niežulį.
                Išorinių parazitų požymiai – suprastėja kailio kokybė, jis
                neblizga, pradeda plikti, oda pleiskanoja, gali atsirasti
                žaizdos, gyvūnas daug kasosi, yra neramus. Taip pat jūrų
                kiaulytės gali užsikrėsti vidaus parazitais – kirminais, jie
                sutrikdo gyvūno virškinimo sistemą, pašaro įsisavinimą. Vidinių
                parazitų požymiai – augintinis liesėja, tampa apatiškas,
                sutrinka jo mityba, gali pakisti išmatos. Būtina tokiais
                atvejais kreiptis į veterinarijos gydytoją.
                <br />
                <br />
                Siekiant išvengti parazitinių ligų rekomenduojama profilaktinė
                gyvūnų dehelmintizacija.
                <br />
                <br />
                Informacija paimta iš interneto.
                <br />
                <br />
                <p>
                  Daugiau informacijos galite rasti
                  <span
                    className="externalLink"
                    onClick={() =>
                      window.open(
                        "https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Fdrive%2Ffolders%2F1oR5pqS9nSQVXEy7tbXf0GCeBoAVz9FX4%3Fusp%3Dsharing%26fbclid%3DIwAR2TWS_T6akHhUWCipLdmqyb8B5ibSJ6LRUrswUUovIqszhaVtmjxenG-lw&h=AT0KqzsAVtS77T6vpaDp_x6WiexALyLbt2UqW6gTLmFA7osY1isJiTvcmJvEx-bYQo6kErlFNqxUUjVOSjLMsPOuHi9ky6zMtq5aQowozO1rIbaz7M6Uk-SqhqSlX_cd3d0G&__tn__=-UK-R&c[0]=AT3sjOyu5Zx37v-QyuCJI-Yq_-DOwBsXd4SVf4F4NDdVAHKoIn92VrPRaeFrZrQeqa3rOX5FhDalQXoQEufwH2B67Yzxuniei4BcDdLtc5IzD2qcIpfbgiumcF5ltzc3cXLbFen5o_R6Ko315_Tc0iRnSo3ljchiTzD4zv4upJP9Lqj_I2FGjA",
                        "_blank"
                      )
                    }
                  >
                    čia.
                  </span>
                </p>
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
