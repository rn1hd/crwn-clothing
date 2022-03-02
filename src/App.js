import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const SectionPage = (props) => (
  <div>
    <h1>{props.name} PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/hats' element={<SectionPage name="HATS" />} />
        <Route path='/shop/jackets' element={<SectionPage name="JACKETS" />} />
        <Route path='/shop/sneakers' element={<SectionPage name="SNEAKERS" />} />
        <Route path='/shop/womens' element={<SectionPage name="WOMENS" />} />
        <Route path='/shop/mens' element={<SectionPage name="MENS" />} />
      </Routes>
    </div>
  );
}

export default App;
