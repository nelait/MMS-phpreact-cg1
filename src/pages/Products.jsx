import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products', { params: { search } });
      setProducts(response.data);
    };
    fetchProducts();
  }, [search]);

  return (
    <div>
      <h1>📦 Products</h1>
      <input type='text' value={search} onChange={e => setSearch(e.target.value)} placeholder='Search products...' />
      <Link to='/add-product'>+ Add Product</Link>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price} <Link to={`/edit-product/${product.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
