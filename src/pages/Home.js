import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Banner Section */}
      <div className="banner">
        <h1>ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h1>
        <p>มุ่งมั่นพัฒนาเยาวชนสู่อนาคตที่สดใส</p>
        <div className="identity">อัตลักษณ์: “เป็นคนดี มีความรู้ คู่สังคม”</div>
        <div className="uniqueness">เอกลักษณ์: “สร้างคนดี ให้มีความรู้ สู่สังคม”</div>
      </div>

      {/* Course Section */}
      <div className="course-section">
        <h2>หลักสูตรที่เปิดสอน</h2>
        <div className="course-row">
          {/* Course Card */}
          <div className="course-card">
            <img src="/images/course1.jpg" alt="Course 1" />
            <div className="course-info">
              <h3>ปวช. เทคโนโลยีสารสนเทศ</h3>
              <p>เรียนรู้ทักษะพื้นฐานทางด้าน IT พร้อมพัฒนาทักษะในการทำงานจริง</p>
            </div>
          </div>
          <div className="course-card">
            <img src="/images/course2.jpg" alt="Course 2" />
            <div className="course-info">
              <h3>ปวส. เทคโนโลยีสารสนเทศ</h3>
              <p>พัฒนาความเชี่ยวชาญด้านระบบเครือข่ายและการจัดการข้อมูล</p>
            </div>
          </div>
          <div className="course-card">
            <img src="/images/course3.jpg" alt="Course 3" />
            <div className="course-info">
              <h3>การพัฒนาโปรแกรม</h3>
              <p>เรียนรู้การพัฒนาโปรแกรมและสร้างระบบซอฟต์แวร์ที่มีคุณภาพ</p>
            </div>
          </div>
          <div className="course-card">
            <img src="/images/course4.jpg" alt="Course 4" />
            <div className="course-info">
              <h3>การจัดการระบบเครือข่าย</h3>
              <p>เรียนรู้การจัดการและดูแลระบบเครือข่ายให้ทำงานได้อย่างมีประสิทธิภาพ</p>
            </div>
          </div>
          <div className="course-card">
            <img src="/images/course5.jpg" alt="Course 5" />
            <div className="course-info">
              <h3>การพัฒนาเว็บไซต์</h3>
              <p>ฝึกฝนทักษะในการพัฒนาเว็บไซต์และแอปพลิเคชันให้ใช้งานได้จริง</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
