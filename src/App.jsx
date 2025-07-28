import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-160px)]"> {/* Space for header/footer */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here */}
        </Routes>
      </main>
    </>
  );
}

export default App;