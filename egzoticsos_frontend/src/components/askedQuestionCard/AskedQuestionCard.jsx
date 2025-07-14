import React, { useState } from "react";
import "./askedQuestionCard.scss";
export default function AskedQuestionCard({ question, answer }) {
  const [expanded, setExpanded] = useState(false);
  function reverseExpanded() {
    expanded ? setExpanded(false) : setExpanded(true);
  }
  return (
    <div className="askedQuestionCard">
      <h3
        onClick={() => {
          reverseExpanded();
        }}
      >
        {question}
      </h3>
      <p className={expanded ? "" : "hidden"}>
        {answer instanceof Array
          ? answer.map((string) => {
              return <div className="questionAnswerListItem">{string}</div>;
            })
          : answer}
      </p>
      <img
        src="./img/arrow.png"
        alt="arrow to expand the block"
        className={expanded ? "" : "closed"}
        onClick={() => {
          reverseExpanded();
        }}
      ></img>
    </div>
  );
}
