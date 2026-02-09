import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [formData, setFormData] = useState({ name: '', sku: '', price: '', quantity: '', reorder_level: '', weight: '', dimensions: '', image: null });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    await axios.post('/api/products', form);
    navigate('/products');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' onChange={handleChange} placeholder='Product Name' required />
      <input type='text' name='sku' onChange={handleChange} placeholder='SKU' required />
      <input type='number' name='price' onChange={handleChange} placeholder='Price' required />
      <input type='number' name='quantity' onChange={handleChange} placeholder='Quantity' required />
      <input type='number' name='reorder_level' onChange={handleChange} placeholder='Reorder Level' />
      <input type='number' name='weight' onChange={handleChange} placeholder='Weight' />
      <input type='text' name='dimensions' onChange={handleChange} placeholder='Dimensions' />
      <input type='file' name='image' onChange={handleChange} />
      <button type='submit'>Add Product</button>
    </form>
  );
};

export default AddProduct;
