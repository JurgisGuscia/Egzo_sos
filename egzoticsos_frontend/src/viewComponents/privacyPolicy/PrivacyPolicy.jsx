import React from "react";
import "./privacyPolicy.scss";
import NavBar from "../../components/navBar/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";

export default function PrivacyPolicy() {
  return (
    <div className="privacyPolicyPage">
      <NavBar />
      <div className="privacyPolicyContainer">
        <div className="innerWrapper">
          <h1>Privatumo politika</h1>
          <p>
            1. Mes galime rinkti, naudoti ir saugoti žemiau nurodytą
            informaciją:
            <ul>
              <li>
                informaciją apie Jūsų apsilankymus bei naudojimąsi šia interneto
                svetaine (įskaitant Jūsų IP adresą, geografinę vietą, naršyklės
                tipą, iš kur buvote nukreiptas, lankymosi trukmę ir puslapių
                žiūrėjimų skaičių);
              </li>
              <li>
                bet kokią kitą informaciją, kurią Jūs savo pasirinkimu siunčiate
                mums.
              </li>
            </ul>
          </p>
          <p>
            2. Šioje internetinėje svetainėje yra naudojami slapukai, skirti
            užtikrinti geriausią Jūsų patirtį naršant šioje internetinėje
            svetainėje.
          </p>
          <p>
            3. Jūsų asmeniniai duomenys, pateikti šioje internetinėje
            svetainėje, bus naudojami tikslams, nurodytiems šioje privatumo
            politikoje. Mes galime naudoti Jūsų asmeninę informaciją šiems
            tikslams:
            <ul>
              <li>internetinės svetainės administravimui;</li>
              <li>
                Jūsų naršymo patirčiai gerinti, pritaikydami šią interneto
                svetainę asmeniniams poreikiams;
              </li>
              <li>
                turint Jūsų sutikimą siųsti Jums el. paštu mūsų naujienlaiškį.
                Jūs turite teisę bet kada informuoti mus, jeigu nebenorite, kad
                naujienlaiškis būtų Jums siunčiamas;
              </li>
              <li>
                trečiosioms šalims suteikti statistinę informaciją apie mūsų
                vartotojus, tačiau ši informacija nebus naudojama jokiam
                atskiram vartotojui identifikuoti;
              </li>
            </ul>
            Jūsų asmeniniai duomenys nebus teikiami jokioms trečiosioms šalims
            tiesioginės rinkodaros tikslais.
          </p>
          <p>
            4. Mes pasiliekame teisę bet kada atnaujinti šią privatumo politiką.
          </p>
          <p>
            5. Šioje interneto svetainėje yra nuorodų į kitas interneto
            svetaines. Mes nesame atsakingi už šių interneto svetainių privatumo
            politikas ar praktikas.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
