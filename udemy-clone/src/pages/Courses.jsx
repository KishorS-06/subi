import React from "react";
import { Link } from "react-router-dom";
import "./Courses.css";
import { courses } from "../data/courses";

function Courses() {
  return (
    <div className="courses-page">
      <h2 className="courses-title">All Courses</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="course-img-wrap">
              <img src={course.imgUrl} alt={course.title} />
            </div>
            <div className="course-info">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-instructor">{course.instructor}</p>
              <div className="course-meta">
                <span
                  className="course-badge"
                  style={{
                    background: course.badgeColor + "20",
                    color: course.badgeColor
                  }}
                >
                  {course.badge}
                </span>
                <span className="course-rating">★ {course.rating}</span>
                <span className="course-count">{course.ratingsCount}</span>
              </div>
              <div className="course-price">
                <span className="actual">{course.price}</span>
                <span className="old">{course.oldPrice}</span>
              </div>
              <Link
                to={`/courses/${course.id}`}
                className="course-details-link"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
