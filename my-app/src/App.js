import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import ScheduleView from "./components/ScheduleView";
import PatientProfile from "./components/PatientProfile";
import BoxSx from "./components/BoxSx";
import MainPage from "./components/MainPage";
import MedicalHistory from "./components/MedicalHistory";

function App() {
  return (
    <div className="fullscreen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoxSx />} />
          <Route path="/schedule" element={<ScheduleView />} />
          <Route path="/PatientProfile" element={<PatientProfile />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/MedicalHistory" element={<MedicalHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
