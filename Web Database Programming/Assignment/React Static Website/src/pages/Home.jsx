import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Website</h1>
        <p>We provide amazing solutions to grow your business!</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a leading company in the industry, delivering high-quality
          services to clients worldwide. Our team is dedicated to innovation and
          excellence.
        </p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>
              We create responsive and modern websites tailored to your needs.
            </p>
          </div>
          <div className="card">
            <h3>App Development</h3>
            <p>Custom mobile applications to enhance your digital presence.</p>
          </div>
          <div className="card">
            <h3>Digital Marketing</h3>
            <p>Boost your online visibility with our expert strategies.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <h2>Our Portfolio</h2>
        <div className="portfolio-items">
          <div className="portfolio-item">Project 1</div>
          <div className="portfolio-item">Project 2</div>
          <div className="portfolio-item">Project 3</div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
