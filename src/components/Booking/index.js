import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/appointments', { date, time }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setSuccess('Appointment booked successfully');
      setDate('');
      setTime('');
    } catch (err) {
      setError('Error booking appointment');
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default Booking;
