import React, { useState } from "react";
import "./animalCare.scss";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer.jsx";
import CareCard from "../../components/careCard/CareCard.jsx";
import cardArray from "../../utility/cardArray.jsx";
export default function AnimalCare() {
  const [active, setActive] = useState("Visi");
  const [filterQuery, setFilterQuery] = useState("");

  return (
    <div className="animalCarePage">
      <NavBar />
      <div className="animalCareHeader">
        <div className="innerWrapper">
          <div className="animalCareHeaderLeftSide">
            <h2>Gyvūnų priežiūra</h2>
            <p>Naudingi straipsniai apie mažųjų augintinių priežiūrą!</p>
          </div>
          <div className="animalCareHeaderRightSide">
            <img
              src="./img/brushingAChipmunk.png"
              alt="chipmunk being brushed"
            />
          </div>
        </div>
      </div>
      <div className="animalCareContent">
        <div className="innerWrapper">
          <div className="animalCareSearchContainer">
            <h4>Greita gyvūno priežiūros paieška</h4>
            <div className="animalCareSearchMarkContainer">
              <div
                onClick={() => {
                  setActive("Visi");
                }}
                className={
                  active === "Visi"
                    ? "animalCareSearchMark active"
                    : "animalCareSearchMark"
                }
              >
                Visi
              </div>
              <div
                onClick={() => {
                  setActive("Graužikai");
                }}
                className={
                  active === "Graužikai"
                    ? "animalCareSearchMark active"
                    : "animalCareSearchMark"
                }
              >
                Graužikai
              </div>
              <div
                onClick={() => {
                  setActive("Ropliai");
                }}
                className={
                  active === "Ropliai"
                    ? "animalCareSearchMark active"
                    : "animalCareSearchMark"
                }
              >
                Ropliai
              </div>
              <div
                onClick={() => {
                  setActive("Paukščiai");
                }}
                className={
                  active === "Paukščiai"
                    ? "animalCareSearchMark active"
                    : "animalCareSearchMark"
                }
              >
                Paukščiai
              </div>
              <div
                onClick={() => {
                  setActive("Kiti");
                }}
                className={
                  active === "Kiti"
                    ? "animalCareSearchMark active"
                    : "animalCareSearchMark"
                }
              >
                Kiti
              </div>
            </div>
            <input
              onChange={(e) => setFilterQuery(e.target.value)}
              type="text"
              id="animalCareSearchInput"
              name="animalCareSearchInput"
              className="animalCareSearchInput"
              placeholder="Ieškokite"
            ></input>
          </div>
          <div className="animalCareCardContainer">
            {cardArray
              .filter((item) => item.tags.includes(active) || active === "Visi")
              .filter(
                (item) =>
                  filterQuery === "" ||
                  item.name
                    .toLowerCase()
                    .includes(filterQuery.trim().toLowerCase())
              )
              .map((item, index) => (
                <CareCard key={index} item={item} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
