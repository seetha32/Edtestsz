import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './index.css'

const Appointment= () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/appointments', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setAppointments(response.data);
      } catch (err) {
        setError('Error fetching appointments');
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className='container'>
      <h2>Appointment History</h2>
      {error && <p>{error}</p>}
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.date} at {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointment;
