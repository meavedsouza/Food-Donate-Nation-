import React from "react";
import { useNavigate } from "react-router-dom";

function Donate() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    food_type: "Veg",
    quantity: "",
    cooked_time: "Less than 1 hour",
    location: "",
    pickup_option: "drop"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ THIS WAS MISSING
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Donation Submitted:", formData);

    // later: send to backend / firebase
    navigate("/success");
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
          <select name="food_type" value={formData.food_type} onChange={handleChange}>
            <option>Veg</option>
            <option>Non-Veg</option>
            <option>Packed</option>
          </select>

          <label>Quantity</label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />

          <label>Cooked Time</label>
          <select name="cooked_time" value={formData.cooked_time} onChange={handleChange}>
            <option>Less than 1 hour</option>
            <option>1–2 hours</option>
            <option>More than 2 hours</option>
          </select>

          <label>Location</label>
          <input name="location" value={formData.location} onChange={handleChange} required />

         <label>Pickup Option</label>

          <div align="left" className="radio-group">
          <label align="left"  className="radio-item">
            <input align="left"  type="radio" name="pickup_option"value="drop" checked={formData.pickup_option === "drop"}onChange={handleChange}/>
               <span>I will drop the food</span>
          </label>

          <label align="left" className="radio-item">
            <input align="left" type="radio"name="pickup_option" value="pickup" checked={formData.pickup_option === "pickup"} onChange={handleChange}/>
            <span>Request pickup</span>
           </label>
      
          </div>

          <button type="submit" className="primary-btn full-btn">
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
}

export default Donate;