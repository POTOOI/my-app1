import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // นำเข้า Header.js
import Footer from './components/Footer';  // นำเข้า Footer.js
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />  {/* แสดง Header ในทุกหน้า */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />  {/* แสดง Footer ในทุกหน้า */}
    </Router>
  );
}

export default App;
