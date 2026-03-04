import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import { getCourseById } from "../data/courses";
import "./CourseDetails.css";

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const course = getCourseById(id) || {
    id,
    title: `Course #${id}`,
    description: "Course description coming soon.",
    instructor: "Instructor",
    price: "₹499"
  };

  async function handleAddToCart() {
    setMessage("");
    try {
      await api.addToCart({ courseId: String(course.id), title: course.title, price: course.price });
      setMessage("Added to cart");
    } catch (err) {
      setMessage(err.message);
    }
  }

  return (
    <div className="course-details">
      <div className="course-hero">
        <div className="course-hero__content">
          <h1 className="course-title">{course.title}</h1>
          <p className="course-subtitle">{course.description}</p>
          <div className="course-meta">
            <span className="course-instructor">Instructor: {course.instructor}</span>
          </div>
        </div>
        <div className="course-hero__aside">
          <div className="course-card">
            <div className="course-price">
              <span className="course-price__current">{course.price}</span>
            </div>
            <button className="btn btn-primary btn-block" onClick={handleAddToCart}>Add to Cart</button>
            <button className="btn btn-secondary btn-block" onClick={() => navigate('/courses')}>Browse more courses</button>
            {message && <div className="course-msg">{message}</div>}
          </div>
        </div>
      </div>

      <div className="course-content">
        <h2 className="section-title">What you'll learn</h2>
        <ul className="learn-list">
          <li>Comprehensive, real-world project building</li>
          <li>Best practices and modern tooling</li>
          <li>Hands-on exercises and quizzes</li>
        </ul>
      </div>
    </div>
  );
}

export default CourseDetails;
