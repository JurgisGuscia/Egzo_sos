import React, { useRef, useEffect, useState } from "react";

import "./pauksciai.scss";
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
export default function Pauksciai({ state }) {
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
    <div className="pauksciaiPage">
      <NavBar />
      <CarePageHeader info={headerInfo} />
      <div className="animalCareContentContainer">
        <div className="innerWrapper">
          <div className="animalCareContent">
            <img
              className="headerImage"
              src="./img/animalCare/pauksciai.jpg"
              alt="triusis"
            ></img>
            <div id="bendra" ref={(el) => (elementsRef.current[0] = el)}>
              <h2>Bendra informacija</h2>
              <p>
                <b>Rūšys:</b>
              </p>
              <ul>
                <li>
                  <b>Kanarėlė</b> – kikilinių šeimos paukštis, kūnas 12-14cm
                  ilgio. Patino nugara geltonai žalia su juodais brūkšneliais,
                  krūtinė ir gerklė geltonos. Patelė žalsva. Kanarėlės patelė
                  vidutiniškai gyvena 6 – 10 metų.{" "}
                </li>
                <div className="imageWrapper">
                  <img
                    src="./img/animalCare/kanarele.png"
                    alt="gyvaciu lyties nustatymas"
                  />
                </div>
                <li>
                  <b>Banguotoji papūgėlė</b> – Kūno ilgis: 18–24 cm, uodegos:
                  8–12 cm, svoris: 40–50 g, gyvenimo trukmė: 12–14 m. Ant
                  nugaros turi trumpas plunksnas su bangelių ornamentais. Gali
                  būti įvairių spalvų – žalios, geltonos, mėlynos, baltos –
                  dažniausiai būna kelių spalvų, įvairiausių atspalvių.
                  Suaugusias banguotąsias papūgėles galima lengvai atskirti
                  pagal nosies spalvą (virš snapo): patinėlių taip vadinamoji
                  vaškinė oda yra mėlynos spalvos, o patelių – šviesiai rudos.
                </li>
                <div className="imageWrapper">
                  <img
                    src="./img/animalCare/banguotojiPapugele.png"
                    alt="gyvaciu lyties nustatymas"
                  />
                </div>
                <li>
                  <b>Nimfinė papūgėlė</b> – Kūnas 30-33 cm, uodega – 14-16 cm
                  ilgio; svoris – apie 90 g. Gyvenimo trukmė iki 20 metų.
                  Būdingiausi požymiai yra gana ilgas kuodas ir ilga
                  nusmailėjusi uodega. Plunksnos pilkos su baltomis dėmėmis ant
                  sparnų, kuodai geltoni. Gamtinių patinų ir patelių plunksnų
                  spalva skiriasi – patinų plunksnų spalva ryškesnė. Tačiau yra
                  išveista labai daug spalvinių formų – perlinės, margos,
                  geltonos, baltos ir baltažandės, šitų spalvinių formų lytis
                  atskirti labai sunku.{" "}
                </li>
                <div className="imageWrapper">
                  <img
                    src="./img/animalCare/nimfinePapuga.png"
                    alt="gyvaciu lyties nustatymas"
                  />
                </div>
                <li>
                  <b>Zebrinės amadinos</b> – ilgis – 10 cm, vidutinis amžius – 5
                  – 8 metai. Būna įvairių spalvų: gelsvai rudos, baltos
                  kaštoniniais šonais, sidabrinės, kreminės. Lyčių skirtumai:
                  patinėlių krūtinė dažniausiai skersai dryžuota, snapas
                  raudonas, skruostai rausvai geltoni arba juodi; patelės ant
                  krūtinėlės neturi dryžių ir snapo raudonis blankesnis. Balti
                  amadinai lyties skirtumas tik pagal snapo spalvą. Pas patinus
                  ryškesni, pas pateles blankesni.{" "}
                </li>
                <div className="imageWrapper">
                  <img
                    src="./img/animalCare/zebrinesAmadinos.png"
                    alt="gyvaciu lyties nustatymas"
                  />
                </div>
                <li>
                  <b>Žako papūga</b> – kitaip dar vadinama pilkąja papūga.
                  Ilgis: 33 cm, gyvenimo trukmė: 50–80 metų nelaisvėje, svoris:
                  500g. ŽAKO papūgų yra dvi rūšys – raudonuodegis( plunksnos yra
                  šviesiai pilkos spalvos, pakaušio ir pilvo srityje plunksnos
                  yra šviesesnės arba baltos. Snapas juodas. Uodegos plunksnos
                  yra ryskiai raudonos spalvos) ir bordouodegis žakas( tamsiai
                  pilkos spalvos, su bordinę uodega ir yra mažesnis už
                  raudonuodegi žaka) . Amžių galima nustatyti pagal akies
                  rainelę: jauniklio iki devynių mėnesių akies rainelė būna
                  tamsi, beveik juoda, nuo 9 mėn. rainelė pradeda šviesėti, kol
                  galiausiai tampa šviesiai geltona.
                </li>
                <div className="imageWrapper">
                  <img
                    src="./img/animalCare/zakoPapuga.png"
                    alt="gyvaciu lyties nustatymas"
                  />
                </div>
                <li>
                  <b>Kakadu</b> – kūnas nuo 30 iki 70 cm ilgio, gyvenimo trukmė
                  – 60-80 metų. Būdinga balta, juoda, rožinė ir geltona spalva.
                  Patinų ir patelių spalva vienoda. Suaugusių Patelių akys
                  šviesios, patinu – tamsios.{" "}
                </li>
                <div className="imageWrapper">
                  <img
                    src="./img/animalCare/kakadu.png"
                    alt="gyvaciu lyties nustatymas"
                  />
                </div>
                <li>
                  <b>Ara</b> – yra nuo mažų ( ara nobilis -) iki labai didelių,
                  kurios yra pačios dydžiausios iš papūgų šeimos . Turinčios
                  žalią, raudoną, mėlyną ir geltoną plunksnų dangą. Patinai,
                  patelės ir jaunikliai beveik vienodos spalvos. Kūnas iki 95 cm
                  ilgio. Gali išgyventi iki 80-100 metų. Pasaulyje yra apie 14 –
                  15 arų rūšių.
                </li>
                <div className="imageWrapper">
                  <img
                    src="./img/animalCare/ara.png"
                    alt="gyvaciu lyties nustatymas"
                  />
                </div>
                <li>
                  <b>Eklektusas.</b> Kūnas apie 35cm ilgio, svoris – apie 450g,
                  gyvenimo trukmė apie 30m. iš kitų papūgų išsiskiria tuo, jog
                  patinėliai ir patelės ryškiai išsiskiria savo spalvomis.
                  Patinėliai ryškiai žalios spalvos su gelsvu atspalviu galvos
                  srityje, sparnai ir uodega su raudonomis bei mėlynomis
                  plunksnomis. Patelės ryškiai raudonos su tamsesniu atspalviu
                  nugaros ir sparnų srityje, sparnų plunksnos turi violetinių
                  bei mėlynų atspalvių, uodegoje matomi gelsvai oranžiniai
                  atspalviai. Taip pat patinų snapas oranžinis, o patelių juodos
                  spalvos
                </li>
                <div className="imageWrapper">
                  <img
                    src="./img/animalCare/eklektusas.png"
                    alt="gyvaciu lyties nustatymas"
                  />
                </div>
              </ul>
            </div>
            <UsefullFact
              message={
                "Kai kurios paukščių rūšys, kaip kad varnos ir papūgos, yra itin protingos. Varnos gali spręsti sudėtingas užduotis ir naudoti įrankius, o kai kurios papūgos gali išmokti daug žodžių ir frazių."
              }
            />
            <div id="lytis" ref={(el) => (elementsRef.current[1] = el)}>
              <h2>Lyties nustatymas</h2>
              <p>
                Paukščių lyties nustatymas gali būti sudėtingas, nes daugumos
                rūšių patinai ir patelės atrodo labai panašiai.
              </p>
              <p>
                <b>Galimi lyties nustatymo būdai:</b>
              </p>
              <ul>
                <li>
                  Dvimorfizmas: Kai kurioms paukščių rūšims būdingas lytinis
                  dimorfizmas, kai patinai ir patelės turi skirtingą išvaizdą.
                  Pavyzdžiui, povų patinai turi įspūdingas, spalvingas uodegos
                  plunksnas, o patelės yra žymiai kuklesnės. Kitose rūšyse, kaip
                  kad kanarėlės ar papūgos, patinai dažniausiai yra ryškesnių
                  spalvų nei patelės.
                </li>
                <li>
                  Elgesys: Paukščių elgesys taip pat gali padėti nustatyti lytį.
                  Pavyzdžiui, patinai dažniausiai yra tie, kurie dainuoja, šoka
                  ar kitaip demonstruoja save norėdami pritraukti patelę. Lizdo
                  statymas taip pat gali būti indikatorius, nes kai kurios rūšys
                  turi specifinius lyties vaidmenis, susijusius su lizdo kūrimu
                  ar jauniklių priežiūra.
                </li>
                <li>
                  DNR testai: Vienas iš tiksliausių būdų nustatyti paukščio lytį
                  yra DNR testavimas. Tam reikia paimti plunksną, kraujo mėginį
                  arba lukštą iš kiaušinio, kad būtų galima ištirti genetinę
                  medžiagą laboratorijoje. Tai yra ypač naudinga rūšims, kurios
                  neturi aiškiai matomų lytinių skirtumų.
                </li>
                <li>
                  Cloakos tyrimas: Kai kurioms paukščių rūšims lytis gali būti
                  nustatoma per specialų tyrimą, kurio metu apžiūrima paukščio
                  kloaka (išorinė angos dalis, per kurią paukščiai išskiria
                  atliekas ir deda kiaušinius). Šis metodas reikalauja patirties
                  ir dažniausiai naudojamas paukščių augintojų ar veterinarų.
                </li>
                <li>
                  Kiaušinių dėjimas: Patelė yra vienintelė, kuri gali dėti
                  kiaušinius. Taigi, jei paukštis deda kiaušinius, akivaizdu,
                  kad tai patelė.
                </li>
                <li>
                  Balso ypatumai: Kai kuriose rūšyse tik patinai gali skleisti
                  tam tikrus garsus ar dainuoti. Pavyzdžiui, dauguma kanarėlių
                  patinų yra geri dainininkai, tuo tarpu patelės dainuoja retai
                  arba visai nedainuoja.
                </li>
                <li>
                  Chirurginis metodas: Retais atvejais, kai labai svarbu
                  tiksliai nustatyti lytį, gali būti atliekama laparoskopija,
                  kai paukštis trumpam užmigdomas ir atliekama nedidelė
                  operacija, kad būtų apžiūrėti jo vidaus organai
                </li>
              </ul>
            </div>
            <div id="laikymas" ref={(el) => (elementsRef.current[2] = el)}>
              <h2>Laikymo sąlygos</h2>
              <p>
                Suteikite savo augintinei patį didžiausią (kokį tik įmanoma)
                narvą. Narvelyje būdamas paukštis turi turėti galimybę laisvai
                ištiesti sparnus, laipioti ir žaisti. Narvelį reikėtų laikyti
                toliau nuo triukšmingų vietų, pavyzdžiui, televizoriaus, prie
                lango ar ten, kur nuolatos jaučiamas skersvėjis. Optimali
                laikymo temperatūra yra 15-20˚C. Patalpoje turėtų būti šviesu,
                bet derėtų vengti tiesioginių saulės spindulių, geriausia
                narvelį statyti prie sienos, taip papūgėlė jausis saugiau.
                Prijaukintas kalbančias papūgas geriausia auginti po vieną, o
                mažas ir vidutinio dydžio papūgėles, priklausomai nuo jų
                charakterio, rekomenduojama laikyti poromis arba pulkeliu
                dideliame voljere.
              </p>
              <p>
                Narvelis turėtų būti metalinis, jame įtaisytos laktelės
                paukščiams tupėti. Lesykla ir girdyklėlė turėtų būti ne po lakta
                ar žemiau jos ir kuo toliau nuo laktų( tai tinka nevisoms
                paukščių rušims) , kad į jas nepatektų išmatų. Jei dugnas nėra
                padengtas smėliu, tuomet narvelyje būtinai turi būti smėlis ar
                smulkus žvirgždas, kuris reikalingas gerai skrandžio veiklai ir
                maisto virškinimui. Lesyklėles mišiniams iš grūdų būtina labai
                kruopščiai išvalyti nuo maisto likučių ir nusausinti, kartą per
                savaitę jas būtina išplauti. Automatines gertuvėles valykite kas
                dieną, nes ant jų gali susidaryti gleivės, kurios paukščiams yra
                kenksmingos.
              </p>
              <p>
                Tam, kad papūga galėtų galąsti savo snapą ir nagus į narvą
                reikėtų įdėti šviežiai nupjautas medžio šakas. Gnaibydama tokią
                šaką papūga ne tik pagalanda snapą, bet ir gauna būtinus
                mikroelementus ir kai kuriuos vitaminus. Labiausiai tinka beržo,
                gluosnio, ąžuolo, liepos, klevo, riešutmedžio, šermukšnių,
                uosio, ievos ir nepurkštų vaismedžių šakos. Nuodingi medžiai –
                akacijų, sedulos, kukmedžio, abrikoso, alyvų, kriaušės, slyvos,
                vyšnios . Į narvelį taip pat reikia įdėti medinius žaislus,
                mineralines kreidas. Kreida – pagrindinis kalcio šaltinis,
                reikalingas kaulams, nagams bei snapui.
              </p>
              <p>
                Jei norite užimti paukštį, puiki alternatyva žaislams –
                kapstyklė. Sausas lesalas, džiovinti vaisiai, riešutai, uogos,
                soros, sėmenys; trintas molis, kreida – papildai; nedideli
                žaislai, kamščio gabaliukai – žaidimui. Privesti prie tokio
                maitinimosi būdo paukštelį reikia po truputį.
              </p>
            </div>
            <div id="mityba" ref={(el) => (elementsRef.current[3] = el)}>
              <h2>Mityba</h2>
              <p>
                Papūga turi gauti kokybiško granuliuoto maisto, vaisių,
                daržovių, riešutų. Tinkamą pašarą visuomet galima nusipirkti
                specializuotose parduotuvėse.{" "}
              </p>
              <p>
                Tinkami vaisiai – obuoliai, bananai, citrusiniai vaisiai,
                vynuogės, mangai, papajos, pasiflorai, granatai.{" "}
              </p>
              <p>
                Tinkamos daržovės – morkos, kukurūzai, šparaginės pupelės,
                burokėliai, saldžiosios/aitriosios paprikos, brokoliai,
                špinatai, pomidorai, cukinijos, kiaulpienių lapai.{" "}
              </p>
              <p>
                Jei nusprendėte paukštelį maitinti namie ruoštu pašaru,
                rekomenduojama prieš tai pasitarti su veterinarijos gydytoju dėl
                tinkamo raciono, jog gyvūnas gautų visus jam būtinus vitaminus
                bei mineralus.
              </p>
            </div>
            <div id="maistas" ref={(el) => (elementsRef.current[4] = el)}>
              <h2>Kenksmingas maistas</h2>
              <p>
                <ul>
                  <li>
                    Šokoladas: Šokolade yra teobromino ir kofeino, kurie yra
                    nuodingi paukščiams. Net ir nedideli kiekiai šokolado gali
                    sukelti vėmimą, viduriavimą, širdies ritmo sutrikimus,
                    traukulius ir mirtį.
                  </li>
                  <li>
                    Avokadas: Avokado vaisiuose, sėklose, lapuose ir žievėje yra
                    persino – cheminės medžiagos, kuri yra nuodinga daugeliui
                    paukščių. Ji gali sukelti kvėpavimo problemas, širdies
                    veiklos sutrikimus ir mirtį.
                  </li>
                  <li>
                    Kofeinas: Kava, arbata, energiniai gėrimai ir kiti kofeino
                    turintys produktai yra pavojingi paukščiams. Kofeinas gali
                    sukelti hiperaktyvumą, širdies ritmo sutrikimus, traukulius
                    ir mirtį.
                  </li>
                  <li>
                    Alkoholis: Alkoholiniai gėrimai yra labai kenksmingi
                    paukščiams, nes jų mažas kūno svoris lemia greitą
                    apsinuodijimą. Alkoholis gali paveikti paukščio
                    koordinaciją, sukelti kvėpavimo ir nervų sistemos sutrikimus
                    bei mirtį.
                  </li>
                  <li>
                    Svogūnai ir česnakai: Svogūnai, česnakai ir kitos Allium
                    šeimos daržovės gali sukelti paukščiams virškinimo
                    sutrikimus ir anemiją, o ilgalaikis vartojimas gali pažeisti
                    raudonuosius kraujo kūnelius.
                  </li>
                  <li>
                    Sūrus maistas: Sūdyti užkandžiai, tokie kaip traškučiai, yra
                    pavojingi paukščiams. Per daug druskos gali sukelti
                    dehidrataciją, inkstų veiklos sutrikimus ir net mirtį.
                  </li>
                  <li>
                    Sėklos ir duonos gaminiai: Kai kurios sėklos, pavyzdžiui,
                    obuolių sėklos, abrikosų, persikų ar vyšnių kauliukai, turi
                    cianido junginių, kurie yra nuodingi paukščiams. Be to,
                    duonos gaminiai gali būti sunkiai virškinami ir sukelti
                    virškinimo problemų, ypač jei duona yra pelėsiais užkrėsta.
                  </li>
                  <li>
                    Didesni kiekiai riešutų: Nors riešutai, ypač neapdoroti, yra
                    maistingi, kai kurie, kaip žemės riešutai, gali būti
                    užteršti aflatoksinais – nuodingomis medžiagomis, kurias
                    gamina tam tikros pelėsiai, pavojingomis paukščiams. Taip
                    pat svarbu stebėti riešutų kiekį dėl jų didelio riebalų
                    kiekio, kuris gali sukelti nutukimą.
                  </li>
                  <li>
                    Kaulavaisiai: Kai kurių vaisių, tokių kaip obuoliai,
                    abrikosai, persikai, sėklos ir kauliukai, turi cianido,
                    kuris yra nuodingas paukščiams.
                  </li>
                  <li>
                    Pieno produktai: Dauguma paukščių neturi fermentų,
                    reikalingų laktozei virškinti, todėl pieno produktai gali
                    sukelti viduriavimą ir kitus virškinimo sutrikimus.
                  </li>
                </ul>
              </p>
            </div>
            <div id="ligos" ref={(el) => (elementsRef.current[5] = el)}>
              <h2>Dažnos ligos ir negalavimai:</h2>
              <p>
                Pagrindiniai sergančios papūgėlės požymiai – mažai juda,
                plunksnos ištaršytos, sparnai šiek tiek nuleisti, galva
                prispausta prie pečių arba paslėpta po sparnu, mažai lesa, akys
                aptemusios, kvėpavimas sunkus.
              </p>
              <p>
                <b>Parazitai.</b> Jei plunksnos atrodo apgraužtos, papūgėlė gali
                turėti išorinių parazitų. Tai patikrinti galima patiesus baltą
                popieriaus lapą and narvelio dugno. Jei po nakties išmatos
                vienoje vietoje krūvelėje, tai reiškia, jog paukštis ramiai
                miega ir greičiausiai parazitų neturi. Jei išmatos pasklidusios
                po visą narvelio dugną, tai reiškia, jog paukštis buvo neramus,
                kasėsi, tai gali indikuoti užsikrėtimą parazitais. Tam, kad būtų
                teisingai ir tiksliai nustatyta virusinių, bakterinių,
                mitologinių ir parazitinių susirgimų diagnozė, būtinas specialus
                išmatų, odos, išskyrų iš nosies, burnos ertmės ir akių tyrimas,
                atliekamas veterinarijos laboratorijoje.
              </p>
              <p>
                <b>Avitaminozė.</b> Viena iš priežasčių, sukeliančių įvairaus
                pobūdžio ligas, tai netinkamas papūgėlės maitinimas. Maitinimas
                vienodo tipo lesalu (pavyzdžiui, sausais grūdais, košėmis ir
                pan.) sukelia avitaminozę. Liga pasireiškia įvairiai,
                priklausomai nuo to, kurio vitamino trūksta. Trūkstant vitamino
                A gali pasireikšti čiaudėjimas, išskyros iš nosies, akių
                patinimas, suprastėjusi plunksnų kokybė. Vitamino D trūkumas
                gali sukelti metabolinę kaulų ligą arba kaulų suminkštėjimą,
                snapo, kojų deformacijas.
              </p>
              <p>
                <b>Virškinamojo trakto sutrikimai.</b> Tai gali sukelti
                apsinuodijimas nekokybišku maistu arba druska. Pasireiškia
                apatija, padidėjęs troškulys, viduriavimas, silpnumas,
                traukuliai. Jei paukštis apsinuodijo druska reikia praplauti
                gurklį su vandeniu ir aliejumi, jei apsinuodijo kitomis
                medžiagomis, gurklys plaunamas vandeniu su jame ištirpinta
                aktyvuota anglimi. Po plovimo reikia sugirdyti krakmolo arba
                linų sėmenų nuoviro.
              </p>
              <p>
                <b>Nuplikimas, plunksnų išsipešimas.</b> Tai gali sukelti
                stiprus stresas, vitaminų, mineralinių medžiagų stoka, niežų
                erkutės.
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
