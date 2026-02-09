import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="about">
      <h1>🙏 Thank You!</h1>
      <p>Your food donation has been successfully recorded.</p>
      <p>A volunteer will contact you shortly.</p>

      <Link to="/Home">
        <button className="primary-btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default Success;