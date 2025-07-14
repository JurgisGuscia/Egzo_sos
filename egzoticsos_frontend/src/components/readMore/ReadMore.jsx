import React from "react";
import "./readMore.scss";
import CareCard from "../careCard/CareCard";
import cardArray from "../../utility/cardArray.jsx";
export default function ReadMore({ breed }) {
  const newArr = cardArray
    .filter((item) => item.name !== breed)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  return (
    <div className="readMore">
      <div className="innerWrapper">
        <p>Taip pat skaitykite</p>
        <h2>Kaip Rūpintis Savo Augintiniu</h2>
        <div className="moreCareCardContainer">
          {newArr.map((item, index) => (
            <CareCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
