import React from "react";
import "./sponsorLogo.scss";
export default function SponsorLogo({ name, path }) {
  const imgSrc = `/img/sponsorLogos/greyScale/${name}.png`;
  const hoveredImgSrc = `/img/sponsorLogos/colored/${name}.png`;

  return (
    <div
      className="sponsorLogoContainer"
      onClick={() => window.open("https://" + path, "_blank")}
      onMouseOver={(e) => (e.currentTarget.firstChild.src = hoveredImgSrc)}
      onMouseOut={(e) => (e.currentTarget.firstChild.src = imgSrc)}
    >
      <img src={imgSrc} alt="sponsor logo" />
    </div>
  );
}
