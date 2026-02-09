import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reports from './pages/Reports';
import Categories from './pages/Categories';
import EditProduct from './pages/EditProduct';
import AddProduct from './pages/AddProduct';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import AuthProvider from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/products' element={<Products />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/edit-product/:id' element={<EditProduct />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
