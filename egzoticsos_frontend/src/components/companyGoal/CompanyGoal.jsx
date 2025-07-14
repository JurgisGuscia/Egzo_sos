import React from "react";
import "./companyGoal.scss";
export default function CompanyGoal() {
  return (
    <div className="companyGoalContainer">
      <div className="companyGoalInnerWrapper">
        <img src="/img/papuga.png" alt="parrot" className="hangingParrot"></img>
        <div className="companyGoal">
          <div className="companyGoalLeftSide">
            <h2>Mūsų Tikslas</h2>
            <p>
              Mūsų tikslas yra kiek įmanoma labiau sumažinti išmetamų ir be
              priežasties migdomų gyvūnų skaičių. Mūsų šalies klimatas netinka
              daugumai egzotinių gyvūnų tokių kaip: papūgos, ropliai, žiurkėnai,
              degu ar šinšilos. Todėl tokie gyvūnai, kurie yra paleidžiami į
              laisvę - neišgyvena.
            </p>
          </div>
          <img src="/img/vision.png" alt="vision ilustration"></img>
        </div>
      </div>
    </div>
  );
}
