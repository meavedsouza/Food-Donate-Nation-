import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Donate() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = React.useState(false);

  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    foodType: "Veg",
    quantity: "",
    cookedTime: "Less than 1 hour",
    location: "",
    pickupOption: "drop"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/donations", formData);
      setShowPopup(true);

      setFormData({
        name: "",
        phone: "",
        foodType: "Veg",
        quantity: "",
        cookedTime: "Less than 1 hour",
        location: "",
        pickupOption: "drop"
      });

    } catch (error) {
      console.error("Error submitting donation:", error);
    }
  };

  const goHome = () => {
    navigate("/Home");
  };

  return (
    <div>
      <div className="hero small-hero">
        <h1>Donate Food</h1>
      </div>

      <div className="form-section">
        <form onSubmit={handleSubmit} className="donation-form">

          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} required />

          <label>Phone Number</label>
          <input name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Food Type</label>
          <select name="foodType" value={formData.foodType} onChange={handleChange}>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
            <option value="Packed">Packed</option>
          </select>

          <label>Quantity</label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />

          <label>Cooked Time</label>
          <select name="cookedTime" value={formData.cookedTime} onChange={handleChange}>
            <option value="Less than 1 hour">Less than 1 hour</option>
            <option value="1–2 hours">1–2 hours</option>
            <option value="More than 2 hours">More than 2 hours</option>
          </select>

          <label>Location</label>
          <input name="location" value={formData.location} onChange={handleChange} required />

          <label>Pickup Option</label>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="pickupOption"
                value="drop"
                checked={formData.pickupOption === "drop"}
                onChange={handleChange}
              />
              Drop
            </label>

            <label>
              <input
                type="radio"
                name="pickupOption"
                value="pickup"
                checked={formData.pickupOption === "pickup"}
                onChange={handleChange}
              />
              Pickup
            </label>
          </div>

          <button type="submit" className="primary-btn full-btn">
            Submit Donation
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Donation Successful ❤️</h3>
            <button onClick={goHome}>Go to Home</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Donate;