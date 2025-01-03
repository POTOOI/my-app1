import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // ตรวจสอบเส้นทางการนำเข้า Header.js ให้ถูกต้อง
import Footer from './components/Footer';  // ตรวจสอบเส้นทางการนำเข้า Footer.js ให้ถูกต้อง
import Home from './pages/Home';  // ตรวจสอบเส้นทางการนำเข้า Home.js ให้ถูกต้อง
import About from './pages/About';  // ตรวจสอบเส้นทางการนำเข้า About.js ให้ถูกต้อง
import Courses from './pages/Courses';  // ตรวจสอบเส้นทางการนำเข้า Courses.js ให้ถูกต้อง
import Contact from './pages/Contact';  // ตรวจสอบเส้นทางการนำเข้า Contact.js ให้ถูกต้อง

function App() {
  return (
    <Router>
      <Header />  {/* แสดง Header ในทุกหน้า */}
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* หน้า Home */}
        <Route path="/about" element={<About />} /> {/* หน้า About */}
        <Route path="/courses" element={<Courses />} /> {/* หน้า Courses */}
        <Route path="/contact" element={<Contact />} /> {/* หน้า Contact */}
      </Routes>
      
      <Footer />  {/* แสดง Footer ในทุกหน้า */}
    </Router>
  );
}

export default App;
