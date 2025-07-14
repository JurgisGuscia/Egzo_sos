import React, { useEffect, useState } from "react";
import "./newArrivals.scss";
import AnimalCard from "../animalCard/AnimalCard";
import { Link } from "react-router-dom";
export default function NewArrivals() {
  const [moreAnimals, setMoreAnimals] = useState([]);
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

  return (
    <div className="newArrivalsContainer">
      <div className="newArrivalsInnerContainer">
        <div className="headingsWrapper">
          <h4>Neseniai atvykę gyvūnai</h4>
          <h3>Naujausi mūsų prieglaudinukai</h3>
        </div>
        <div className="newArrivalCardsContainer">
          {moreAnimals.map((item) => (
            <AnimalCard key={item.id} animal={item} />
          ))}
        </div>
        <Link to="/allAnimals">
          <div className="newArrivalsButton">Visi gyvūnai</div>
        </Link>
      </div>
    </div>
  );
}
