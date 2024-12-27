// About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h2>สาขาเทคโนโลยีสารสนเทศ (IT)</h2>

      {/* Card 1 */}
      <div className="card">
        <img src="/images/about1.jpg" alt="About IT" className="card-img" />
        <div className="card-content">
          <p>การคิดและทำอย่างสร้างสรรค์ คือแรงผลักดันที่พวกเรา ชาวเทคโนโลยีสารสนทศ วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ ใช้เป็นแนวทางในการผลิตคอมพิวเตอร์ สร้างองค์ความที่โดนเด่นโดยบุคลากรผู้ทรงคุณวุฒิทั้งภายในและภายนอกสถานศึกษา</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card">
        <img src="/images/about2.jpg" alt="About Us" className="card-img" />
        <div className="card-content">
          <p>เพิ่มพูนทักษะในด้านซ่อมบำรุงรักษาคอมพิวเตอร์ทั้งซอฟต์แวร์และฮาร์ดแวร์ ผู้ที่สำเร็จการศึกษาสาขาสามารถประกอบอาชีพ ช่างในทุกองค์กรที่มีคอมพิวเตอร์หรือระบบสารสนเทศ</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card">
        <img src="/images/about3.jpg" alt="IT Career" className="card-img" />
        <div className="card-content">
          <p>ธุรกิจที่มีเทคโนโลยีสารสนเทศเป็นแกนหลัก ได้แก่:</p>
          <ul>
            <li>ธุรกิจผลิตซอฟต์แวร์หรือโปรแกรมคอมพิวเตอร์</li>
            <li>ธุรกิจบริการด้านข้อมูลข่าวสาร</li>
            <li>ธุรกิจด้านการให้บริการระบบเครือข่ายคอมพิวเตอร์</li>
            <li>ธุรกิจแอนิมชั่นและเกม</li>
          </ul>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card">
        <img src="/images/about4.jpg" alt="Study Further" className="card-img" />
        <div className="card-content">
          <p>ผู้ที่จบการศึกษาจากสาขานี้สามารถศึกษาต่อในด้านต่างๆ เช่น:</p>
          <ul>
            <li>ระบบฐานข้อมูลองค์กร</li>
            <li>เน็ตเวิร์คและความปลอดภัยของระบบคอมพิวเตอร์</li>
            <li>ระบบคอมพิวเตอร์อัจฉริยะ (AI)</li>
          </ul>
        </div>
      </div>

      <p><strong>** รับสมัครผู้จบ ม.3, ปวช. และ ม.6 หรือเทียบเท่า **</strong></p>
    </div>
  );
}

export default About;
