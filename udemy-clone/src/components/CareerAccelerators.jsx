import React from "react";
import "./CareerAccelerators.css";

const accelerators = [
  {
    title: "Full Stack Web Developer",
    rating: 4.7,
    ratingsCount: "461K ratings",
    hours: "87.8 total hours",
    imgSrc: "https://img-c.udemycdn.com/career-academy/card/full-stack-web-developer.jpg"
  },
  {
    title: "Digital Marketer",
    rating: 4.4,
    ratingsCount: "3.7K ratings",
    hours: "28.4 total hours",
    imgSrc: "https://img-c.udemycdn.com/career-academy/card/digital-marketer.jpg"
  },
  {
    title: "Data Scientist",
    rating: 4.6,
    ratingsCount: "222K ratings",
    hours: "47.1 total hours",
    imgSrc: "https://img-c.udemycdn.com/career-academy/card/data-scientist.jpg"
  }
];

function CareerAccelerators() {
  return (
    <section className="career-accelerators">
      <h1 className="career-accelerators__title">Ready to reimagine your career?</h1>
      <p className="career-accelerators__subtitle">
        Get the skills and real-world experience employers want with Career Accelerators.
      </p>
      <div className="accelerators__grid">
        {accelerators.map((accel, idx) => (
          <div key={idx} className="accelerator-card">
            <div className="accelerator-card__thumbnail">
              <img src={accel.imgSrc} alt={accel.title} />
            </div>
            <div className="accelerator-card__meta">
              <h2>{accel.title}</h2>
              <div className="meta-boxes">
                <span className="rating-box">
                  <span className="star">★</span>
                  {accel.rating}
                </span>
                <span className="ratings-box">{accel.ratingsCount}</span>
                <span className="hours-box">{accel.hours}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CareerAccelerators;
