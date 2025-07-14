import React from "react";
import "./gpmSupport.scss";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer.jsx";
import AskedQuestionCard from "../../components/askedQuestionCard/AskedQuestionCard.jsx";
export default function GPMSupport() {
  const kaipPildyti =
    "1 – Jūsų asmens kodas \n3V – Jūsų vardas\n3P – Jūsų pavardė\nĮrašykite savo telefono numerį ir el. pašto adresą, kad esant poreikiui, VMI galėtų su Jumis susisiekti.\n5 – Mokestinis laikotarpis (2021)\n6S Mokesčio dalį skiriu paramos gavėjams – V\nE1 – 2\nE2 –  305634919\nE3 – PARAMA\nE4 – 1,2 arba 0,6 (jeigu EGZOSTIC SOS skiriate 1,2 proc. )\nE5 – 2025 (jeigu paramą EGZOTIC SOS planuojate skirti 5 metus iš eilės) arba 2021 (jeigu paramą EGZOTIC SOS skiriate tik už 2021 mokestinius metus)\nVšĮ „EGZOTICSOS“\nKodas 305634919\nKiekvienais metais galima keisti paramos gavėją (us) net jei buvote pasirinkę paramos gavėją (us) 5 metų laikotarpiui.";
  const kaipDeklaruoti =
    "1. Prisijunkite prie Elektroninio deklaravimo sistemos EDS, adresu deklaravimas.vmi.lt (arba paspaudę mygtuką viršuje). \n2. Pasirinkite „Deklaravimas“ -> „Pildyti formą“. \n3. Pasirinkite „Prašymas skirti paramą“ arba paieškoje raskite formą, kurios kodas FR0512. \n4. Atverkite ir užpildykite formą FR0512 v.4. \n5. Pasirinkite „Pateikti deklaraciją“.";

  const formatedKaipPildyti = kaipPildyti.split("\n");
  const formatedKaipDeklaruoti = kaipDeklaruoti.split("\n");
  return (
    <div className="gpmSupportPage">
      <NavBar />
      <div className="GPMSupportHeader">
        <div className="innerWrapper">
          <h1>Skirk 1,2 % GPM paramos</h1>
          <p>
            1,2% GPM paramą galite skirti nuo 2025 m. sausio 1 d. iki 2025 m.
            gegužės 2 d. užpildant prašymą elektroniniu būdu per VMI
            elektroninio deklaravimo sistemą (EDS). Instrukciją rasite žemiau.
          </p>
          <img
            src="./img/papuga.png"
            className="parrotImage"
            alt="parrot"
          ></img>
          <img
            src="./img/hearts.png"
            className="heartsImage"
            alt="hearts"
          ></img>
        </div>
      </div>
      <div className="whyGiveGPM">
        <div className="innerWrapper">
          <h4>Ši parama mums yra labai reikšminga</h4>
          <h2>Kodėl turėtumėte skirti 1,2% GPM paramos?</h2>
          <p>
            Gyventojų skiriama 1,2 proc. GPM parama yra viena iš pagrindinių
            EGZOTIC SOS pragyvenimo šaltinių. Antra — žmonių aukos!
          </p>
          <ul>
            <li>
              Globotinių veterinarinės išlaidos kartais siekia dviejų nulių
              sumas, ir tik 1,2 proc jas padeda padengti.
            </li>
            <li>
              Mūsų svajonė yra patalpos, kuriose galėtume užtikrinti visas
              reikiamas sąlygas savo globotiniams.
            </li>
            <li>
              Mūsų didžiausia vizija yra dovanoti jau kastruotus gyvūnus ,
              kuriems tai yra reikalinga.
            </li>
          </ul>
          <p>
            Jūsų sprendimas skirti 1.2 proc GPM, gali užtikrinti geresnį rytojų
            likimo nuskriaustiems gyvūnams. Prisidėkite prie mūsų vizijos net
            neišeidami iš namų. Mes ir mūsų globotiniai būsime jums labai
            dėkingi! ♥️
          </p>
        </div>
      </div>
      <div className="callUsContainer">
        <h1>Tavo 1,2% GPM paramos dėka pavyko išgelbėti virš 1000 gyvūnų!</h1>
        <button>Skirk 1,2 % Jau dabar!</button>
      </div>
      <div className="questionsAboutGPM">
        <div className="innerWrapper">
          <h4>Apie GPM skyrimą</h4>
          <h2>Dažniausiai užduodami klausimai</h2>
          <AskedQuestionCard
            question="Kas yra 1,2 proc. GPM?"
            answer="Lietuvos įstatymų numatyta tvarka, kiekvienas dirbantysis nuo savo uždirbtų pajamų moka 20 proc. gyventojų pajamų mokestį (GPM). Kiekvienas dirbantis asmuo nuo minėtų dvidešimties procentų gali skirti 1,2 proc. GPM pasirinktam paramos gavėjui ir taip prisidėti prie jo tikslų ir darbų įgyvendinimo. Jei šios paramos asmuo nusprendžia neskirti paramos gavėjui, 1,2 proc. GPM keliauja į bendrą valstybės biudžetą."
          />
          <AskedQuestionCard
            question="KAIP DEKLARUOTI 1.2 PROC GPM?"
            answer={formatedKaipDeklaruoti}
          />
          <AskedQuestionCard
            question="KAIP PILDYTI FORMĄ?"
            answer={formatedKaipPildyti}
          />
          <AskedQuestionCard
            question="! SVARBU ŽINOTI !"
            answer="Tai labai priklauso nuo savanorystės krypties, kaikurioms sritims kaip marketingas būtų gerai, kad žmogus jau turėtų tos srities žinių. Bet yra ir kitų savanoriavimo krypčių kuriems nereikia specialių įgūdžių kaip , pvz., gyvūnėlių priežiūroje, edukacijų dalyvavimuose."
          />
          <AskedQuestionCard
            question="Ar galiu skirti GPM dalį keliems paramos gavėjams?"
            answer="Taip, skirdami 1,2 proc. GPM dalį, galite pasirinkti, kokią procento dalį skirti vieniems ar kitiems paramos gavėjams."
          />
          <AskedQuestionCard
            question="JEIGU NIEKAM NESKIRIATE 1,2 PROC ?"
            answer="Niekam neskyrus ši paramos suma grįš į bendrą valstybės biudžetą."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
