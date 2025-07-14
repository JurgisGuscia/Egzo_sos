import React from "react";
import "./reportCard.scss";
export default function ReportCard({ name, description, size, path }) {
  return (
    <div className="reportCard">
      <img src="./img/pdf.png" alt="download dpf"></img>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{size}</p>
    </div>
  );
}
