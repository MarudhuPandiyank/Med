import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create-outreach-clinic');
    };

    return (
        <div className="container">
            <header className="header">
                <button className="back-button">Back</button>
                <div className="header-right">User Icon</div>
            </header>
            <main className="content">
                <h1>Outreach Clinic</h1>
                <button className="primary-button" onClick={handleClick}>
                    Create New Outreach Clinic
                </button>
                <button className="secondary-button">
                    Edit Existing Outreach Clinic
                </button>
            </main>
            <footer className="footer">
                Powered By Curable
            </footer>
        </div>
    );
};

export default HomePage;
