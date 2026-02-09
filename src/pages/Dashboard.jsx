import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/stats');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h3>Total Products: {stats.total_products}</h3>
        <h3>Total Inventory Value: {stats.total_value}</h3>
        <h3>Low Stock Alerts: {stats.low_stock}</h3>
        <h3>Categories: {stats.categories}</h3>
      </div>
    </div>
  );
};

export default Dashboard;
