import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import img1 from "../assets/hero-food.jpg";
import img2 from "../assets/impact.jpg";
import img3 from "../assets/donate.jpg";

function Home() {
  const images = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>🍽️ Food Donation Platform</h1>
          <p className="tagline">
            Reducing food waste. Fighting hunger. One meal at a time.
          </p>

          <Link to="/donate">
            <button className="primary-btn">Donate Food</button>
          </Link>
        </div>

        <div className="hero-image fade">
          <img src={images[currentImage]} alt="Food donation" />
        </div>
      </section>

      {/* IMPACT (TEXT ONLY) */}
      <section className="impact-section">
        <h2>Food is meant to be shared</h2>
        <p>
          Every day, perfectly good food goes to waste while many people struggle
          to find their next meal. We bridge this gap by connecting surplus food
          to those who need it most.
        </p>

        <Link to="/about" className="text-link">
          Learn more about us →
        </Link>
      </section>

      {/* FUTURE */}
      <section className="future">
        <h2>Want to Help More?</h2>
        <p>
          Soon, you’ll be able to join us as a volunteer or partner NGO and help
          distribute food efficiently.
        </p>
        <span className="coming-soon">Join Us — Coming Soon 🤝</span>
      </section>
    </div>
  );
}

export default Home;