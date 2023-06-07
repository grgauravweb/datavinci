import React from 'react';
import './ScoreCard.css';

const ScoreCard = ({ title, score }) => {
  return (
    <div className="score-card">
      <h3 className="score-card-title">{title}</h3>
      <div className="score-card-score">{score}</div>
    </div>
  );
};

export default ScoreCard;
