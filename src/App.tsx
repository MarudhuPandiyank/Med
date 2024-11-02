import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import OutreachClinicCreation from './components/OutreachClinicCreation';
import ResourcePlanning from './components/ResourcePlanning'; 
import SuccessMessage from './components/SuccessMessage'; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-outreach-clinic" element={<OutreachClinicCreation />} />
        <Route path="/resource-planning" element={<ResourcePlanning />} /> 
        <Route path="/success-message" element={<SuccessMessage />} />

      </Routes>
    </Router>
  );
};

export default App;
