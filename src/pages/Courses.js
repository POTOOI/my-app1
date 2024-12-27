// Courses.js
import React from 'react';
import './Courses.css';

function Courses() {
  return (
    <div className="courses">
      <h2>หลักสูตรที่เปิดสอน</h2>
      <p>เรามีหลักสูตรที่หลากหลายสำหรับการศึกษาต่อในสาขาเทคโนโลยีสารสนเทศ</p>

      <div className="courses-container">
        {/* Card 1: Vocational Certificate (ปวช.) */}
        <div className="course-card">
          <img src="/images/course-vocational.jpg" alt="Vocational Certificate" className="course-img" />
          <div className="course-info">
            <h3>ปวช. เทคโนโลยีสารสนเทศ</h3>
            <p>หลักสูตรที่ให้ความรู้เบื้องต้นเกี่ยวกับการเขียนโปรแกรมและซ่อมบำรุงคอมพิวเตอร์</p>
            <ul>
              <li>Introduction to Programming</li>
              <li>Computer Hardware</li>
            </ul>
          </div>
        </div>

        {/* Card 2: Vocational Diploma (ปวส.) */}
        <div className="course-card">
          <img src="/images/course-diploma.jpg" alt="Vocational Diploma" className="course-img" />
          <div className="course-info">
            <h3>ปวส. เทคโนโลยีสารสนเทศ</h3>
            <p>หลักสูตรที่เน้นการพัฒนาซอฟต์แวร์และระบบเครือข่าย</p>
            <ul>
              <li>Software Development</li>
              <li>Network Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
