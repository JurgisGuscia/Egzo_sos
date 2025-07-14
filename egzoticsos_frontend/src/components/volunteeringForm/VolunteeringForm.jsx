import React from "react";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import "./volunteeringForm.scss";
export default function VolunteeringForm() {
  return (
    <div className="volunteeringFormPage">
      <NavBar />
      <div className="volunteeringFormHeader">
        <div className="innerWrapper">
          <h2>Savanoriškos veiklos anketa</h2>
          <p>
            Užpildykite žemiau esančią formą, norėdami savanoriauti mūsų
            organizacijoje.
          </p>
          <img src="./img/twoGirls.png" alt="back of two girls" />
        </div>
      </div>
      <div className="formContainer">
        <div className="innerWrapper">
          <form className="volunteeringForm" action="#" method="post">
            <div className="defaultInfoSection">
              <h3>Asmeninė informacija</h3>
              <div className="defaultInfoSectionFieldsContainer">
                <div className="defaultInputField">
                  <label for="name">Vardas</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="pvz., Vardenis "
                  ></input>
                  <p></p>
                </div>
                <div className="defaultInputField">
                  <label for="surname">Pavardė</label>
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder="pvz., Pavardenis"
                  ></input>
                  <p></p>
                </div>
                <div className="defaultInputField">
                  <label for="age">Amžius</label>
                  <input
                    type="text"
                    name="age"
                    id="age"
                    placeholder="pvz., 23"
                  ></input>
                  <p>
                    Savanoriais tapti gali asmenys, sulaukę 18 metų, o nuo 16
                    metų – su tėvų sutikimu.
                  </p>
                </div>
              </div>
            </div>

            <div className="defaultInfoSection">
              <h3>Kontaktinė Informacija</h3>
              <div className="defaultInfoSectionFieldsContainer">
                <div className="defaultInputField">
                  <label for="email">El. paštas</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="pvz., vardas@mail.com"
                  ></input>
                  <p>
                    Mes neparduodame ar kitaip neatskleidžiame jūsų asmens
                    duomenų trečiosioms šalims. Daugiau{" "}
                    <Link to="/privatumoPolitika">privatumo politikoje</Link>.
                  </p>
                </div>
                <div className="defaultInputField">
                  <label for="phone">Telefono Nr. (Neprivaloma)</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="pvz.,  86 000 0000"
                  ></input>
                  <p></p>
                </div>
                <div className="defaultInputField">
                  <label for="city">Miestas (Neprivaloma)</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="pvz.,  kaunas"
                  ></input>
                  <p>
                    Savanoriais tapti gali asmenys, sulaukę 18 metų, o nuo 16
                    metų – su tėvų sutikimu.
                  </p>
                </div>
              </div>
            </div>

            <div className="defaultInfoSection">
              <h3>Savanorystės informacija</h3>
              <div className="fullWidthInputContainer">
                <label for="purpose">Kodėl norėtum savanoriauti?</label>
                <textarea
                  name="purpose"
                  id="purpose"
                  placeholder="pvz., Norėčiau atlikti praktiką"
                ></textarea>
              </div>
              <div className="fullWidthInputContainer">
                <p>Kaip norėtumėte prisidėti prie "Egzotic SOS" darbo?</p>
                <div className="checkBoxContainer">
                  <input type="checkbox" value="1" id="checkBox1"></input>
                  <label for="checkBox1">Padėti prižiūrėti gyvūnus</label>
                </div>
                <div className="checkBoxContainer">
                  <input type="checkbox" value="2" id="checkBox2"></input>
                  <label for="checkBox2">Ieškoti rėmėjų</label>
                </div>
                <div className="checkBoxContainer">
                  <input type="checkbox" value="3" id="checkBox3"></input>
                  <label for="checkBox3">
                    Dirbti su socialiniais tinklais{" "}
                  </label>
                </div>
                <div className="checkBoxContainer">
                  <input type="checkbox" value="4" id="checkBox4"></input>
                  <label for="checkBox4">
                    Dalyvauti edukacijose, renginiuose
                  </label>
                </div>
                <div className="checkBoxContainer">
                  <input type="checkbox" value="5" id="checkBox5"></input>
                  <label for="checkBox5">Marketingas</label>
                </div>
                <div className="checkBoxContainer">
                  <input type="checkbox" value="6" id="checkBox6"></input>
                  <label for="checkBox6">Laikina globa</label>
                </div>
                <div className="checkBoxContainer">
                  <input type="checkbox" value="7" id="checkBox7"></input>
                  <label for="checkBox7">Kita</label>
                </div>
              </div>

              <div className="fullWidthInputContainer">
                <label for="time">
                  Kiek valandų per savaitę galėtum skirti savanorystei?
                </label>
                <input
                  className="timeInput"
                  type="text"
                  placeholder="pvz., iki 10 val. "
                  name="time"
                  id="time"
                ></input>
              </div>

              <div className="fullWidthInputContainer">
                <label for="experience">
                  Ar turi patirties savanoriaujant su gyvūnais? Jei taip, tai
                  kur? (Neprivaloma)
                </label>
                <textarea
                  type="text"
                  placeholder="Jūsų tekstas"
                  name="experience"
                  id="experience"
                ></textarea>
              </div>
            </div>

            <div className="defaultInfoSection">
              <h3>Papildoma informacija</h3>
              <div className="fullWidthInputContainer">
                <label for="comments">
                  Bet kokie kiti komentarai ar pastabos (Neprivaloma)
                </label>
                <textarea
                  type="text"
                  placeholder="Jūsų tekstas"
                  name="comments"
                  id="comments"
                ></textarea>
              </div>
            </div>

            <div className="defaultInfoSection">
              <h3>Patvirtinimas</h3>
              <div className="fullWidthInputContainer">
                <div className="checkBoxContainer">
                  <input type="checkbox" value="99" id="acceptTerms"></input>
                  <label for="acceptTerms" className="acceptTerms">
                    Perskaičiau ir sutinku su organizacijos taisyklėmis ir
                    sąlygomis
                  </label>
                </div>
              </div>
            </div>
            <input
              onClick={(e) => {
                e.preventDefault();
              }}
              type="submit"
              className="submitFormButton"
              value="Siųsti paraišką"
            ></input>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
