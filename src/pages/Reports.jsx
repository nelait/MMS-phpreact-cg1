import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reports = () => {
  const [categoryStats, setCategoryStats] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [stockCounts, setStockCounts] = useState({ inStock: 0, lowStock: 0, outOfStock: 0 });

  useEffect(() => {
    const fetchReportsData = async () => {
      try {
        const [categories, products, stock] = await Promise.all([
          axios.get('/api/categories/stats'),
          axios.get('/api/products/top'),
          axios.get('/api/products/stock-counts')
        ]);
        setCategoryStats(categories.data);
        setTopProducts(products.data);
        setStockCounts(stock.data);
      } catch (error) {
        console.error('Error fetching reports data:', error);
      }
    };
    fetchReportsData();
  }, []);

  return (
    <div>
      <h1>📊 Reports</h1>
      <div>
        <h3>📦 Stock Distribution</h3>
        <div>In Stock: {stockCounts.inStock}</div>
        <div>Low Stock: {stockCounts.lowStock}</div>
        <div>Out of Stock: {stockCounts.outOfStock}</div>
      </div>
      <div>
        <h3>🏷️ Category Breakdown</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Products</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {categoryStats.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.name}</td>
                <td>{cat.num_products}</td>
                <td>{cat.total_value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>🏆 Top 10 Products by Value</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.total_value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
