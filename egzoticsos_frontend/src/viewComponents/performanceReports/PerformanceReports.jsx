import React from "react";
import "./performanceReports.scss";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer.jsx";
import ReportCard from "../../components/reportCard/ReportCard.jsx";
import Sponsors from "../../components/sponsors/Sponsors.jsx";
import CallToAction from "../../components/callToAction/CallToAction.jsx";
import Friends from "../../components/friends/Friends.jsx";
export default function PerformanceReports() {
  return (
    <div className="performanceReportsPage">
      <NavBar />
      <div className="performanceReportsHeader">
        <div className="innerWrapper">
          <div className="performanceReportsHeaderLeftSide">
            <h1>Veiklos ataskaitos</h1>
            <p>
              Mūsų darbo apžvalga ir pasiekimai. Dirbome užtikrindami gyvūnų
              gerovę, dalyvavome gelbėjimuose, teikėme veterinarines paslaugas
              ir skatinome visuomenės sąmoningumą. Su džiaugsmu pranešame apie
              pasiektus rezultatus ir tikimės, kad tai padės suprasti mūsų
              veiklą.
            </p>
          </div>
          <img src="./img/pele3.png" alt="mouse"></img>
        </div>
      </div>
      <div className="whatWasDone">
        <div className="innerWrapper">
          <h2>Metų statistika</h2>
          <h1>Ką nuveikėme 2023 metais?</h1>
          <div className="whatWasDonePosterContainer">
            <img src="./img/reportBanner1.png" alt="ataskaitos skrajute"></img>
            <img src="./img/reportBanner2.png" alt="ataskaitos skrajute"></img>
            <img src="./img/reportBanner3.png" alt="ataskaitos skrajute"></img>
            <img src="./img/reportBanner4.png" alt="ataskaitos skrajute"></img>
          </div>
          <div className="giftedAnimalsReportContainer">
            <h3>
              Per 2023 metus priimtų gyvūnų padovanota naujiems savininkams
            </h3>
            <div className="reportIndicatorsContainer">
              <img
                src="./img/reportIndicator1.png"
                alt="report indicator"
              ></img>
              <img
                src="./img/reportIndicator2.png"
                alt="report indicator"
              ></img>
              <img
                src="./img/reportIndicator3.png"
                alt="report indicator"
              ></img>
              <img
                src="./img/reportIndicator4.png"
                alt="report indicator"
              ></img>
              <img
                src="./img/reportIndicator5.png"
                alt="report indicator"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="downloadReportsContainer">
        <div className="innerWrapper">
          <h4>Skaidri veikla</h4>
          <h2>EGZOTICSOS metinės veiklos ataskaitos</h2>
          <div className="downloadableReportsContainer">
            {/* 
          refactorinti: ReportCard yra componentas skirtas atvaizduoti viena veiklos ataskaita
          korteles reiketu dinamiskai atvaizduoti traukiant ikeltas ataskaitas is 
          duomenu bazes.        
          */}
            <ReportCard
              name="2023 metų ataskaita"
              description="VŠĮ „EGZOTICSOS“ pažyma dėl į prieglaudą patekusių bešeiminkių/padovanotų egzotinių gyvūnų"
              size="115 KB"
              path="#"
            />
            <ReportCard
              name="2023 metų ataskaita"
              description="VŠĮ „EGZOTICSOS“ pažyma dėl į prieglaudą patekusių bešeiminkių/padovanotų egzotinių gyvūnų"
              size="115 KB"
              path="#"
            />
            <ReportCard
              name="2023 metų ataskaita"
              description="VŠĮ „EGZOTICSOS“ pažyma dėl į prieglaudą patekusių bešeiminkių/padovanotų egzotinių gyvūnų"
              size="115 KB"
              path="#"
            />
            <ReportCard
              name="2023 metų ataskaita"
              description="VŠĮ „EGZOTICSOS“ pažyma dėl į prieglaudą patekusių bešeiminkių/padovanotų egzotinių gyvūnų"
              size="115 KB"
              path="#"
            />
            <ReportCard
              name="2023 metų ataskaita"
              description="VŠĮ „EGZOTICSOS“ pažyma dėl į prieglaudą patekusių bešeiminkių/padovanotų egzotinių gyvūnų"
              size="115 KB"
              path="#"
            />
            <ReportCard
              name="2023 metų ataskaita"
              description="VŠĮ „EGZOTICSOS“ pažyma dėl į prieglaudą patekusių bešeiminkių/padovanotų egzotinių gyvūnų"
              size="115 KB"
              path="#"
            />
            <ReportCard
              name="2023 metų ataskaita"
              description="VŠĮ „EGZOTICSOS“ pažyma dėl į prieglaudą patekusių bešeiminkių/padovanotų egzotinių gyvūnų"
              size="115 KB"
              path="#"
            />
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <Sponsors />
      <CallToAction />
      <Friends />
      <Footer />
    </div>
  );
}
