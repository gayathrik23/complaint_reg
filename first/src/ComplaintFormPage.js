// src/components/ComplaintFormPage.js
import React from 'react';
import RaiseComplaint from './RaiseComplaint';
import './Complaintcss.css'
function ComplaintFormPage() {
  return (
    <div className="complaint-form-page">
      <h2 align='center'>Raise a Complaint</h2>
      <RaiseComplaint />
    </div>
  );
}

export default ComplaintFormPage;
