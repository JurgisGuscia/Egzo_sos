import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detailedAnimalInfo.scss";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer.jsx";
import AnimalCard from "../../components/animalCard/AnimalCard.jsx";
import cardArray from "../../utility/cardArray.jsx";
import getPicture from "../../utility/getPicture.jsx";
import { useNavigate } from "react-router-dom";
export default function DetailedAnimalInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [animal, setAnimal] = useState({});
  const [linkTo, setLinkTo] = useState("blank");
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [info, setInfo] = useState();

  const [displayImg, setDisplayImg] = useState("");
  const [moreAnimals, setMoreAnimals] = useState([]);

  function setAdditionalInfo(data) {
    cardArray.forEach((item) => {
      if (item.tags[1] === data.breed) {
        setLinkTo(item.link);
        setImg(item.img);
        setName(item.name);
        setInfo(item.info);
      }
    });
    //getPicture funkcija is failo  src/utility/getPicture grazina nuotraukos kuria reikia parodyti src
    setDisplayImg(getPicture(data.breed));
  }

  useEffect(() => {
    setLinkTo("blank");
    fetch(`https://www.egzoticsos.nyxie.lt/getAnimal.php?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAnimal(data);
        setAdditionalInfo(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [id]);

  useEffect(() => {
    fetch(
      `https://www.egzoticsos.nyxie.lt/getDataWithCategory.php?category=Dovanojami`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const myData = [];
        for (let i = 0; i < 4; i++) {
          myData.push(data[i]);
        }
        setMoreAnimals(myData);
      })
      .catch((error) => console.error(error));
  }, []);

  //   animal objekto struktura:
  //   age            amzius, jei nenurodyta bus -1
  //   breed          veisle
  //   mark           rusis
  //   castrated      ar kastruotas 1/0
  //   chipped        ar cipuotas 1/0
  //   date           priglaudimo data
  //   gender         lytis
  //   id             id duomenu bazej
  //   img            paveikslelio url
  //   info           pagrindine info
  //   category       kategorija dovanojamas/globojamas ir t.t.t
  //   name           vardas
  //   vacinated      ar vakcinuotas 1/0

  if (Object.keys(animal).length === 0) {
    return (
      <>
        <NavBar />
        <div className="detailedAnimalInfoContainer">
          <div className="innerWrapper">
            <div className="mainInfoContainer">
              <div className="mainInfoPhotoContainer">Loading</div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <div className="detailedAnimalInfoContainer">
          <div className="innerWrapper">
            <div className="mainInfoContainer">
              <div className="mainInfoPhotoContainer">
                <img src={animal.img} alt="animal" />
              </div>
              <div className="mainInfoDetailsContainer">
                <h2>{animal.name}</h2>
                <h4>Bendra informacija:</h4>
                <ul>
                  <li className="mainInfoDetailsLine">
                    <div className="mainInfoDetailsLineLabel">Rūšis</div>
                    <div className="mainInfoDetailsLineInfo">
                      {animal.mark + " / " + animal.breed}
                    </div>
                  </li>
                  <li className="mainInfoDetailsLine">
                    <div className="mainInfoDetailsLineLabel">Kategorija</div>
                    <div className="mainInfoDetailsLineInfo">
                      {animal.category}
                    </div>
                  </li>
                  <li className="mainInfoDetailsLine">
                    <div className="mainInfoDetailsLineLabel">
                      Pateko į prieglaudą
                    </div>
                    <div className="mainInfoDetailsLineInfo">{animal.date}</div>
                  </li>
                  <li className="mainInfoDetailsLine">
                    <div className="mainInfoDetailsLineLabel">Amžius</div>
                    <div className="mainInfoDetailsLineInfo">
                      {animal.age < 0 ? "Nenurodyta" : animal.age}
                    </div>
                  </li>
                  <li className="mainInfoDetailsLine">
                    <div className="mainInfoDetailsLineLabel">Lytis</div>
                    <div className="mainInfoDetailsLineInfo">
                      {animal.gender}
                    </div>
                  </li>
                  <li className="mainInfoDetailsLine">
                    <div className="mainInfoDetailsLineLabel">
                      Sterilizuotas
                    </div>
                    <div className="mainInfoDetailsLineInfo">
                      {animal.castrated ? "Taip" : "Ne"}
                    </div>
                  </li>
                  <li className="mainInfoDetailsLine">
                    <div className="mainInfoDetailsLineLabel">Čipuotas</div>
                    <div className="mainInfoDetailsLineInfo">
                      {animal.chipped ? "Taip" : "Ne"}
                    </div>
                  </li>
                  <li className="mainInfoDetailsLine">
                    <div className="mainInfoDetailsLineLabel">Skiepytas</div>
                    <div className="mainInfoDetailsLineInfo">
                      {animal.vacinated ? "Taip" : "Ne"}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mainInfoInfoContainer">
                <h2>Aprašymas</h2>
                <p>{animal.info}</p>
              </div>
              <div className="mainInfoShareContainer">
                <h2>Pasidalink</h2>
                <p className="mainInfoShareLinkContainer">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.252 16.5049C28.252 9.74234 22.7635 4.25391 16.001 4.25391C9.23844 4.25391 3.75 9.74234 3.75 16.5049C3.75 22.4344 7.96434 27.3715 13.5508 28.5108V20.1802H11.1006V16.5049H13.5508V13.4421C13.5508 11.0777 15.4742 9.1543 17.8386 9.1543H20.9014V12.8296H18.4512C17.7774 12.8296 17.2261 13.3809 17.2261 14.0547V16.5049H20.9014V20.1802H17.2261V28.6946C23.4128 28.0821 28.252 22.8631 28.252 16.5049Z"
                      fill="#110F0F"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.2 4.28516H5.8C4.8 4.28516 4 5.08516 4 5.98516V26.4852C4 27.3852 4.8 28.1852 5.8 28.1852H26.2C27.2 28.1852 28 27.3852 28 26.4852V5.98516C28 5.08516 27.2 4.28516 26.2 4.28516ZM11.1 24.6852H7.6V13.2852H11.1V24.6852ZM9.4 11.6852C8.3 11.6852 7.3 10.7852 7.3 9.58516C7.3 8.38516 8.2 7.48516 9.4 7.48516C10.5 7.48516 11.5 8.38516 11.5 9.58516C11.5 10.7852 10.5 11.6852 9.4 11.6852ZM24.5 24.5852H21V18.9852C21 17.6852 21 15.8852 19.1 15.8852C17.2 15.8852 17 17.3852 17 18.7852V24.4852H13.5V13.2852H16.8V14.7852H16.9C17.4 13.8852 18.6 12.8852 20.3 12.8852C23.9 12.8852 24.6 15.2852 24.6 18.3852V24.5852H24.5Z"
                      fill="#110F0F"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.7812 28.7852L18.7847 14.2147L18.8018 14.2283L27.8151 3.78516H24.8031L17.4606 12.2852L11.6297 3.78516H3.73022L13.063 17.3886L13.0618 17.3874L3.21875 28.7852H6.23078L14.394 19.3283L20.8818 28.7852H28.7812ZM10.4362 6.05788L24.4621 26.5124H22.0752L8.03803 6.05788H10.4362Z"
                      fill="#110F0F"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.4474 18.3902L19.4474 16.3902C19.29 16.3117 19.1146 16.2762 18.939 16.2871C18.7634 16.2981 18.5939 16.3552 18.4474 16.4527L16.6112 17.6777C15.7682 17.2143 15.0745 16.5206 14.6112 15.6777L15.8362 13.8414C15.9336 13.6949 15.9907 13.5254 16.0017 13.3498C16.0127 13.1742 15.9771 12.9989 15.8987 12.8414L13.8987 8.84141C13.8158 8.674 13.6876 8.53315 13.5288 8.43484C13.3699 8.33652 13.1867 8.28467 12.9999 8.28516C11.6738 8.28516 10.4021 8.81194 9.46437 9.74962C8.52669 10.6873 7.99991 11.9591 7.99991 13.2852C8.00322 16.2015 9.1632 18.9975 11.2254 21.0597C13.2876 23.1219 16.0835 24.2818 18.9999 24.2852C19.6565 24.2852 20.3067 24.1558 20.9133 23.9046C21.52 23.6533 22.0711 23.285 22.5354 22.8207C22.9997 22.3564 23.368 21.8052 23.6193 21.1986C23.8706 20.5919 23.9999 19.9418 23.9999 19.2852C24 19.0994 23.9484 18.9172 23.8508 18.7591C23.7532 18.6011 23.6135 18.4733 23.4474 18.3902ZM18.9999 22.2852C16.6138 22.2825 14.3261 21.3334 12.6389 19.6462C10.9516 17.9589 10.0026 15.6713 9.99991 13.2852C9.99971 12.5916 10.2399 11.9193 10.6795 11.3828C11.1191 10.8464 11.731 10.4788 12.4112 10.3427L13.8462 13.2177L12.6249 15.0352C12.5336 15.172 12.4776 15.3293 12.4617 15.4931C12.4457 15.6568 12.4705 15.822 12.5337 15.9739C13.2491 17.6744 14.6019 19.0272 16.3024 19.7427C16.4548 19.8086 16.6212 19.8357 16.7866 19.8213C16.952 19.8069 17.1112 19.7515 17.2499 19.6602L19.0762 18.4427L21.9512 19.8777C21.814 20.5586 21.4448 21.1708 20.9066 21.6098C20.3684 22.0489 19.6945 22.2875 18.9999 22.2852ZM15.9999 3.28516C13.7555 3.28467 11.5492 3.86527 9.59572 4.97044C7.64227 6.07562 6.00822 7.66772 4.85262 9.59178C3.69703 11.5158 3.05926 13.7063 3.00139 15.95C2.94353 18.1937 3.46753 20.4141 4.52241 22.3952L3.10366 26.6514C2.98614 27.0038 2.96908 27.382 3.05441 27.7435C3.13973 28.105 3.32405 28.4357 3.58672 28.6983C3.84939 28.961 4.18003 29.1453 4.54157 29.2307C4.90311 29.316 5.28127 29.2989 5.63366 29.1814L9.88991 27.7627C11.6334 28.69 13.5652 29.2079 15.5387 29.2772C17.5122 29.3464 19.4756 28.9651 21.2797 28.1623C23.0839 27.3595 24.6815 26.1562 25.9512 24.6438C27.2209 23.1313 28.1293 21.3495 28.6076 19.4336C29.0858 17.5176 29.1213 15.5179 28.7113 13.5862C28.3013 11.6545 27.4567 9.84158 26.2414 8.28505C25.0262 6.72853 23.4723 5.46931 21.6978 4.60297C19.9232 3.73664 17.9746 3.28597 15.9999 3.28516ZM15.9999 27.2852C14.0661 27.2865 12.1663 26.7772 10.4924 25.8089C10.3699 25.7378 10.2336 25.6936 10.0927 25.6792C9.95172 25.6647 9.80933 25.6804 9.67491 25.7252L4.99991 27.2852L6.55866 22.6102C6.60359 22.4758 6.61947 22.3335 6.60525 22.1925C6.59103 22.0516 6.54702 21.9153 6.47616 21.7927C5.26362 19.6963 4.77679 17.2584 5.09119 14.8571C5.40559 12.4558 6.50365 10.2254 8.21502 8.5119C9.92639 6.79837 12.1554 5.69749 14.5563 5.38006C16.9572 5.06263 19.3957 5.54637 21.4936 6.75626C23.5915 7.96615 25.2314 9.83454 26.1591 12.0716C27.0868 14.3087 27.2502 16.7893 26.6242 19.1288C25.9981 21.4682 24.6176 23.5357 22.6966 25.0104C20.7756 26.4852 18.4217 27.2848 15.9999 27.2852Z"
                      fill="#110F0F"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 6.28516H4C3.46957 6.28516 2.96086 6.49587 2.58579 6.87094C2.21071 7.24602 2 7.75472 2 8.28516V24.2852C2 24.8156 2.21071 25.3243 2.58579 25.6994C2.96086 26.0744 3.46957 26.2852 4 26.2852H28C28.5304 26.2852 29.0391 26.0744 29.4142 25.6994C29.7893 25.3243 30 24.8156 30 24.2852V8.28516C30 7.75472 29.7893 7.24602 29.4142 6.87094C29.0391 6.49587 28.5304 6.28516 28 6.28516ZM25.8 8.28516L16 15.0652L6.2 8.28516H25.8ZM4 24.2852V9.19516L15.43 17.1052C15.5974 17.2213 15.7963 17.2835 16 17.2835C16.2037 17.2835 16.4026 17.2213 16.57 17.1052L28 9.19516V24.2852H4Z"
                      fill="#110F0F"
                    />
                  </svg>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.2501 7.045C28.6927 6.48565 28.0303 6.04182 27.301 5.73899C26.5717 5.43616 25.7898 5.28027 25.0001 5.28027C24.2104 5.28027 23.4285 5.43616 22.6992 5.73899C21.9699 6.04182 21.3075 6.48565 20.7501 7.045L22.1701 8.465C22.5424 8.09271 22.9844 7.79738 23.4708 7.5959C23.9572 7.39441 24.4786 7.29071 25.0051 7.29071C25.5316 7.29071 26.0529 7.39441 26.5394 7.5959C27.0258 7.79738 27.4678 8.09271 27.8401 8.465C28.2124 8.8373 28.5077 9.27928 28.7092 9.76571C28.9107 10.2521 29.0144 10.7735 29.0144 11.3C29.0144 11.8265 28.9107 12.3479 28.7092 12.8343C28.5077 13.3207 28.2124 13.7627 27.8401 14.135L19.8401 22.135C19.0895 22.8869 18.071 23.3098 17.0086 23.3108C15.9462 23.3117 14.927 22.8906 14.1751 22.14C13.4232 21.3894 13.0003 20.3709 12.9993 19.3085C12.9984 18.2461 13.4195 17.2269 14.1701 16.475L15.5801 15.055L14.1701 13.635L12.7501 15.055C12.1907 15.6124 11.7469 16.2748 11.4441 17.0041C11.1412 17.7334 10.9854 18.5153 10.9854 19.305C10.9854 20.0947 11.1412 20.8766 11.4441 21.6059C11.7469 22.3352 12.1907 22.9976 12.7501 23.555C13.8816 24.672 15.4102 25.2942 17.0001 25.285C17.7928 25.2883 18.5783 25.1344 19.3112 24.8323C20.0441 24.5302 20.7099 24.0859 21.2701 23.525L29.2701 15.525C30.391 14.3974 31.0186 12.8709 31.0148 11.2809C31.0111 9.69086 30.3763 8.16736 29.2501 7.045Z"
                      fill="#110F0F"
                    />
                    <path
                      d="M4.19046 25.105C3.81705 24.7333 3.52075 24.2915 3.31856 23.805C3.11638 23.3185 3.0123 22.7968 3.0123 22.27C3.0123 21.7431 3.11638 21.2215 3.31856 20.7349C3.52075 20.2484 3.81705 19.8067 4.19046 19.435L12.1905 11.435C12.5621 11.0616 13.0039 10.7653 13.4904 10.5631C13.9769 10.3609 14.4986 10.2568 15.0255 10.2568C15.5523 10.2568 16.074 10.3609 16.5605 10.5631C17.047 10.7653 17.4888 11.0616 17.8605 11.435C18.2315 11.8096 18.5236 12.2548 18.7194 12.7444C18.9152 13.2339 19.0108 13.7578 19.0005 14.285C19.0035 14.8138 18.9017 15.3379 18.7008 15.8271C18.5 16.3163 18.2042 16.7609 17.8305 17.135L15.7105 19.285L17.1305 20.705L19.2505 18.585C20.379 17.4565 21.0129 15.9259 21.0129 14.33C21.0129 12.734 20.379 11.2035 19.2505 10.075C18.122 8.94648 16.5914 8.3125 14.9955 8.3125C13.3995 8.3125 11.869 8.94648 10.7405 10.075L2.74046 18.075C2.17959 18.6326 1.7345 19.2956 1.43078 20.0258C1.12706 20.756 0.970703 21.5391 0.970703 22.33C0.970703 23.1209 1.12706 23.9039 1.43078 24.6342C1.7345 25.3644 2.17959 26.0274 2.74046 26.585C3.87928 27.6935 5.41136 28.3048 7.00046 28.285C8.60356 28.2865 10.1422 27.6538 11.2805 26.525L9.86046 25.105C9.48878 25.4784 9.047 25.7747 8.56049 25.9769C8.07398 26.1791 7.55231 26.2831 7.02546 26.2831C6.4986 26.2831 5.97694 26.1791 5.49043 25.9769C5.00391 25.7747 4.56213 25.4784 4.19046 25.105Z"
                      fill="#110F0F"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="readAboutAnimalContainer">
          <div className="innerWrapper">
            <div className="readAboutAnimalLeftSide">
              <h1>Draugai/-ės {animal.breed}</h1>
              <p>
                Svarbi informacija norint, kad jūsų augintinis būtų laimingas ir
                sveikas.
              </p>
              <button
                className="learnMoreAboutPet"
                onClick={() => {
                  if (linkTo !== "blank") {
                    navigate(linkTo, {
                      state: {
                        img: img,
                        name: name,
                        info: info,
                      },
                    });
                  }
                }}
              >
                Sužinoti daugiau{" "}
                <svg
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 0.5L12.57 1.893L20.15 9.5H0V11.5H20.15L12.57 19.073L14 20.5L24 10.5L14 0.5Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="readAboutAnimalRightSide">
              <img
                className="animalLookUpSign"
                src="/img/bigSearch.png"
                alt="didelis padidinimo stiklas su gyvunu"
              ></img>
              {/* Prideti gyvuno paveiksleli */}
              <img
                src={displayImg}
                className="readAboutAnimalPicture"
                alt="gyvunas"
              />
              {/* Prideti gyvuno paveiksleli */}
            </div>
          </div>
        </div>

        <div className="adoptionConditions">
          <div className="adoptionConditionsInnerWrapper">
            <img
              src="/img/papuga.png"
              alt="parrot"
              className="hangingParrot"
            ></img>
            <div className="adoption">
              <div className="adoptionLeftSide">
                <h2>Priglaudimo sąlygos</h2>
                <p>
                  Gyvūną dovanojame tik pilnamečiams asmenims, kurie užtikrina
                  tinkamas gyvūno gyvenimo sąlygas
                </p>
                <p>
                  Gyvūną dovanojame asmenims kurie yra susipažinę su tokios
                  rūšies ir veislės gyvūnų laikymo specifika.
                </p>
                <p>
                  Priimant gyvūna auginti pas save turėsite pasirašyti
                  dovanojimo sutartį, kurios metu įsipareigojate gyvūnu rūpintis
                  ir pranešti, kai gyvūnas nugaiš.
                </p>
                <p>
                  Jei susidomėjote dėl šio gyvūno priglaudimo ir susisiekite su
                  mumis telefonu arba mesengeriu.
                </p>
                <div className="adoptionButtonContainer">
                  <button className="callForAdoptionButton">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.0017 28.999H25.8317C6.18171 27.869 3.39171 11.289 3.00171 6.22902C2.97029 5.8356 3.0168 5.43985 3.13859 5.06443C3.26037 4.68902 3.45504 4.34133 3.71143 4.04128C3.96782 3.74122 4.2809 3.49471 4.63272 3.31586C4.98455 3.13701 5.36821 3.02935 5.76171 2.99902H11.2717C11.6723 2.99864 12.0637 3.11853 12.3953 3.34319C12.727 3.56784 12.9835 3.88689 13.1317 4.25902L14.6517 7.99902C14.7981 8.36257 14.8344 8.7611 14.7562 9.14511C14.6779 9.52913 14.4886 9.8817 14.2117 10.159L12.0817 12.309C12.4144 14.1998 13.3199 15.9427 14.6756 17.302C16.0313 18.6613 17.7718 19.5713 19.6617 19.909L21.8317 17.759C22.1132 17.4852 22.4691 17.3003 22.855 17.2274C23.2409 17.1545 23.6397 17.1968 24.0017 17.349L27.7717 18.859C28.1382 19.0119 28.4509 19.2704 28.67 19.6017C28.889 19.9329 29.0045 20.3219 29.0017 20.719V25.999C29.0017 26.7947 28.6856 27.5577 28.123 28.1203C27.5604 28.683 26.7974 28.999 26.0017 28.999ZM6.00171 4.99902C5.7365 4.99902 5.48214 5.10438 5.29461 5.29192C5.10707 5.47945 5.00171 5.73381 5.00171 5.99902V6.07902C5.46171 11.999 8.41171 25.999 25.9417 26.999C26.0731 27.0071 26.2048 26.9892 26.3292 26.9464C26.4537 26.9035 26.5684 26.8364 26.6669 26.7491C26.7654 26.6618 26.8456 26.5559 26.9031 26.4374C26.9606 26.319 26.9941 26.1904 27.0017 26.059V20.719L23.2317 19.209L20.3617 22.059L19.8817 21.999C11.1817 20.909 10.0017 12.209 10.0017 12.119L9.94171 11.639L12.7817 8.76902L11.2817 4.99902H6.00171Z"
                        fill="#F7F7F8"
                      />
                    </svg>
                    +370 60436652 
                  </button>
                  <button className="writeForAdoptionButton">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.252 16.2187C28.252 9.45621 22.7635 3.96777 16.001 3.96777C9.23844 3.96777 3.75 9.45621 3.75 16.2187C3.75 22.1482 7.96434 27.0854 13.5508 28.2247V19.894H11.1006V16.2187H13.5508V13.156C13.5508 10.7916 15.4742 8.86816 17.8386 8.86816H20.9014V12.5435H18.4512C17.7774 12.5435 17.2261 13.0948 17.2261 13.7686V16.2187H20.9014V19.894H17.2261V28.4085C23.4128 27.7959 28.252 22.577 28.252 16.2187Z"
                        fill="#3B41F0"
                      />
                    </svg>
                    Rašyti žinutę
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="otherAnimalsLookingForHomContainer">
          <div className="innerWrapper">
            <h4>Jie taip pat ieško namų</h4>
            <h2>Kiti prieglaudinukai</h2>
            <div className="otherAnimalsCardsContainer">
              {moreAnimals.map((item) => {
                return <AnimalCard animal={item} />;
              })}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
