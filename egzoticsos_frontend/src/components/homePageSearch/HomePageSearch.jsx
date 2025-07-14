import React, { useState } from "react";
import "./homePageSearch.scss";
import { useNavigate } from "react-router-dom";
export default function HomePageSearch() {
  const navigate = useNavigate();
  const [mark, setMark] = useState("Visi");
  const [category, setCategory] = useState("Visi");
  const [gender, setGender] = useState("Visi");
  const [breed, setBreed] = useState("Visi");

  return (
    <div className="homePageSearchContainer">
      <div className="homePageSearchContainerInnerWrapper">
        <div className="homePageSearchContainerHeading">
          <h1>
            Surask sau naują <span>draugą!</span>
          </h1>
          <p>
            Prisijunk prie mūsų bendruomenės ir išsaugok dar vieną mažą širdelę.
            Priglausk gyvūną iš mūsų prieglaudos bei suteik antrą šansą
            geresniam jų gyvenimui.
          </p>
        </div>
        <div className="searchFormContainer">
          <form id="searchForPet" action="#" method="GET">
            <div className="petTypeSectionContainer">
              <label for="petType">Augintinio klasė</label>
              <select
                name="petType"
                id="petType"
                form="searchForPet"
                onChange={(e) => {
                  setMark(e.target.value);
                  setBreed("Visi");
                }}
              >
                <option value="Visi" selected>
                  Visi
                </option>
                <option value="Graužikai">Graužikai</option>
                <option value="Kiškiai">Kiškiai</option>
                <option value="Ropliai">Ropliai</option>
                <option value="Paukščiai">Paukščiai</option>
                <option value="Kita">Kita</option>
              </select>
            </div>
            <div className="separator"></div>
            <div className="petBreedContainer">
              <label for="petBreed">Augintinio rūšis</label>
              <select
                name="category"
                id="category"
                form="searchForPet"
                onChange={(e) => {
                  setBreed(e.target.value);
                }}
              >
                {/* options skiltis priklauso nuo mark state */}
                {mark === "Visi" && (
                  <option value="Visi" selected>
                    Visi
                  </option>
                )}
                {mark === "Graužikai" && <option value="Visi">Visi</option>}
                {mark === "Graužikai" && (
                  <option value="Jūrų kiaulytės">Jūrų kiaulytės</option>
                )}
                {mark === "Graužikai" && (
                  <option value="Smiltpelės">Smiltpelės</option>
                )}
                {mark === "Graužikai" && <option value="Pelės">Pelės</option>}
                {mark === "Graužikai" && (
                  <option value="Žiurkės">Žiurkės</option>
                )}
                {mark === "Graužikai" && <option value="Degu">Degu</option>}
                {mark === "Graužikai" && (
                  <option value="Voverės">Voverės</option>
                )}
                {mark === "Graužikai" && (
                  <option value="Žiurkėnai">Žiurkėnai</option>
                )}
                {mark === "Graužikai" && (
                  <option value="Šinšilos">Šinšilos</option>
                )}
                {mark === "Kiškiai" && <option value="Visi">Visi</option>}
                {mark === "Kiškiai" && (
                  <option value="Dekoratyviniai triušiai">
                    Dekoratyviniai triušiai
                  </option>
                )}
                {mark === "Ropliai" && <option value="Visi">Visi</option>}
                {mark === "Ropliai" && (
                  <option value="Gyvatės ir žalčiai">Gyvatės ir žalčiai</option>
                )}
                {mark === "Ropliai" && <option value="Iguanos">Iguanos</option>}
                {mark === "Ropliai" && <option value="Vėžliai">Vėžliai</option>}
                {mark === "Ropliai" && <option value="Gekonai">Gekonai</option>}
                {mark === "Ropliai" && <option value="Agamos">Agamos</option>}

                {mark === "ViPaukščiaisi" && <option value="Visi">Visi</option>}
                {mark === "Paukščiai" && (
                  <option value="Papūgos">Papūgos</option>
                )}
                {mark === "Paukščiai" && (
                  <option value="Žvirbliai">Žvirbliai</option>
                )}
                {mark === "Paukščiai" && (
                  <option value="Balandžiai">Balandžiai</option>
                )}
                {mark === "Paukščiai" && (
                  <option value="Putpelės">Putpelės</option>
                )}
                {mark === "Paukščiai" && <option value="Vištos">Vištos</option>}
                {mark === "Paukščiai" && (
                  <option value="Kanarėlės">Kanarėlės</option>
                )}
                {mark === "Paukščiai" && (
                  <option value="Amadinai">Amadinai</option>
                )}
                {mark === "Kita" && <option value="Visi">Visi</option>}
                {mark === "Kita" && <option value="Žuvys">Žuvys</option>}
                {mark === "Kita" && <option value="Sraigės">Sraigės</option>}
                {mark === "Kita" && (
                  <option value="Gyvalazdės">Gyvalazdės</option>
                )}
                {mark === "Kita" && (
                  <option value="Varliagyviai">Varliagyviai</option>
                )}
                {mark === "Kita" && <option value="Ežiai">Ežiai</option>}
                {mark === "Kita" && <option value="Oposumai">Oposumai</option>}
                {mark === "Kita" && <option value="Šeškai">Šeškai</option>}
                {/*  */}
              </select>
            </div>
            <div className="separator lastSeparator"></div>
            <div className="petCategoryContainer">
              <label for="petCategory">Kategorija</label>
              <select
                name="category"
                id="category"
                form="searchForPet"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="All">Visi</option>
                <option value="Dovanojami">Dovanojami</option>
                <option value="Globojami">Globojami</option>
              </select>
            </div>

            <div className="separator"></div>
            <div className="petSexContainer">
              <label for="petSex">Lytis</label>
              <select
                name="gender"
                id="gender"
                form="searchForPet"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="All">Visi</option>
                <option value="Patinas">Patinas</option>
                <option value="Patelė">Patelė</option>
              </select>
            </div>

            <button
              className="searchButton"
              onClick={(e) => {
                e.preventDefault();
                navigate("/searchForAnimal", {
                  state: {
                    mark: mark,
                    breed: breed,
                    category: category,
                    gender: gender,
                  },
                });
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.9108 26.194L20.3588 18.642C22.1736 16.4633 23.0785 13.6689 22.8854 10.8399C22.6923 8.011 21.416 5.36542 19.322 3.45354C17.228 1.54167 14.4775 0.5107 11.6427 0.575112C8.80793 0.639523 6.10711 1.79435 4.1021 3.79937C2.09709 5.80438 0.942258 8.5052 0.877846 11.34C0.813435 14.1748 1.8444 16.9253 3.75628 19.0193C5.66815 21.1133 8.31373 22.3896 11.1427 22.5827C13.9716 22.7758 16.7661 21.8708 18.9448 20.056L26.4968 27.608L27.9108 26.194ZM2.91076 11.608C2.91076 9.82799 3.4386 8.08794 4.42753 6.60789C5.41647 5.12785 6.82207 3.9743 8.46661 3.29311C10.1111 2.61192 11.9207 2.43369 13.6666 2.78096C15.4124 3.12823 17.016 3.98539 18.2747 5.24406C19.5334 6.50274 20.3906 8.10638 20.7378 9.85221C21.0851 11.598 20.9069 13.4076 20.2257 15.0522C19.5445 16.6967 18.3909 18.1023 16.9109 19.0913C15.4309 20.0802 13.6908 20.608 11.9108 20.608C9.52462 20.6054 7.23698 19.6563 5.54972 17.9691C3.86247 16.2818 2.91341 13.9942 2.91076 11.608Z"
                  fill="white"
                />
              </svg>
              Ieškoti augintinio
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
