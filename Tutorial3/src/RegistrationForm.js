import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword } = formValues;
    
    if (!/^[a-zA-Z]+$/.test(firstName)) {
      return "First Name can only contain letters.";
    }
    if (!/^[a-zA-Z]+$/.test(lastName)) {
      return "Last Name can only contain letters.";
    }
     if (!email.includes('@') || !email.includes('.')) {
    return "Please enter a valid email address.";
  }
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }
    localStorage.setItem('profile', JSON.stringify(formValues));
    navigate('/profile');
  };

  return (
    <div className="container">
      <h2>Profile Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formValues.firstName} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formValues.lastName} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formValues.password} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formValues.confirmPassword} onChange={handleChange} required />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default RegistrationForm;
