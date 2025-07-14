import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./viewComponents/mainPage/MainPage.jsx";
import Volunteering from "./viewComponents/volunteering/Volunteering.jsx";
import Education from "./viewComponents/education/Education.jsx";
import PerformanceReports from "./viewComponents/performanceReports/PerformanceReports.jsx";
import Contacts from "./viewComponents/contacts/Contacts.jsx";
import MaterialSupport from "./viewComponents/materialSupport/MaterialSupport.jsx";
import MonetarySupport from "./viewComponents/monetarySupport/MonetarySupport.jsx";
import GPMSupport from "./viewComponents/gpmSupport/GPMSupport.jsx";
import AnimaCare from "./viewComponents/animalCare/AnimalCare.jsx";
import BarzdotojiAgama from "./viewComponents/animalCare/barzdotojiAgama/BarzdotojiAgama.jsx";
import Degu from "./viewComponents/animalCare/degu/Degu.jsx";
import DekoratyviniaiTriusiai from "./viewComponents/animalCare/dekoratyviniaiTriusiai/DekoratyviniaiTriusiai.jsx";
import Gyvalazdes from "./viewComponents/animalCare/gyvalazdes/Gyvalazdes.jsx";
import Iguana from "./viewComponents/animalCare/iguana/Iguana.jsx";
import JuruKiaulytes from "./viewComponents/animalCare/juruKiaulytes/JuruKiaulytes.jsx";
import LeopardinisGekonas from "./viewComponents/animalCare/leopardinisGekonas/LeopardinisGekonas.jsx";
import Pauksciai from "./viewComponents/animalCare/pauksciai/Pauksciai.jsx";
import SalmuotasisChameleonas from "./viewComponents/animalCare/salmuotasisChameleonas/SalmuotasisChameleonas.jsx";
import SausumosVezliai from "./viewComponents/animalCare/sausumosVezliai/SausumosVezliai.jsx";
import Seskai from "./viewComponents/animalCare/seskai/Seskai.jsx";
import Sinsilos from "./viewComponents/animalCare/sinsilos/Sinsilos.jsx";
import VandensVezliai from "./viewComponents/animalCare/vandensVezliai/VandensVezliai.jsx";
import Ziurkenai from "./viewComponents/animalCare/ziurkenai/Ziurkenai.jsx";
import Ziurkes from "./viewComponents/animalCare/ziurkes/Ziurkes.jsx";
import GyvatesIrZalciai from "./viewComponents/animalCare/gyvatesIrZalciai/GyvatesIrZalciai.jsx";
import PrivacyPolicy from "./viewComponents/privacyPolicy/PrivacyPolicy.jsx";
import ScrollToTop from "./utilityComponents/ScrollToTop.jsx";
import VolunteeringForm from "./components/volunteeringForm/VolunteeringForm.jsx";
import NotFound from "./viewComponents/pageNotFound/PageNotFound.jsx";
import AllAnimals from "./viewComponents/allAnimals/AllAnimals.jsx";
import LookingForHome from "./viewComponents/lookingForHome/LookingForHome.jsx";
import UnderCare from "./viewComponents/underCare/UnderCare.jsx";
import FoundHome from "./viewComponents/foundHome/FoundHome.jsx";
import RemainsInMemory from "./viewComponents/remainsInMemory/RemainsInMemory.jsx";
import AnimalSearch from "./viewComponents/animalSearch/AnimalSearch.jsx";
import DetailedAnimalInfo from "./viewComponents/detailedAnimalInfo/DetailedAnimalInfo.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/volunteering" element={<Volunteering />} />
          <Route path="/education" element={<Education />} />
          <Route path="/performanceReports" element={<PerformanceReports />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/materialSupport" element={<MaterialSupport />} />
          <Route path="/monetarySupport" element={<MonetarySupport />} />
          <Route path="/gpmSupport" element={<GPMSupport />} />
          <Route path="/animalCare" element={<AnimaCare />} />
          <Route path="/privatumoPolitika" element={<PrivacyPolicy />} />
          <Route path="/volunteeringForm" element={<VolunteeringForm />} />
          {/*Animal list routes pradzia*/}
          <Route path="/allAnimals" element={<AllAnimals />} />
          <Route path="/lookingForHome" element={<LookingForHome />} />
          <Route path="/underCare" element={<UnderCare />} />
          <Route path="/foundHome" element={<FoundHome />} />
          <Route path="/remainsInMemory" element={<RemainsInMemory />} />

          {/*Animal list routes pabaiga*/}
          <Route path="/searchForAnimal" element={<AnimalSearch />} />
          {/*Animal education routes pradzia*/}
          <Route path="/barzdotojiAgama" element={<BarzdotojiAgama />} />
          <Route path="/degu" element={<Degu />} />
          <Route
            path="/dekoratyviniaiTriusiai"
            element={<DekoratyviniaiTriusiai />}
          />
          <Route path="/gyvalazdes" element={<Gyvalazdes />} />
          <Route path="/gyvatesIrZalciai" element={<GyvatesIrZalciai />} />
          <Route path="/iguana" element={<Iguana />} />
          <Route path="/juruKiaulytes" element={<JuruKiaulytes />} />
          <Route path="/leopardinisGekonas" element={<LeopardinisGekonas />} />
          <Route path="/pauksciai" element={<Pauksciai />} />
          <Route
            path="/salmuotasisChameleonas"
            element={<SalmuotasisChameleonas />}
          />
          <Route path="/sausumosVezliai" element={<SausumosVezliai />} />
          <Route path="/seskai" element={<Seskai />} />
          <Route path="/sinsilos" element={<Sinsilos />} />
          <Route path="/vandensVezliai" element={<VandensVezliai />} />
          <Route path="/ziurkenai" element={<Ziurkenai />} />
          <Route path="/ziurkes" element={<Ziurkes />} />
          {/*Animal education routes pabaiga*/}
          <Route
            path="/detailedAnimalInfo/:id"
            element={<DetailedAnimalInfo />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
