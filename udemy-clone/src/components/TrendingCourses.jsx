import React from "react";
import "./TrendingCourses.css";

const courses = [
  {
    title: "100 Days of Code: Python",
    instructor: "Mike Dane",
    rating: 4.8,
    price: 499,
    image: "https://s.udemycdn.com/career-academies/careers/full-stack-web-developer/frontend-webdev-human.png"
  },
  {
    title: "Agentic AI Bootcamp",
    instructor: "Sarah Lee",
    rating: 4.7,
    price: 519,
    image: "https://s.udemycdn.com/career-academies/careers/digital-marketer/digital-marketer-human.png"
  },
  {
    title: "Data Scientist Career Accelerator",
    instructor: "Alex Brown",
    rating: 4.6,
    price: 529,
    image: "https://s.udemycdn.com/career-academies/careers/data-scientist/data-scientist-human.png"
  }
];

function TrendingCourses() {
  return (
    <section className="trending-courses">
      <h2>Trending courses</h2>
      <div className="courses__grid">
        {courses.map(course => (
          <div className="course-card" key={course.title}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.instructor}</p>
            <div className="course-meta">
              <span className="star">★</span>
              <span>{course.rating}</span>
              <span>₹{course.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingCourses;
