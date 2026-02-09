import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Categories from './pages/Categories';
import Reports from './pages/Reports';
import Login from './pages/Login';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/products' element={<Products />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/edit-product/:id' element={<EditProduct />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
