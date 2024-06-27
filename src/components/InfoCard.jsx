import React from 'react';
import './InfoCard.css';

const InfoCard = ({ title, value }) => (
    <div className="info-card">
        <h3 className="info-card-title">{title}</h3>
        <p className="info-card-value">{value}</p>
    </div>
);

export default InfoCard;
