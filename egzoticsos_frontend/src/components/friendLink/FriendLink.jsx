import { useState } from "react";
import React from "react";
import "./friendLink.scss";

export default function FriendLink({ link, name, pic }) {
  const [hovered, setHovered] = useState(false);
  let picTarget;

  if (!hovered) {
    picTarget = "/img/friendLogos/greyScale/" + pic;
  } else {
    picTarget = "/img/friendLogos/colored/" + pic;
  }

  return (
    <div
      className="friendCardContainer"
      onClick={() => window.open("https://" + link, "_blank")}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div className="friendsLogoWrapper">
        <div className="friendsLogoContainer">
          <img src={picTarget} alt="sponsor logo"></img>
        </div>
        <h3>{name}</h3>
      </div>
    </div>
  );
}
