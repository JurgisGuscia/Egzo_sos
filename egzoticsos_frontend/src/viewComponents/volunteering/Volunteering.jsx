import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./volunteering.scss";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer.jsx";
import AskedQuestionCard from "../../components/askedQuestionCard/AskedQuestionCard.jsx";
export default function Volunteering() {
  const [activeHelp, setActiveHelp] = useState(1);
  return (
    <div className="volunteeringPage">
      <NavBar />
      <div className="volunteeringHeader">
        <div className="innerWrapper">
          <h1>Savanorystė</h1>
          <p>
            Prisijunk prie mūsų ir patirk šiltą jausmą, atliekant gerą darbą!
            Savanoriauk pas mums, jei myli gyvūnus, esi atsakingas ir
            rūpestingas. Mūsų prieglauda - puiki vieta praleisti laiką, įgyti
            patirties arba rinkti socialines valandas.
          </p>
          <Link to="/volunteeringForm">Pildyti paraišką</Link>
          <div className="rabbitImage"></div>
          <div className="rabbitBlurEffectContainer"></div>
        </div>
      </div>
      <div className="benefitsForVolunteeringContainer">
        <div className="innerWrapper">
          <img src="./img/papuga.png" alt="parrot"></img>
          <div className="benefitsForVolunteeringContentContainer">
            <h3>Abipusė nauda</h3>
            <h1>Kokias naudas teikia savanoriavimas?</h1>
            <p>
              Savanoriaudamas patirsi įvairių naudų tokių kaip: plėsi
              bendraminčių ratą prisidedančių prie egzotinių ir dekoratyvinių
              gyvūnų gerovės, galėsi atrasti ar patobulinti savo įgūdžius
              pasirinktoje srityje ir pan. .
            </p>
            <div className="benefitListsContainer">
              <ul>
                <li>Naujos pažintys</li>
                <li>Naujos patirtys</li>
                <li>Asmeninis augimas</li>
                <li>Savęs atradimas</li>
              </ul>
              <ul>
                <li>Naujos žinios</li>
                <li>Bendruomeniškumas</li>
                <li>Geresnė savijauta</li>
                <li>Įgūdžių tobulėjimas</li>
              </ul>
              <ul>
                <li>Kūrybiškumas</li>
                <li>Naudingai praleistas laikas</li>
                <li>Socialinė atsakomybė</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="whatWeNeed">
        <div className="innerWrapper">
          <div className="whatWeNeedLeftSide">
            <h2>Mums reikalingi savanoriai šiose veiklose:</h2>
            <p
              onClick={() => setActiveHelp(1)}
              className={activeHelp === 1 ? "activeHelp" : ""}
            >
              <span className="accentMark"></span>
              Gyvūnėlių priežiūra
            </p>
            <p
              onClick={() => setActiveHelp(2)}
              className={activeHelp === 2 ? "activeHelp" : ""}
            >
              <span className="accentMark"></span>
              Darbas su socialiniais tinklais
            </p>
            <p
              onClick={() => setActiveHelp(3)}
              className={activeHelp === 3 ? "activeHelp" : ""}
            >
              <span className="accentMark"></span>
              Dalyvavimas edukacijose, renginiuose
            </p>
            <p
              onClick={() => setActiveHelp(4)}
              className={activeHelp === 4 ? "activeHelp" : ""}
            >
              <span className="accentMark"></span>
              Laikina globa
            </p>
            <p
              onClick={() => setActiveHelp(5)}
              className={activeHelp === 5 ? "activeHelp" : ""}
            >
              <span className="accentMark"></span>
              Rėmėjų paieška
            </p>
            <p
              onClick={() => setActiveHelp(6)}
              className={activeHelp === 6 ? "activeHelp" : ""}
            >
              <span className="accentMark"></span>
              Marketingas
            </p>
            <p
              onClick={() => setActiveHelp(7)}
              className={activeHelp === 7 ? "activeHelp" : ""}
            >
              <span className="accentMark"></span>
              Kita
            </p>
          </div>
          {activeHelp === 1 && (
            <div className="whatWeNeedRightSide">
              <p>
                Tapę EgzoticSOS gyvūnų priežiūros savanoriais prisidėsite
                prižiūrint gyvūnus esančius prieglaudoje, padėsite juos
                maitinti, valyti narvus, šukuoti ar karpyti nagus.
              </p>
              <img src="./img/girl.jpg" alt="girl with a rabbit"></img>
            </div>
          )}
          {activeHelp === 2 && (
            <div className="whatWeNeedRightSide">
              <p>
                Tapę EgzoticSOS socialinių tinklų savanoriais prisidėsite rašant
                tekstus, skelbiant naujus įrašus į socialinius tinklus, kūriant
                turinį ir fotografuojant arba filmuojant gyvūnėlius. Jūsų įnašas
                padės dalintis istorijomis ir skleisti informaciją apie gyvūnų
                gerovę bei mūsų veiklą.
              </p>
              <img src="./img/kidphoto.jpg" alt="girl with a rabbit"></img>
            </div>
          )}

          {activeHelp === 3 && (
            <div className="whatWeNeedRightSide">
              <p>
                Tapę EgzoticSOS edukacijų ir renginių savanoriais padėsite
                plėtoti musų misiją edukuoti žmones apie egzotinius ir
                dekoratyvinius gyvūnus ir jų priežiūrą bei prisidėsite prie mūsų
                prieglaudos žinomumo didinimo.
              </p>
              <img src="./img/pastEvent4.jpg" alt="girl with a rabbit"></img>
            </div>
          )}

          {activeHelp === 4 && (
            <div className="whatWeNeedRightSide">
              <p>
                Tapę EgzoticSOS globėjais - savanoriais, padėsite gyvūnui,
                kuriam reikia laikinos pagalbos, jį prižiūrint, kol jis gydosi
                nuo sužeidimo, ligos arba dar nėra tinkamo amžiaus būti
                atskirtam nuo motinos. Tai reiškia laikinai priimate augintinį į
                savo namus ir suteikiate jam laikiną globą bei priežiūrą, kol
                bus galima gyvūną dovanoti ar jam bus rasta pastovi šeima arba
                globėjas.
              </p>
              <img src="./img/pastEvent3.jpg" alt="girl with a rabbit"></img>
            </div>
          )}

          {activeHelp === 5 && (
            <div className="whatWeNeedRightSide">
              <p>
                Tapę EgzoticSOS rėmėjų ieškotoju savanoriais prisidėsite ieškant
                remėjų, kurie financiškai ar kitaip paremtų ir prisidėtų prie
                mūsų veiklos. Tai gali apimti bendradarbiavimą su įmonėmis,
                organizacijomis ar netgi individualiais rėmėjais, kad būtų
                išgelbėta kuo daugiau gyvūnų.
              </p>
              <img src="./img/volunteering1.jpg" alt="girl with a rabbit"></img>
            </div>
          )}

          {activeHelp === 6 && (
            <div className="whatWeNeedRightSide">
              <p>
                Tapę EgzoticSOS marketingo savanoriais padėsite didindami
                prieglaudos žinomumui, reklamuodami ją ir užtikrindami, kad
                žmonės sužinotų apie jos veiklą bei galimybes. Tai gali apimti
                reklaminių kampanijų kūrimą, socialinių tinklų turinio kūrimą,
                organizuojant renginius, bendraujant su visuomene ir pan.
              </p>
              <img src="./img/volunteering2.jpg" alt="girl with a rabbit"></img>
            </div>
          )}

          {activeHelp === 7 && (
            <div className="whatWeNeedRightSide">
              <p>
                Tapę EgzoticSOS kitais savanoriais prisidėsite pasaugojant
                gyvūnus savo mieste, kol mes atvyksime juos pasiimti ar
                užsiimsite kita veikla, kuri nėra susijusi su nei viena iš
                aukščiau ensančių savanoriavimo krypčių.
              </p>
              <img src="./img/iguanaOnAtree.jpg" alt="girl with a rabbit"></img>
            </div>
          )}
        </div>
      </div>
      <div className="mostAskedQuestionsContainer">
        <div className="innerWrapper">
          <h3 className="mostAskedQuestionContainerH3">Apie savanorytes</h3>
          <h2>Dažniausiai užduodami klausimai</h2>
          <AskedQuestionCard
            question="Kaip tapti savanoriumi?"
            answer="Jei norite tapti mūsų prieglaudėlės savanoriu, tuomet užpildykite savanorio anketą arba parašykite mums el. laišką adresu egzoticsos@gmail.com. "
          />
          <AskedQuestionCard
            question="Ar galima savanoriauti esant kitame mieste ar šalyje ?"
            answer="Taip. Priklausomai nuo savanorystės krypties, gallima savanoriauti ir gyvenant kitame mieste ar kitoje šalyje. Mes tokių savanorių jau turime ir jie sėkmingai prisideda prie mūsų veiklos, net ir prisidėdami tik nuotoliniu būdu. Mums reikalingi savanoriai iš visos Lietuvos – tam, kad skubiais atvejais galėtų priimti gyvūnėlį tol, kol mes atvažiuosime jo pasiimti. "
          />
          <AskedQuestionCard
            question="Kiek laiko ir kaip dažnai turiu skirti savanorystei?"
            answer="Apibrėžto laiko nėra. Kiekvienas savanoris skiria tik tiek laiko, kiek jis nori ir gali, bet atsižvelgia ir į tai, kad tapęs savanoriu gauna įsipareigojimus ir atsakomybę."
          />
          <AskedQuestionCard
            question="Ar reikalinga ankstesnė patirtis ar specialūs įgūdžiai?"
            answer="Tai labai priklauso nuo savanorystės krypties, kaikurioms sritims kaip marketingas būtų gerai, kad žmogus jau turėtų tos srities žinių. Bet yra ir kitų savanoriavimo krypčių kuriems nereikia specialių įgūdžių kaip , pvz., gyvūnėlių priežiūroje, edukacijų dalyvavimuose."
          />
          <AskedQuestionCard
            question="Ar yra reikalavimų dėl savanorystės amžiaus ar kitų kriterijų?"
            answer="Savanoriais tapti gali visi asmenys, sulaukę 18 metų, o nuo 16 metų – su tėvų sutikimu. Jaunesnieji irgi yra labai laukiami kartu su tėveliais."
          />
          <AskedQuestionCard
            question="Kaip organizacija vertina savanorių indėlį ir pasiekimus?"
            answer="Mes labai vertiname kiekvieną savanorį  ir stengiamės pripažinti jų pastangas bei indėlį į mūsų organizacijos veiklą. Mūsų tikslas yra užtikrinti, kad kiekvienas EgzoticSOS prieglaudos savanoris jaustųsi vertinamas ir svarbus mūsų organizacijai."
          />
        </div>
      </div>
      <div className="joinUsContainer">
        <h1>Susidomėjai? Savanoriavimo galimybe?</h1>
        <Link to="/volunteeringForm">Pildyti paraišką</Link>
      </div>
      <div className="pastVolunteeringContainer">
        <div className="innerWrapper">
          <h3>Akimirkos iš savanorio gyvenimo</h3>
          <h2>Nuotraukos iš savanoriavimų</h2>
          <div className="pastColunteeringPhotoContainer">
            <img src="./img/pastEvent4.jpg" alt="kids and animals"></img>
            <img src="./img/volunteering1.jpg" alt="kids and animals"></img>
            <img src="./img/volunteering2.jpg" alt="kids and animals"></img>
            <img src="./img/pastEvent1.jpg" alt="kids and animals"></img>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
