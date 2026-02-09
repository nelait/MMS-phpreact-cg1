import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    sku: '',
    description: '',
    price: '',
    quantity: '',
    category_id: '',
  });

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', product);
      // Redirect or show success message
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleAddProduct}>
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
          <option value=''>Select Category</option>
          {/* Categories should be fetched from an API */}
        </select>
        <button type='submit'>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
