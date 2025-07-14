import React from "react";
import "./mainPage.scss";
import NavBar from "../../components/navBar/NavBar";
import HomePageSearch from "../../components/homePageSearch/HomePageSearch.jsx";
import CallToAction from "../../components/callToAction/CallToAction.jsx";
import CompanyIntro from "../../components/companyIntro/CompanyIntro.jsx";
import CompanyGoal from "../../components/companyGoal/CompanyGoal.jsx";
import Sponsors from "../../components/sponsors/Sponsors.jsx";
import NewArrivals from "../../components/newArrivals/NewArrivals.jsx";
import EducationalClasses from "../../components/educationalClasses/EducationalClasses.jsx";
import Friends from "../../components/friends/Friends.jsx";
import Footer from "../../components/footer/Footer.jsx";
export default function MainPage() {
  return (
    <div className="mainPage">
      <NavBar />
      <HomePageSearch />
      <CallToAction />
      <CompanyIntro />
      <CompanyGoal />
      <Sponsors />
      <div className="separatorContainer"></div>
      <NewArrivals />
      <EducationalClasses />
      <div className="secondSeparatorContainer"></div>
      <Friends />
      <img src="/img/moneyBox.png" alt="money box" className="moneyBox"></img>
      <Footer />
    </div>
  );
}
