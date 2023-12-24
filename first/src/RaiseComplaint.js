// src/components/ComplaintForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './Complaintcss.css'
function RaiseComplaint() {
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [hostelName, setHostelName] = useState('');
  const [hostelRoomNumber, setHostelRoomNumber] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3003/submitComplaint', {
        name,
        registrationNumber,
        hostelName,
        hostelRoomNumber,
        complaint,
      });
      console.log(response.data.message);
      // Clear the form after submission
      setName('');
      setRegistrationNumber('');
      setHostelName('');
      setHostelRoomNumber('');
      setComplaint('');
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Registration Number"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Hostel Name"
          value={hostelName}
          onChange={(e) => setHostelName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Hostel Room Number"
          value={hostelRoomNumber}
          onChange={(e) => setHostelRoomNumber(e.target.value)}
          required
        />
        <textarea
          placeholder="Complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        /> */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Registration Number"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Hostel Name"
          value={hostelName}
          onChange={(e) => setHostelName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Hostel Room Number"
          value={hostelRoomNumber}
          onChange={(e) => setHostelRoomNumber(e.target.value)}
          required
        />
        <textarea
          placeholder="Complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          required
        />

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default RaiseComplaint;
