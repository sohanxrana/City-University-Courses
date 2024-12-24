import React from "react";
import "../css/Services.css";

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-cards">
        <div className="card">
          <h3>Web Development</h3>
          <p>We create responsive and dynamic websites for your business.</p>
        </div>
        <div className="card">
          <h3>App Development</h3>
          <p>Custom mobile apps to enhance your customer experience.</p>
        </div>
        <div className="card">
          <h3>Digital Marketing</h3>
          <p>
            Boost your online presence with our expert marketing strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
