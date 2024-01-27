import React from 'react';
import './Navigation.css';


function Navigation({ onNextMonth, onPreviousMonth }) {
  return (
    <div className="navigation-button">
      <button onClick={onPreviousMonth}>The last month</button>
      <button onClick={onNextMonth}>The next month</button>
    </div>
  );
}

export default Navigation