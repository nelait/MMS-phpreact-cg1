import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <h1>🏷️ Categories</h1>
      <Link to='/add-category'>+ Add Category</Link>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name} <Link to={`/edit-category/${category.id}`}>Edit</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
