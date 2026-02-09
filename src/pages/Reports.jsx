import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reports = () => {
  const [reportData, setReportData] = useState({});

  useEffect(() => {
    const fetchReports = async () => {
      const response = await axios.get('/api/reports');
      setReportData(response.data);
    };
    fetchReports();
  }, []);

  return (
    <div>
      <h1>📊 Reports</h1>
      <div>
        <h2>Stock Distribution</h2>
        {/* Display stock distribution here */}
      </div>
      <div>
        <h2>Category Breakdown</h2>
        {/* Display category breakdown here */}
      </div>
      <div>
        <h2>Top Products by Value</h2>
        {/* Display top products here */}
      </div>
    </div>
  );
};

export default Reports;
