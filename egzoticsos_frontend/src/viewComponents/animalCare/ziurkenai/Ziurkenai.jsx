import React, { useRef, useEffect, useState } from "react";
import "./ziurkenai.scss";
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
export default function Ziurkenai({ state }) {
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
    <div className="ziurkenaiPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/ziurkenas1.jpg"
              alt="ziurkenas"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>
                yvenimo trukmė: 2 – 3 metai.
                <br />
                Nėštumo trukmė: nuo 14 iki 19 dienų, džiungarijos žiurkėnų iki
                30 dienų.
                <br />
                Atskirti nuo mamos: 3-4sav . Patelė maitina jauniklius 18-20
                dienų.
                <br />
                Poruotis gali : 4-6 savaičių, geriausias poravimasis nuo 4-6
                mėnesių amžiaus.
                <br />
                Atsiveda jauniklių: nuo 2 iki 12 jauniklių.
                <br />
                Nekastruojami.
              </p>
              <p>
                Žiurkėnai yra netik naktiniai gyvūnai, bet ir teritoriniai
                (sirijos ir kinijos žiurkėnus būtina laikyti po vieną – vienas
                žiurkėnas, vienas narvas.), Roborovskio ir džiungarijos
                žiurkėnai pasitaiko(nuo gimimo) , kad gyvena ir po du, tačiau
                rizika dėl susipjovimo99%( sugyvena tik skirtingų lyčių
                žiurkėnai poravimosi metu, nes jeigu patelė po atsivedimo gyvena
                ir toliau su patinu ji po kelių dienų gali ir vėl pastoti nes
                vaisingos dienos būna kas 3-5 dienas). Dažnu atveju gyvendamas
                patinėlis kartu su šeima gali papjauti savo jauniklius kaip
                konkurentus, o mama papjauti savo partnerį gindama vaikus.
                Patelė jausdama pavojų gali suėsti savo vaikus. <br />
                Tai labai aktyvūs gyvūnai, kurie nuolat būna užsiėmę kokia nors
                veikla, pavyzdžiui, gyvenamosios vietos tvarkymu, švarinimusi,
                atsargų tikrinimu, ypač mėgsta įvairius žaidimus, bėgimo ratelį
                ir smėlio vonias.
              </p>
              <p>
                <b>Veislės:</b>
              </p>
              <ol>
                <li>Džiungarijos žiurkėnai</li>
                <li>Sirijos žiurkėnai</li>
                <li>Robovorskio žiurkėnai</li>
                <li>Kinų žiurkėnai</li>
              </ol>
              <p></p>
            </div>
            <UsefullFact
              message={
                "Žiurkėnai turi gana gerą atmintį. Jie gali išmokti atlikti įvairius triukus ir pritaikyti elgesio strategijas priklausomai nuo aplinkos sąlygų."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Lytis nustatoma pagal atstumą tarp lytinių organų ir išangės.
                Pas patinėlius šis atstumas bus didelis, pas pateles jo beveik
                nebus.
              </p>
            </div>

            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Narvą/akvariumą ar daiktadiežia turi būti nuo 80 cm ilgio ir
                40-50 cm aukščio svarbu padėti tinkamoje vietoje, kur būtų ramu
                ir šilta, nebūtų tiesioginių saulės spindulių ir skersvėjo, taip
                pat kuo toliau nuo įvairių daiktų, kuriuos augintinis galėtų
                įsitraukti į narvą(grotos turi būti siaurais tarpais) .
                Žiurkėnai mėgsta įvairias slėptuves, todėl šiam gyvūnui labai
                patiks savo narvelyje turėti namelį ir minkšto pakrato 20-25 cm
                gylio. Galite įsigyti ir specialių medinių namelių ar iš šieno
                suformuotų landų, taip pat galite vienoje narvelio pusėje
                pripilti daugiau popierinio kraiko, kad žiurkėnas galėtų rausti
                urvus, o kitoje pusėje žemių. Rekomenduojamas erdvus narvas –
                kadangi žiurkėnai dažnai randa išeitį kaip pabėgti, narvas turi
                būti uždaras.
              </p>
              <p>
                Narvelyje būtina turėti gertuvę su šviežiu ir švariu vandeniu.
                Taip pat turėti ir keramikini dubenėlį maistui, tokio dubenėlio
                neįveiks graužiko dantys.
              </p>
              <p>
                Norint užtikrinti švarą ir gerą kvapą, graužiko narvelį būtina
                valyti mažiausiai kartą per savaitę. Kraiką reikia keisti gan
                retai ir ne visą iš karto, kas kelias dienas būtina išvalyti
                žiurkėno tualeto vietą, namuką.
              </p>
              <p>
                Geriau nenaudoti smulkių pjuvenų, nes jos dulka ir gali sukelti
                įvairias alergijas, kvėpavimo ligas. Popieriniai kraikai –
                patogi švaros palaikymo priemonė. Tokie kraikai yra gaminami iš
                celiuliozės pluošto, todėl yra visiškai natūralūs. Popieriniai
                kraikai puikiai sugeria kvapą ir skystį. Kraikas, pagamintas iš
                celiuliozės, yra itin minkštas, kas itin patinka graužikams,
                mėgstantiems susikurti urvelius.
              </p>
              <p>
                Kaip ir visiems graužikams, žiurkėnams labai patinka maudynės
                smėlyje. Rekomenduojama į kokį nors indą ar stiklainį pripilti
                smėlio ir apie 10 minučių leisti gyvūnėliui po jį pasivolioti(
                sirijos žiurkėnams smėlio dulkės gali sukelti akių uždegimą ) .
                Tai padeda jam išlaikyti kailį švarų ir sveiką. Svarbu nenaudoti
                smėlio su kvapikliais ir jų nemaudyti.
              </p>
              <p>
                Ratelis yra būtinas kiekvienam žiurkėnui. Džiungarijos
                žiurkėnams reikalingas bent 18cm skersmens ratelis, Sirijos
                žiurkėnams, bent 25cm.
              </p>
              <p>
                Graužikų dantys auga visą gyvenimą, todėl narvelyje turi būti
                įvairių žaislų ar medinių daiktų, kuriuos žiurkėnas galėtų
                graužti, pavyzdžiui, graikinis riešutas su kevalu – tai gyvūnui
                bus ir įdomi veikla, ir skanėstas.
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Žiurkėnams neužtenka vien pašaro pirkto iš parduotuvės, jiems
                būtinos daržovės, vaisiai, gyvūninės kilmės baltymai.
                Parduotuvės pašaras turi sudaryti apie 80proc mitybos raciono.
              </p>
              <p>
                Iš gyvūninės kilmės baltymų tinka – miltiniai kirminai, milčiai,
                liesa varškė(galima tik sirijos žiurkėnams) , virtas kiaušinis –
                tik sirijos žiurkėnams. Taip pat rekomenduojama papildomai duoti
                žiurkėnams skirtas džiovintas žoleles.
              </p>
              <p>
                Tinkami vaisiai: avietės, vyšnios, mėlynės, besėkliai obuoliai,
                bananai, gervuogės, melionas, mangas, persikas (be kauliuko),
                braškės, slyvos.
              </p>
              <p>
                Tinkamos daržovės: žirniai, špinatai, saldžiosios bulvės,
                cukinija, agurkas, kukurūzas, pupelių daigai, žiedinis kopūstas,
                brokolis, morkos, moliūgas, ropės, krapai, morkos
              </p>
              <p>
                Skanėstai: riešutai, džiuvesėliai – tik sirijos žiurkėnams,
                moliūgo sėklos, saulėgrąžų sėklos, džiovinti kukurūzai,
                avižiniai dribsniai.
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <ul>
                <li>migdolai</li>
                <li>obuolio sėklos</li>
                <li>avokadas</li>
                <li>saldumynai</li>
                <li>šokoladas</li>
                <li>konservuotas maistas</li>
                <li>vyšnių kauliukai</li>
                <li>citrinos vaisiai</li>
                <li>baklažanas</li>
                <li>česnakas</li>
                <li>svogūnų laiškai</li>
                <li>burokėliai</li>
                <li>bulvės</li>
              </ul>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                Žiurkėnai yra gan atsparūs ligoms, tačiau tam tikri ligų
                požymiai dažnai būna nepastebėti, todėl svarbu atkreipti dėmesį
                į bet kokius augintinio elgesio ar išvaizdos pokyčius.
                Pagrindiniai ligų požymiai gali būti: apetito praradimas,
                vangumas, susivėlęs kailiukas, čiaudėjimas bei išskyros iš
                nosies ar akių, švokštimas, išmatų pakitimai (spalvos,
                konsistencijos pokyčiai). Jeigu pastebėjote bet kokį negalavimą
                skubiai kreipkitės į veterinarijos gydytoją.
              </p>
              <p>
                <b>Diabetas.</b> Mažų rūšių žiurkėnai linkę į diabetą, todėl
                jiems nerekomenduojama duoti saldžių vaisių. Nerekomenduojama
                maitinti paruoštais skanėstais ant medinio pagaliuko, kurie yra
                suklijuoti medumi – taip kyla diabeto rizika. Geriau graužikams
                duoti nedidelį kiekį nelukštentų saulėgrąžų, daržovių, linų
                sėmenų, sorų sporų ar kitų natūralių skanumynų skirtų smulkioms
                papūgėlėms.
              </p>
              <p>
                Nerekomenduojama į būstą dėti mineralų bei kreidos(gauna per
                daug kalcio), nes tai gali sukelti inkstų ligas.
              </p>
              <p>
                <b>Pododermatitas (letenėlių uždegimas).</b> Dažniausiai tai
                sukelia netinkama terpė, per kietas kraikas, narvo juostos arba
                netinkama narvo higiena (drėgnas, užterštas kraikas). Tokiu
                atveju skiriamas veterinarinis gydymas.
              </p>
              <p>
                Daugiau informacijos galite rasti{" "}
                <span
                  className="externalLink"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/groups/1061591604360260/?ref=share",
                      "_blank"
                    )
                  }
                >
                  čia
                </span>{" "}
                arba{" "}
                <span
                  className="externalLink"
                  onClick={() =>
                    window.open("https://linktr.ee/ziurkenuprieziura", "_blank")
                  }
                >
                  čia
                </span>
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
