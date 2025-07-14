import React from "react";
import "./carePageHeader.scss";

export default function CarePageHeader({ info }) {
  return (
    <div className="carePageHeader">
      <div className="innerWrapper">
        <div className="carePageHeaderLeft">
          <h1>{info.header}</h1>
          <p>{info.info}</p>
        </div>
        <div className="carePageHeaderRight">
          <img src={info.img} alt={info.header}></img>
        </div>
      </div>
    </div>
  );
}
