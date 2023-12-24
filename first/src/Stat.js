import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './B.css';
function ComplaintStatistics() {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    // Fetch complaint statistics from the backend
    axios.get('http://localhost:7001/count')
      .then((response) => {
        const unsolved = response.data.total - response.data.solved;
        console.log(response);
        setStatistics({...response.data,
            unsolved: unsolved});
      })
      .catch((error) => {
        console.error('Error fetching complaint statistics:', error);
      });
  }, []);

  return (
 <div>
      <div class="box">
        
        <div class="count" id="total-count">Total Complaints: {statistics.total}</div>
    </div>
    <div class="box">
       
        <div class="count" id="solved-count">Solved Complaints: {statistics.solved}</div>
    </div>
    <div class="box">
        <div class="count" id="unsolved-count">Unsolved Complaints: {statistics.unsolved}</div>
        </div>
    </div>
  );
};

export default ComplaintStatistics;
