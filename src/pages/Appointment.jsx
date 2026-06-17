import React, { useState } from "react";
import "../styles/Appointment.css";

export default function Appointments() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const emailBody = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}

Message:
${formData.message || "N/A"}
    `;

    window.location.href = `mailto:aawazclinic42@gmail.com?subject=New Appointment Booking&body=${encodeURIComponent(
      emailBody
    )}`;

    setStatus("success");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
  };

  return (
    <div className="appointment-container">
      <div className="appointment-card">
        <h2 className="title">Book an Appointment</h2>
        <p className="subtitle">
          Fill out the form and our team will contact you shortly.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="Hearing Test">Hearing Test</option>
              <option value="Speech Therapy">Speech Therapy</option>
              <option value="Hearing Aid Fitting">Hearing Aid Fitting</option>
            </select>
          </div>

          <input
            type="date"
            name="date"
            className="full-input"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            className="full-input"
            placeholder="Additional Message (optional)"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Submit Appointment
          </button>
        </form>

        {status === "success" && (
          <p className="success-msg">
            ✔ Your appointment is booked successfully! We will contact you soon.
          </p>
        )}

        {status === "Submitting..." && (
          <p className="loading-msg">⏳ Submitting...</p>
        )}
      </div>
    </div>
  );
}
