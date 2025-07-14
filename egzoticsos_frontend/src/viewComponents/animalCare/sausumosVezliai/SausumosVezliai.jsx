import React, { useRef, useEffect, useState } from "react";

import "./sausumosVezliai.scss";
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
export default function SausumosVezliai({ state }) {
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
    <div className="sausumosVezliaiPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/sausumosVezlys.jpg"
              alt="vezlys"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>
                Vėžlys skiria savo šeimininką. Vėžliai nemėgsta triukšmo,
                staigių judesių. Išgąsdintas vėžlys dažniausiai pasislepia savo
                kiaute, į vidų įtraukia galvą, kojas . Vėžliai neturi dantų, bet
                turi ypač stiprų žandikaulį. Vėžliai turi puikų regėjimą, jie
                net skiria spalvas. Vėžliai gali gyventi po vieną. Paprastai jie
                taikiai gyvena ir keliese, tačiau patinai kovoja dėl
                teritorijos, sugyvena patelės arba patinas ir patelės.{" "}
              </p>
              <p>
                Sausumos vėžlys sparčiausiai auga nuo 1 iki 5 metų (žiūrint
                pagal rūšį) , po to augimas sustoja
              </p>
              <p>
                Kaip augintiniai laikomi vėžliai išgyvena priklausomai nuo
                rūšies net iki 100 metų.
              </p>
            </div>
            <UsefullFact
              message={
                "Šarvas: Vėžlių šarvas (karapaksas) yra ne tik apsauga nuo plėšrūnų, bet ir svarbi jų kūno dalis. Šis šarvas yra susijęs su jų stuburu ir nervų sistema, todėl vėžliai jaučia prisilietimus prie savo kiauto."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Uodegos ilgis ir forma:
                <ul>
                  <li>
                    Patinai dažniausiai turi ilgesnes ir storesnes uodegas.
                    Uodegos pagrindas gali būti storesnis, o pats kloaka (išmatų
                    ir reprodukcijos anga) yra toliau nuo kūno, arčiau uodegos
                    galo.
                  </li>
                  <li>
                    Patelės turi trumpesnes ir plonesnes uodegas. Jų kloaka yra
                    arčiau kūno, arčiau šarvo krašto.
                  </li>
                </ul>
              </p>
              <p>
                Apatinis kiautas (plastronas):
                <ul>
                  <li>
                    Patinai paprastai turi šiek tiek išgaubtą arba įdubusį
                    apatinį kiautą (plastroną). Tai padeda jiems poruojantis
                    tvirčiau prisiglausti prie patelės.
                  </li>
                  <li>
                    Patelės turi lygesnį arba šiek tiek išgaubtą plastroną, nes
                    jos neturi tokio fiziologinio poreikio kaip patinai.
                  </li>
                </ul>
              </p>
              <p>
                Šarvo forma:
                <ul>
                  <li>
                    Kai kuriose rūšyse patinai gali turėti ilgesnį, siauresnį
                    arba labiau išgaubtą viršutinį šarvą (karapaksą).
                  </li>
                  <li>
                    Patelės dažniausiai turi platesnį ir didesnį šarvą, kuris
                    suteikia daugiau vietos kiaušiniams.
                  </li>
                </ul>
              </p>
              <p>
                Dydis:
                <ul>
                  <li>
                    Paprastai patelės yra didesnės nei patinai, ypač rūšyse,
                    kuriose kiaušinių dėjimui reikia daugiau vietos kūne.
                  </li>
                  <li>
                    Patinai yra mažesni ir lengvesni, nes jų pagrindinis vaidmuo
                    – judėti ir rasti pateles poravimuisi.
                  </li>
                </ul>
              </p>
              <p>
                Užpakalinės kojos ir nagai:
                <ul>
                  <li>
                    Kai kurių rūšių patinai turi ilgesnius nagus arba platesnes
                    užpakalines kojas, kurios padeda poravimosi metu.
                  </li>
                  <li>
                    Patelėms šios galūnės dažniausiai būna mažiau išvystytos.
                  </li>
                </ul>
              </p>
              <p>
                Elgesys:
                <ul>
                  <li>
                    Patinai dažnai yra agresyvesni ir gali kovoti dėl
                    teritorijos ar patelių, ypač poravimosi sezono metu. Jie
                    taip pat gali stuksenti ar stumti kitus vėžlius.
                  </li>
                  <li>
                    Patelės paprastai elgiasi ramiau, nors poravimosi sezono
                    metu taip pat gali rodyti aktyvesnį elgesį, ypač kai ieško
                    vietos kiaušiniams dėti.
                  </li>
                </ul>
              </p>
            </div>
            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Terariumas
                <ul>
                  <li>
                    Dydis: Terariumas turi būti pakankamai didelis, kad vėžlys
                    galėtų laisvai judėti. Paprastai rekomenduojama, kad
                    terariumas būtų bent 8–10 kartų ilgesnis už vėžlio kūno
                    ilgį. Didesni terariumai yra geresni, nes vėžliai mėgsta
                    tyrinėti.
                  </li>
                  <li>
                    Ventiliacija: Geras vėdinimas yra būtinas, kad būtų
                    palaikoma optimali oro kokybė. Terariume turi būti bent
                    viena ventiliuojama dalis arba tinklinės durelės.
                  </li>
                  <li>
                    Terariumo tipas: Stikliniai ar plastikiniai terariumai
                    tinka, bet svarbu užtikrinti, kad jie būtų tinkamai vėdinami
                    ir išlaikytų reikiamą temperatūrą.
                  </li>
                </ul>
              </p>
              <p>
                Temperatūra
                <ul>
                  <li>
                    Šildymo vieta: Vėžliai yra šaltakraujai gyvūnai, todėl jiems
                    būtina turėti šildymo vietą terariume. Šildymo vietos
                    temperatūra turėtų būti 30–35 °C.
                  </li>
                  <li>
                    Atvėsimo zona: Terariumo kitoje pusėje turėtų būti vėsesnė
                    vieta, kurioje temperatūra būtų apie 20–24 °C, kad vėžlys
                    galėtų reguliuoti savo kūno temperatūrą.
                  </li>
                  <li>
                    Naktinė temperatūra: Naktį temperatūra gali nukristi iki
                    18–22 °C, priklausomai nuo rūšies.
                  </li>
                </ul>
              </p>
              <p>
                Apšvietimas
                <ul>
                  <li>
                    UVB lempos: UVB apšvietimas yra būtinas, kad vėžlys galėtų
                    gaminti vitaminą D3, kuris padeda absorbuoti kalcį. Be UVB
                    apšvietimo vėžliai gali susirgti medžiagų apykaitos kaulų
                    ligomis. UVB lempa turėtų degti apie 10–12 valandų per
                    dieną.
                  </li>
                  <li>
                    Natūrali šviesa: Jei įmanoma, svarbu vėžliui suteikti
                    galimybę būti natūralioje saulės šviesoje, bet neperkaisti.
                  </li>
                </ul>
              </p>
              <p>
                Drėgmė
                <ul>
                  <li>
                    Drėgmės lygis: Drėgmė priklauso nuo vėžlio rūšies, tačiau
                    daugumai sausumos vėžlių reikia sausesnės aplinkos. Drėgmė
                    terariume turėtų būti reguliuojama ir paprastai laikoma apie
                    40–60%. Kai kurios rūšys, pavyzdžiui, raudonpilvės vėžliai,
                    reikalauja aukštesnio drėgmės lygio (iki 80%).
                  </li>
                  <li>
                    Vandens dubuo: Vėžlys turėtų turėti seklią vandens talpą,
                    kurioje galėtų gerti ir mirkytis. Vanduo turėtų būti
                    keičiamas reguliariai.
                  </li>
                </ul>
              </p>
              <p>
                Pagrindas (substratas)
                <ul>
                  <li>
                    Natūralūs substratai: Rekomenduojama naudoti natūralius
                    substratus, tokius kaip kokosų pluoštas, dirvožemis be
                    cheminių medžiagų ar specialus vėžlių smėlis. Tai padeda
                    vėžliui jaustis natūraliau ir kartais jis gali net kasti
                    duobes.
                  </li>
                  <li>
                    Dulkėtų substratų vengimas: Smulkūs arba dulkėti substratai,
                    pavyzdžiui, smėlis ar pjuvenos, gali būti kenksmingi, nes
                    vėžlys gali jų įkvėpti arba netyčia suvalgyti.
                  </li>
                </ul>
              </p>
              <p>
                Higiena
                <ul>
                  <li>
                    Švaros palaikymas: Terariumo pagrindas turėtų būti
                    reguliariai valomas, kad būtų išvengta bakterijų kaupimosi.
                    Reikia reguliariai valyti vėžlio vandens indą ir pašalinti
                    likusį maistą.
                  </li>
                  <li>
                    Vėžlio vonelės: Retkarčiais galima suteikti vėžliui šilto
                    vandens vonelę (apie 25–30 °C), kuri padeda jiems išlaikyti
                    higieną ir apsaugo nuo dehidratacijos.
                  </li>
                </ul>
              </p>
              <p>
                Higiena
                <ul>
                  <li>
                    Švaros palaikymas: Terariumo pagrindas turėtų būti
                    reguliariai valomas, kad būtų išvengta bakterijų kaupimosi.
                    Reikia reguliariai valyti vėžlio vandens indą ir pašalinti
                    likusį maistą.
                  </li>
                  <li>
                    Vėžlio vonelės: Retkarčiais galima suteikti vėžliui šilto
                    vandens vonelę (apie 25–30 °C), kuri padeda jiems išlaikyti
                    higieną ir apsaugo nuo dehidratacijos.
                  </li>
                </ul>
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Augalinė mityba: Dauguma sausumos vėžlių yra žolėdžiai. Jie
                turėtų gauti šviežių daržovių (pvz., lapinių daržovių, tokių
                kaip salotos, kale, pienės lapai) ir šiek tiek vaisių. Vaisiai
                turėtų būti duodami rečiau, nes per daug cukraus gali sukelti
                sveikatos problemų.
              </p>
              <p>
                Kalcio papildai: Būtina į mitybą įtraukti kalcio miltelius, ypač
                tiems vėžliams, kurie gyvena nelaisvėje. Tai padeda išvengti
                kalcio trūkumo ir kaulų ligų.
              </p>
              <p>
                Vanduo: Vėžlys turėtų turėti nuolatinę prieigą prie švaraus
                vandens, kuriame jis gali gerti ir mirkytis.
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                <ul>
                  <li>Vaisiai su dideliu cukraus kiekiu</li>
                  <li>Citrusiniai vaisiai</li>
                  <li>Gyvuliniai baltymai</li>
                  <li>Augalai ir daržovės su oksalatais ir fitino rūgštimi</li>
                  <li>Kopūstinės daržovės</li>
                  <li>Pieno produktai</li>
                  <li>Krakmolingos ir perdirbtos daržovės</li>
                  <li>Nuodingi augalai</li>
                  <li>Grūdai ir ankštiniai</li>
                  <li>Žolės su pesticidais ar herbicidais</li>
                </ul>
              </p>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                <b>Medžiagų apykaitos kaulų liga (MBD)</b>
                <ul>
                  <li>
                    Priežastis: Dažniausiai atsiranda dėl kalcio trūkumo,
                    vitamino D3 trūkumo arba netinkamo kalcio ir fosforo
                    santykio maiste. Tai gali atsitikti, jei vėžlys negauna
                    pakankamai UVB šviesos, kuri reikalinga kalcio
                    pasisavinimui.
                  </li>
                  <li>
                    Simptomai: Minkšti, deformuoti kaulai, plokščias ar įdubęs
                    kiautas, lūžiai, raumenų drebulys, letargija.
                  </li>
                  <li>
                    Gydymas: Kalcio papildai, UVB apšvietimas, dieta su tinkamu
                    kalcio ir fosforo santykiu. Veterinarinė pagalba būtina.
                  </li>
                </ul>
              </p>
              <p>
                <b>Kiauto infekcijos</b>
                <ul>
                  <li>
                    Priežastis: Bakterijos ar grybai, dažniausiai dėl netinkamos
                    higienos ar per didelės drėgmės terariume.
                  </li>
                  <li>
                    Simptomai: Minkštos, supuvusios ar pleiskanojančios kiauto
                    dalys, žaizdos, išskyros ar nemalonus kvapas.
                  </li>
                  <li>
                    Gydymas: Žaizdų valymas, antibakteriniai ar antigrybeliniai
                    tepalai, veterinarinė priežiūra.
                  </li>
                </ul>
              </p>
              <p>
                <b>Virškinimo sistemos problemos</b>
                <ul>
                  <li>
                    Priežastis: Netinkama mityba, per mažai skaidulų ar per daug
                    baltymų, infekcijos.
                  </li>
                  <li>
                    Simptomai: Vidurių užkietėjimas, diarėja, išsipūtęs pilvas,
                    apetito praradimas.
                  </li>
                  <li>
                    Gydymas: Dietos korekcija, daugiau skaidulų, užtikrinant
                    tinkamą hidrataciją. Jei įtariama infekcija, būtina
                    veterinaro pagalba.
                  </li>
                </ul>
              </p>
              <p>
                <b>Kvėpavimo takų infekcijos</b>
                <ul>
                  <li>
                    Priežastis: Šaltis, drėgmės trūkumas arba netinkamas
                    temperatūros ir drėgmės balansas. Virusai, bakterijos ar
                    grybai taip pat gali būti priežastimi.
                  </li>
                  <li>
                    Simptomai: Šnervių išskyros, švokštimas, sunkus kvėpavimas,
                    burnos atvėrimas kvėpuojant, apetito praradimas.
                  </li>
                  <li>
                    Gydymas: Antibiotikai ar antivirusiniai vaistai, šiltesnė
                    aplinka, tinkamas terariumo mikroklimatas.
                  </li>
                </ul>
              </p>
              <p>
                <b>Akių problemos</b>
                <ul>
                  <li>
                    Priežastis: Netinkama dieta (pvz., vitamino A trūkumas),
                    nešvarumai terariume, infekcijos.
                  </li>
                  <li>
                    Simptomai: Patinusios ar paraudusios akys, akies išskyros,
                    vėžlio akių užmerkimas, regos problemos.
                  </li>
                  <li>
                    Gydymas: Vitamino A papildai, akies plovimas, antibiotikų
                    lašai, aplinkos higienos pagerinimas.
                  </li>
                </ul>
              </p>
              <p>
                <b>Dehidratacija</b>
                <ul>
                  <li>
                    Priežastis: Nepakankamas vandens vartojimas arba per sausa
                    aplinka.
                  </li>
                  <li>
                    Simptomai: Susiraukšlėjęs oda, įdubęs akis, letargija,
                    sumažėjęs šlapimo kiekis, kieti išmatos.
                  </li>
                  <li>
                    Gydymas: Daugiau vandens, šiltos vonios, tinkama drėgmės
                    palaikymas terariume.
                  </li>
                </ul>
              </p>
              <p>
                <b>Kiaušidžių ligos (moteriškos vėžlių problemos)</b>
                <ul>
                  <li>
                    Priežastis: Kiaušinių susilaikymas ar kiaušidžių infekcijos,
                    dažnai dėl netinkamų sąlygų kiaušinių dėjimui arba mitybos
                    trūkumų.
                  </li>
                  <li>
                    Simptomai: Apetito praradimas, padidėjęs pilvas, sunkumai
                    dedant kiaušinius, letargija.
                  </li>
                  <li>
                    Gydymas: Veterinarinė pagalba, kartais reikalinga chirurginė
                    intervencija.
                  </li>
                </ul>
              </p>
              <p>
                <b>Parazitai</b>
                <ul>
                  <li>
                    Priežastis: Vidaus ar išorės parazitai, kurie gali patekti į
                    vėžlio organizmą per užterštą maistą, vandenį ar netinkamai
                    prižiūrimą aplinką.
                  </li>
                  <li>
                    Simptomai: Viduriavimas, svorio kritimas, sumažėjęs
                    apetitas, odos problemos (pvz., erkės ar utėlės ant odos).
                  </li>
                  <li>
                    Gydymas: Antiparazitiniai vaistai, terariumo dezinfekcija.
                  </li>
                </ul>
              </p>
              <p>
                <b>Podagra</b>
                <ul>
                  <li>
                    Priežastis: Per didelis baltymų vartojimas arba inkstų
                    veiklos sutrikimai, kurie lemia šlapimo rūgšties kristalų
                    kaupimąsi sąnariuose.
                  </li>
                  <li>
                    Simptomai: Patinę sąnariai, skausmas judant, letargija.
                  </li>
                  <li>
                    Gydymas: Baltymų sumažinimas dietoje, veterinarinė
                    priežiūra.
                  </li>
                </ul>
              </p>
              <p>
                <b>Burnos puvimas (stomatitas)</b>
                <ul>
                  <li>
                    Priežastis: Bakterinė infekcija, dažniausiai dėl burnos
                    sužalojimo ar silpnos imuninės sistemos.
                  </li>
                  <li>
                    Simptomai: Patinusi burna, opos burnoje, išskyros, apetito
                    praradimas.
                  </li>
                  <li>
                    Gydymas: Burnos valymas, antibakteriniai vaistai, veterinaro
                    priežiūra.
                  </li>
                </ul>
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
