import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`/api/products/${id}`);
      setFormData(response.data);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/products/${id}`, formData);
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Product Name' required />
      <input type='text' name='sku' value={formData.sku} onChange={handleChange} placeholder='SKU' required />
      <input type='number' name='price' value={formData.price} onChange={handleChange} placeholder='Price' required />
      <input type='number' name='quantity' value={formData.quantity} onChange={handleChange} placeholder='Quantity' required />
      <input type='number' name='reorder_level' value={formData.reorder_level} onChange={handleChange} placeholder='Reorder Level' />
      <input type='number' name='weight' value={formData.weight} onChange={handleChange} placeholder='Weight' />
      <input type='text' name='dimensions' value={formData.dimensions} onChange={handleChange} placeholder='Dimensions' />
      <input type='file' name='image' onChange={handleChange} />
      <button type='submit'>Update Product</button>
    </form>
  );
};

export default EditProduct;
