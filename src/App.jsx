import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here */}
        </Routes>
    </>
  );
}

export default App;