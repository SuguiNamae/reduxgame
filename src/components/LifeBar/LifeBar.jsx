import React from 'react';
import './LifeBar.style.scss';

const LifeBar = ({ number }) => {
  const barWidth = `${number}%`;

  return (
    <div className="bar" style={{ width: barWidth }}>
      <span className="number">{number}</span>
    </div>
  );
};

export default LifeBar;
