import React from 'react';
import Day from './Day';
import { eachDayOfInterval, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns';
import './CalendarGrid.css';

function CalendarGrid({ currentMonth, events }) {
    const startDay = startOfMonth(currentMonth);
    const endDay = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ 
        start: startDay, 
        end: endDay 
    });
  
      return (
        <div className="calendar-grid">
        {days.map(day => (
          <Day 
            key={day.toString()} 
            day={day} 
            isCurrentMonth={currentMonth.getMonth() === day.getMonth()} 
            events={events}
            />
        ))}
      </div>
    );
}

export default CalendarGrid