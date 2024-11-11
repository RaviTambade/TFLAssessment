import React, { useState } from "react";

const NewUserForm = () => {
  const [formData, setFormData] = useState({
    aadharId: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    email: "",
    contactNumber: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      id: 0,
      imageurl: "image.jpg",
      ...formData,
      createdon: new Date().toISOString().slice(0, 10),
      modifiedon: new Date().toISOString().slice(0, 10),
    };

    try {
      const response = await fetch("YOUR_API_URL", { // Replace 'YOUR_API_URL' with the actual endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        console.log("User registered successfully");
        setSuccess(true);
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create a User Account.</p>
        <hr />
        
        <label htmlFor="aadharId"><b>Aadhar ID</b></label>
        <input type="text" name="aadharId" id="aadharId" value={formData.aadharId} onChange={handleChange} required />
        
        <label htmlFor="firstName"><b>First Name</b></label>
        <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required />
        
        <label htmlFor="lastName"><b>Last Name</b></label>
        <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required />
        
        <label htmlFor="birthDate"><b>Birth Date</b></label>
        <input type="date" name="birthDate" id="birthDate" value={formData.birthDate} onChange={handleChange} required />
        
        <label><b>Gender</b></label>
        <div>
          <input type="radio" id="male" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} required />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input type="radio" id="female" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} required />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input type="radio" id="other" name="gender" value="other" checked={formData.gender === "other"} onChange={handleChange} required />
          <label htmlFor="other">Other</label>
        </div>

        <label htmlFor="email"><b>Email</b></label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="contactNumber"><b>Contact Number</b></label>
        <input type="tel" name="contactNumber" id="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

        <label htmlFor="password"><b>Password</b></label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
        
        <hr />
        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
        
        <button type="submit">Register</button>
        
        {success && <p>Registration successful!</p>}
        {error && <p className="error">Error: {error}</p>}
      </div>
      <div className="container signin">
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
    </form>
  );
};

export default NewUserForm;
