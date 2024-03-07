import React, { useState } from 'react';
import '../Css/form.css'
const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    aadharNumber: '',
    panNumber: '',
    dateOfBirth: '',
    address: '',
    age: '',
    email:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className='RegisterUserForm'>
      <form className='Form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Aadhar Number:</label>
          <input
            type="text"
            className="form-control"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>PAN Number:</label>
          <input
            type="text"
            className="form-control"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            className="form-control"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            name="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <span>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="cancel" className="btn btn-danger">Cancel</button>
        </span>
      </form>
    </div>
  );
};

export default MyForm;