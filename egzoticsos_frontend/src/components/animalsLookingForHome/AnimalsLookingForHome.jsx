import React, { useState, useEffect } from "react";
import "./animalsLookingForHome.scss";
import AnimalCard from "../animalCard/AnimalCard";
export default function AnimalsLookingForHome({ breed }) {
  const [array, setArray] = useState([]);
  useEffect(() => {
    const searchBreed = breed === "Dekoratyvinės žiurkės" ? "Žiurkės" : breed;
    fetch(
      `https://www.egzoticsos.nyxie.lt/getAnimalsByBreed.php?breed=${searchBreed}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 4) {
          const newData = [];
          for (let i = 0; i < 4; i++) {
            newData.push(data[i]);
          }
          setArray(newData);
        } else {
          setArray(data);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [breed]);
  return (
    <div className="animalsLookingForHome">
      <div className="innerWrapper">
        <p>Ieškome mylinčių namų</p>
        <h2>
          {array.length <= 0 ? (
            "Šiuo metu nėra šios veislės gyvnūnėlių, ieškančių namų"
          ) : (
            <span>
              <span className="highlight">{breed}</span> ieško namų
            </span>
          )}
        </h2>
        <div className="cardsContainer">
          {array.length > 0
            ? array.map((item) => <AnimalCard key={item.id} animal={item} />)
            : ""}
        </div>
      </div>
    </div>
  );
}
