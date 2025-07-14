import React from "react";
import "./monetarySupport.scss";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer.jsx";
import { Link } from "react-router-dom";
import Friends from "../../components/friends/Friends.jsx";
export default function MonetarySupport() {
  return (
    <div className="monetarySupportPage">
      <NavBar />
      <div className="monetarySupportHeader">
        <div className="innerWrapper">
          <h1>Finansinė parama </h1>
          <p>
            Jūsų fiansinė parama padeda rūpintis egzotiškais gyvūnais. Tai ne
            tik pagalba prieglaudai, bet ir galimybė išsaugoti šias unikalias
            būtybes Lietuvoje.
          </p>
          <img
            src="./img/wallet.png"
            className="walletImage"
            alt="wallet"
          ></img>
          <img
            src="./img/vezlys.png"
            className="turtleImage"
            alt="turtle"
          ></img>
        </div>
      </div>
      <div className="paramosBudai">
        <div className="innerWrapper">
          <h4>Kiekvienas euras yra svarbus</h4>
          <h2>Finansinės paramos būdai</h2>
          <div className="donationMethodsContainer">
            <img src="./img/bank.png" className="bankImage" alt="bank"></img>
            <div className="bankTransfer">
              <h3>Bankinis pavedimas</h3>
              <div className="bankTransferInfo">
                <div className="bankTransferInfoLine">
                  <span>Gavėjas: </span> VŠĮ "EGZOTICSOS"
                </div>
                <div className="bankTransferInfoLine">
                  <span>Įmonės kodas: </span> 305634919
                </div>
                <div className="bankTransferInfoLine">
                  <span>Sąskaitos numeris: </span> LT73 7300 0101 6495 1801{" "}
                </div>
                <div className="bankTransferInfoLine">
                  <span>Bankas: </span>AB Swedbank
                </div>
                <div className="bankTransferInfoLine">
                  <span>Kodas: </span>HABALT22
                </div>
              </div>
              <p>
                Pervedant paramą, pavedimo paskirtyje galite tiesiog įrašyti
                "Parama", arba nurodyti tikslinę aukojamų pinigų paskirtį
              </p>
              <ul>
                <li>Konkretiems mūsų globotiniams - įrašykite jų vardus;</li>
                <li>Kasdienėms išlaidoms;</li>
                <li>
                  Konkrečioms procedūroms (vakcinacijoms,
                  kastracijai/sterilizacijai, operacijoms, gydymui), maistui,
                  reikalingiems daiktams ar medikamentams įsigyti.
                </li>
              </ul>
            </div>
            <div className="otherSupportMethod">
              <img src="./img/paypal.png" alt="paypal logo"></img>
              <h3>Paypal</h3>
              <p>
                Aukojimas per PayPal yra patogus ir saugus būdas paremti
                egzotinių ir dekoratyvinių gyvūnų prieglaudą internetu. Jūs
                galite lengvai pervesti pinigus iš savo sąskaitos ar banko
                kortelės, o jūsų finansinė informacija lieka konfidenciali. Tai
                greitas ir efektyvus būdas padėti gyvūnams gauti reikiamą
                priežiūrą.
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://www.paypal.com/donate/?hosted_button_id=TF3JYZG45XDUQ",
                    "_blank"
                  )
                }
              >
                Aukoti per PayPal
              </button>
            </div>
            <div className="otherSupportMethod">
              <img src="./img/patreon.png" alt="patreon logo"></img>
              <h3>Patreon</h3>
              <p>
                Prisidėkite prie "EgzoticSOS" prieglaudos per Patreon platformą.
                Reguliariai prisidėdami nedidelėmis sumomis, padėsite finansuoti
                mūsų veiklą ir rūpintis gyvūnais. Rėmėjai gauna išskirtinį
                turinį, ankstyvą prieigą prie naujų projektų ir specialias
                privilegijas, stiprinančias ryšį su bendruomene.
              </p>
              <button
                onClick={() =>
                  window.open("https://www.patreon.com/egzoticsos", "_blank")
                }
              >
                Aukoti per Patreon
              </button>
            </div>
            <div className="otherSupportMethod">
              <img src="./img/contribee.png" alt="contribee logo"></img>
              <h3>Contribee</h3>
              <p>
                Prisidėkite prie "EgzoticSOS" prieglaudos per Contribee
                platformą. Contribee leidžia reguliariai aukoti ir gauti
                išskirtinį turinį, privilegijas ar ankstyvą prieigą. Tai puikus
                būdas padėti gyvūnams ir palaikyti prieglaudos veiklą. Paremkite
                "EgzoticSOS" ir padėkite sukurti geresnį gyvenimą egzotiniams
                gyvūnams!
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://contribee.com/egzoticsos/subscribe",
                    "_blank"
                  )
                }
              >
                Aukoti per Contribee
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="supportResults">
        <div className="innerWrapper">
          <h4>Kiekvienas euras Mums labai svarbus</h4>
          <h2>Tavo parama organizacijai padės</h2>
          <p>
            Pervesdami finansinę paramą į “EgzoticSOS” sąskaitą, Jūs tiesiogiai
            prisidedate prie mūsų veiklos ir padedate egzotiniams gyvūnėliams.
          </p>
          <div className="supportResultsCardContainer">
            <div className="supportResultsCard">
              <svg
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84.7227 37.5V43.75H87.8477V56.25C87.8477 58.7364 86.86 61.121 85.1018 62.8791C83.3436 64.6373 80.9591 65.625 78.4727 65.625C75.9863 65.625 73.6017 64.6373 71.8435 62.8791C70.0854 61.121 69.0977 58.7364 69.0977 56.25V43.75H72.2227V37.5H62.8477V56.25C62.8535 59.8499 64.0998 63.3379 66.3766 66.1264C68.6534 68.9149 71.8216 70.8336 75.3477 71.5594V75C75.3477 78.3152 74.0307 81.4946 71.6865 83.8388C69.3423 86.183 66.1629 87.5 62.8477 87.5C59.5325 87.5 56.353 86.183 54.0088 83.8388C51.6646 81.4946 50.3477 78.3152 50.3477 75V68.175C52.4327 67.4378 54.19 65.9873 55.309 64.0798C56.428 62.1722 56.8366 59.9305 56.4627 57.7508C56.0887 55.5712 54.9562 53.5939 53.2654 52.1684C51.5745 50.743 49.4342 49.9612 47.2227 49.9612C45.0112 49.9612 42.8708 50.743 41.18 52.1684C39.4891 53.5939 38.3567 55.5712 37.9827 57.7508C37.6087 59.9305 38.0173 62.1722 39.1363 64.0798C40.2553 65.9873 42.0126 67.4378 44.0977 68.175V75C44.0977 79.9728 46.0731 84.7419 49.5894 88.2583C53.1057 91.7746 57.8749 93.75 62.8477 93.75C67.8205 93.75 72.5896 91.7746 76.1059 88.2583C79.6222 84.7419 81.5977 79.9728 81.5977 75V71.5594C85.1237 70.8336 88.2919 68.9149 90.5687 66.1264C92.8456 63.3379 94.0918 59.8499 94.0977 56.25V37.5H84.7227ZM47.2227 56.25C47.8407 56.25 48.4449 56.4333 48.9588 56.7767C49.4727 57.12 49.8733 57.6081 50.1098 58.1791C50.3463 58.7501 50.4082 59.3785 50.2876 59.9847C50.1671 60.5909 49.8694 61.1477 49.4324 61.5847C48.9953 62.0217 48.4385 62.3194 47.8323 62.44C47.2261 62.5605 46.5978 62.4986 46.0268 62.2621C45.4558 62.0256 44.9677 61.6251 44.6243 61.1112C44.281 60.5973 44.0977 59.9931 44.0977 59.375C44.0977 58.5462 44.4269 57.7513 45.013 57.1653C45.599 56.5792 46.3939 56.25 47.2227 56.25Z"
                  fill="#FF9C00"
                />
                <path
                  d="M81.5977 12.5H69.0977V6.25H62.8477V12.5H37.8477V6.25H31.5977V12.5H19.0977C17.4401 12.5 15.8503 13.1585 14.6782 14.3306C13.5061 15.5027 12.8477 17.0924 12.8477 18.75V81.25C12.8477 82.9076 13.5061 84.4973 14.6782 85.6694C15.8503 86.8415 17.4401 87.5 19.0977 87.5H31.5977V81.25H19.0977V18.75H31.5977V25H37.8477V18.75H62.8477V25H69.0977V18.75H81.5977V31.25H87.8477V18.75C87.8477 17.0924 87.1892 15.5027 86.0171 14.3306C84.845 13.1585 83.2553 12.5 81.5977 12.5Z"
                  fill="#FF9C00"
                />
              </svg>
              <p>Apmokėti veterinarinių procedūrų sąskaitas</p>
            </div>
            <div className="supportResultsCard">
              <svg
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M68.1824 25C64.9393 25.122 61.7277 25.6834 58.6356 26.6688C56.7672 27.2203 54.8654 27.6514 52.9418 27.9594C52.1668 23.6295 49.8954 19.7095 46.5244 16.8839C43.1533 14.0583 38.8967 12.5066 34.498 12.5V18.75C37.2047 18.7592 39.8349 19.6481 41.9921 21.2828C44.1493 22.9175 45.7166 25.2092 46.4574 27.8125C44.7581 27.5019 43.0723 27.1214 41.4043 26.6719C38.1769 25.7013 34.8404 25.1396 31.473 25C19.8418 25 12.623 34.5781 12.623 50C12.623 73.4688 25.3355 87.4969 37.623 87.5H37.6293C40.3127 87.3578 42.9486 86.7332 45.4105 85.6562C46.9047 84.9854 48.4949 84.5531 50.123 84.375C51.7543 84.5529 53.3475 84.9852 54.8449 85.6562C57.3057 86.7334 59.9406 87.358 62.623 87.5C74.9043 87.4969 87.623 73.4688 87.623 50C87.623 38.4688 82.5293 25 68.1824 25ZM62.623 81.25C60.69 81.0856 58.7988 80.5953 57.0293 79.8C54.8453 78.835 52.5065 78.2677 50.123 78.125C47.7437 78.2683 45.4091 78.8356 43.2293 79.8C41.4553 80.595 39.56 81.0852 37.623 81.25H37.6293C28.4105 81.2469 18.873 69.5594 18.873 50C18.873 44.3625 20.1012 31.25 31.473 31.25C34.3143 31.4016 37.1266 31.8979 39.848 32.7281C42.9481 33.6552 46.1479 34.2081 49.3793 34.375H50.9137C54.0937 34.2233 57.2408 33.6603 60.2762 32.7C62.8369 31.8731 65.4949 31.3856 68.1824 31.25C80.7355 31.25 81.373 46.8688 81.373 50C81.373 69.5594 71.8355 81.2469 62.623 81.25Z"
                  fill="#FF9C00"
                />
                <path
                  d="M56.373 21.875H53.248V18.75C53.2497 17.0929 53.9087 15.5042 55.0805 14.3324C56.2522 13.1607 57.841 12.5017 59.498 12.5H62.623V15.625C62.6214 17.2821 61.9624 18.8708 60.7906 20.0426C59.6189 21.2143 58.0301 21.8733 56.373 21.875Z"
                  fill="#FF9C00"
                />
              </svg>
              <p>Įsigyti maisto ir priežiūros prekių gyvūnams</p>
            </div>
            <div className="supportResultsCard">
              <svg
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M75.6582 6.25H25.6582C24.0006 6.25 22.4109 6.90848 21.2388 8.08058C20.0667 9.25268 19.4082 10.8424 19.4082 12.5V25C19.4082 26.6576 20.0667 28.2473 21.2388 29.4194C22.4109 30.5915 24.0006 31.25 25.6582 31.25V87.5C25.6582 89.1576 26.3167 90.7473 27.4888 91.9194C28.6609 93.0915 30.2506 93.75 31.9082 93.75H69.4082C71.0658 93.75 72.6555 93.0915 73.8276 91.9194C74.9997 90.7473 75.6582 89.1576 75.6582 87.5V31.25C77.3158 31.25 78.9055 30.5915 80.0776 29.4194C81.2497 28.2473 81.9082 26.6576 81.9082 25V12.5C81.9082 10.8424 81.2497 9.25268 80.0776 8.08058C78.9055 6.90848 77.3158 6.25 75.6582 6.25ZM31.9082 43.75H41.2832V75H31.9082V43.75ZM69.4082 87.5H31.9082V81.25H47.5332V37.5H31.9082V31.25H69.4082V87.5ZM25.6582 25V12.5H75.6582V25H25.6582Z"
                  fill="#FF9C00"
                />
              </svg>
              <p>Įsigyti reikiamų vaistų gyvūnų gydimui</p>
            </div>
            <div className="supportResultsCard">
              <svg
                width="101"
                height="100"
                viewBox="0 0 101 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.8051 6.91905C52.2506 6.48673 51.5676 6.25195 50.8645 6.25195C50.1613 6.25195 49.4783 6.48673 48.9238 6.91905L4.01758 41.9347L7.90195 46.8472L13.3926 42.5659V81.2503C13.3959 82.9069 14.0554 84.4947 15.2268 85.6661C16.3982 86.8375 17.986 87.497 19.6426 87.5003H82.1426C83.7992 87.497 85.387 86.8375 86.5583 85.6661C87.7297 84.4947 88.3893 82.9069 88.3926 81.2503V42.594L93.8832 46.8753L97.7676 41.9628L52.8051 6.91905ZM57.1426 81.2503H44.6426V56.2503H57.1426V81.2503ZM63.3926 81.2503V56.2503C63.3926 54.5927 62.7341 53.003 61.562 51.8309C60.3899 50.6588 58.8002 50.0003 57.1426 50.0003H44.6426C42.985 50.0003 41.3953 50.6588 40.2232 51.8309C39.0511 53.003 38.3926 54.5927 38.3926 56.2503V81.2503H19.6426V37.694L50.8926 13.3503L82.1426 37.7253V81.2503H63.3926Z"
                  fill="#FF9C00"
                />
              </svg>
              <p>Apmokėti patalpų nuomos kainą</p>
            </div>
          </div>
        </div>
      </div>
      <div className="otherSupportMethods">
        <div className="otherSupportMethodCard">
          <h2>
            Negalite prisidėti financiškai, bet norite prisidėti savo darbu?
          </h2>
          <p>
            Prisijunk prie mūsų ir patirk šiltą jausmą, atliekant gerą darbą!
            Savanoriauk pas mums, jei myli gyvūnus, esi atsakingas ir
            rūpestingas.
          </p>
          <Link to="/volunteering">Tapk savanoriu</Link>
          <img
            src="./img/triusis.png"
            className="rabbitPhoto"
            alt="rabbit"
          ></img>
        </div>
        <div className="otherSupportMethodCard">
          <h2>Turi nebereikalingų daiktų skirtų egzotinių gyvūnų auginimui?</h2>
          <p>
            Priimame gyvūnų priežiūros reikmenis, narvus, valymo priemones
            patalpoms ir kt. Turite kitų nereikalingų daiktų? Susisiekite su
            mumis!
          </p>
          <Link to="/materialSupport">Sužinoti daugiau</Link>
          <img src="./img/pele.png" className="mousePhoto" alt="mouse"></img>
        </div>
      </div>
      <Friends />
      <Footer />
    </div>
  );
}
