import React from 'react';
import { format, isSameDay } from 'date-fns';
import './Day.css';

function Day({ day, isCurrentMonth, events }) {
    const dayEvents = events.filter(event =>
        isSameDay(event.date, day)
      );

  return (
    <div className="day">
      <span className="date-number">{format(day, 'd')}</span>
      {dayEvents.map((event, index) => (
        <div key={index} className="event">
          {event.description}
        </div>
      ))}
    </div>
  );
}

export default Day