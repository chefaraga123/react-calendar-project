import React from 'react';

function Navigation({ onNextMonth, onPreviousMonth }) {
  return (
    <div>
      <button onClick={onPreviousMonth}>The next month</button>
      <button onClick={onNextMonth}>The last month</button>
    </div>
  );
}

export default Navigation