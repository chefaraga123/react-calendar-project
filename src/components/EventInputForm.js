import React, { useState } from 'react';

function EventInputForm({ addEvent }) {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming eventDate is in the correct format, e.g., 'YYYY-MM-DD'
    const newEvent = {
      title: eventTitle,
      date: new Date(eventDate)
    };
    addEvent(newEvent);
    setEventTitle('');
    setEventDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
        placeholder="Event Title"
        required
      />
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        required
      />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventInputForm;
