import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchProduct();
    fetchCategories();
  }, [id]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/products/${id}`, product);
      // Redirect or show success message
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleUpdateProduct}>
        <input
          type='text'
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          placeholder='Product Name'
          required
        />
        <input
          type='text'
          value={product.sku}
          onChange={(e) => setProduct({ ...product, sku: e.target.value })}
          placeholder='SKU'
          required
        />
        <textarea
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
          placeholder='Description'
        />
        <input
          type='number'
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          placeholder='Price'
          required
        />
        <input
          type='number'
          value={product.quantity}
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
          placeholder='Quantity'
          required
        />
        <select
          value={product.category_id}
          onChange={(e) => setProduct({ ...product, category_id: e.target.value })}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <button type='submit'>Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
