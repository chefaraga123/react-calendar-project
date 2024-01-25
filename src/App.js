import React, { useState } from 'react';
import { startOfMonth, addMonths, subMonths, format } from 'date-fns';
import CalendarGrid from './components/CalendarGrid';
import Navigation from './components/Navigation';
import EventInputForm from './EventInputForm';

function App() {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const monthName = format(currentMonth, 'MMMM yyyy');

  const events = [
    { date: new Date(2024, 0, 25), description: 'Meeting with team' },
    { date: new Date(2024, 0, 28), description: 'Doctor Appointment' },
    // ... more events
  ];

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };


  return (
    <div>
      <Navigation onNextMonth={handleNextMonth} onPreviousMonth={handlePreviousMonth} />
      <div>{monthName}</div>
      <CalendarGrid currentMonth={currentMonth} events={events}/>
    </div>
  );
}

export default App;

