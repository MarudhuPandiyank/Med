import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ResourcePlanning.css';



const ResourcePlanning: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    programCoordinators: '',
    campCoordinators: '',
    socialWorkers: '',
    nurses: '',
    doctors: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { programCoordinators, campCoordinators, socialWorkers, nurses, doctors } = formData;

    if (!programCoordinators || !campCoordinators || !socialWorkers || !nurses || !doctors) {
      alert('Please fill out all required fields.');
      return;
    }

    navigate('/success-message');
  };

  return (
    <div className="form-container">
      <header className="header">
        <button className="back-button" onClick={() => navigate('/create-outreach-clinic')}>
          Back
        </button>
        <h1>Resource Planning</h1>
      </header>
      <form className="resource-form" onSubmit={handleSubmit}>
        <label>Program Co-ordinator:</label>
        <input
          type="text"
          placeholder="Enter No of Program Co-ordinators"
          name="programCoordinators"
          value={formData.programCoordinators}
          onChange={handleChange}
          required
        />

        <label>Camp Co-ordinator:</label>
        <input
          type="text"
          placeholder="Enter No of Camp Co-ordinators"
          name="campCoordinators"
          value={formData.campCoordinators}
          onChange={handleChange}
          required
        />

        <label>Social Workers:</label>
        <input
          type="text"
          placeholder="Enter No of Social Workers"
          name="socialWorkers"
          value={formData.socialWorkers}
          onChange={handleChange}
          required
        />

        <label>Nurses:</label>
        <input
          type="text"
          placeholder="Enter No of Nurses"
          name="nurses"
          value={formData.nurses}
          onChange={handleChange}
          required
        />

        <label>Doctors:</label>
        <input
          type="text"
          placeholder="Enter No of Doctors"
          name="doctors"
          value={formData.doctors}
          onChange={handleChange}
          required
        />

        <button type="button" className="allocate-button">Allocate Resources</button>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ResourcePlanning;
