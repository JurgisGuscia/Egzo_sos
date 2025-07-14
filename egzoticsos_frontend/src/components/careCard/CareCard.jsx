import React from "react";
import "./careCard.scss";
import { useNavigate } from "react-router-dom";

export default function CareCard({ item }) {
  const navigate = useNavigate();
  return (
    <div
      className="animalCareCard"
      onClick={() => {
        navigate(item.link, {
          state: {
            img: item.img,
            name: item.name,
            info: item.info,
          },
        });
      }}
    >
      <img src={item.img} alt={item.name} />
      <div className="tagsContainer">
        {item.tags.map((tag) => {
          return <div className="tag">{tag}</div>;
        })}
      </div>
      <h4>{item.name}</h4>
      <p>{item.info}</p>
      <div className="animalCareLink">
        Skaityti daugiau
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 0.046875V2.04688H16.59L0 18.6369L1.41 20.0469L18 3.45687V16.0469H20V0.046875H4Z"
            fill="#3B41F0"
          />
        </svg>
      </div>
    </div>
  );
}
