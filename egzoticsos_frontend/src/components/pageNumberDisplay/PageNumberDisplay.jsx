import React from "react";
import "./pageNumberDisplay.scss";
export default function PageNumberDisplay({ pageNumber, item, changePage }) {
  const myclass =
    pageNumber === item ? "activePageNumberDisplay" : "pageNumberDisplay";
  return (
    <div
      className={myclass}
      onClick={() => {
        changePage(item);
      }}
    >
      {item}
    </div>
  );
}
