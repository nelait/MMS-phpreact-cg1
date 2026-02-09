import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const statsResponse = await axios.get('/api/stats');
      const recentResponse = await axios.get('/api/products?limit=5');
      setStats(statsResponse.data);
      setRecentProducts(recentResponse.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>📊 Dashboard</h1>
      <Link to='/add-product'>+ Add Product</Link>
      <div>
        <h2>Total Products: {stats.total_products}</h2>
        <h2>Total Inventory Value: {stats.total_value}</h2>
        <h2>Low Stock Alerts: {stats.low_stock}</h2>
        <h2>Categories: {stats.categories}</h2>
      </div>
      <h3>🕐 Recent Products</h3>
      <ul>
        {recentProducts.map(product => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
