// import React, { useState } from 'react';
import React, { useState, lazy, Suspense } from 'react';


const countryCodes = [
  { name: 'United States', code: '+1' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Australia', code: '+61' },
  { name: 'India', code: '+91' },
];

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    password: '',
    confirmPassword: '',
    selectedCountryCode: '',
    additionalInput: '',
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  function convertFormDataToJson(formData) {
    const jsonData = JSON.stringify(formData, null, 2);
    return jsonData;
  }
  function downloadJsonFile(jsonData, filename) {
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation checks
    const validationErrors = {};
    if (!formData.firstName) {
      validationErrors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      validationErrors.lastName = 'Last name is required';
    }
    if (!formData.jobTitle) {
      validationErrors.jobTitle = 'Job title is required';
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const userData = JSON.stringify(formData);
      localStorage.setItem('userData', userData);
      console.log('Form data submitted:', formData);

      const jsonData = convertFormDataToJson(formData);
      downloadJsonFile(jsonData, 'fromData.json');
      alert("successful")

    }
    alert("fill all inputs")
  };
  // alert(" data submited successfully");
  return (
    <>
      <div className='container d-flex' style={{ backgroundColor: 'white' }}>
        <div style={{ backgroundColor: 'white' }}>
          <form className='row'>
            <h1>Chat to our Team</h1>
            <p>
              Need help with something? Want a demo? <br />
              Get in touch with our friendly team, and we'll get in touch within 2 hours.
            </p>
            <br />
            <input
              className='col-md-5 me-2'
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type='text'
              placeholder='First Name'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <span className='error'>{errors.firstName}</span>}
            <input
              className='col-md-5'
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type='text'
              placeholder='Last Name'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <span className='error'>{errors.lastName}</span>}
            <br />
            <br />
            <input
              className='col-md-10'
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type='text'
              placeholder='Job Title'
              name='jobTitle'
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
            {errors.jobTitle && <span className='error'>{errors.jobTitle}</span>}
            <br />
            <br />
            <input
              className='col-md-10'
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type='email'
              placeholder='Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className='error'>{errors.email}</span>}
            <br />
            <br />
            <input
              className='col-md-10'
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <span className='error'>{errors.password}</span>}
            <br />
            <br />
            <input
              className='col-md-10 mb-2'
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type='password'
              placeholder='Confirm Password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <div>
              <select
                className='me-2'
                style={{ border: 'none', borderBottom: '1px solid black' }}
                name='selectedCountryCode'
                value={formData.selectedCountryCode}
                onChange={handleChange}
                required
              >
                <option value='' disabled>
                  Select Country Code
                </option>
                {countryCodes.map((country, index) => (
                  <option key={index} value={country.code} className='col-md-5'>
                    {`${country.name} (${country.code})`}
                  </option>
                ))}
              </select>
              <input
                className='col-md-6'
                style={{ border: 'none', borderBottom: '1px solid black' }}
                type='text'
                placeholder='Phone Number'
                name='additionalInput'
                value={formData.additionalInput}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <br />
            <p>Number of employees</p>
            <button className='btn btn-outline-secondary col-md-8'>
              <i className='fa-solid fa-address-card bg-dark'></i>{' '}
              <span className='fw-bold text-dark'>I am a solo creator</span>
              <br />
              I need to set up an account for myself.
            </button>
            <br />
            <br />
            <button className='btn btn-outline-secondary col-md-8 my-2'>
              <i className='fa-regular fa-address-card bg-dark'></i>{' '}
              <span className='fw-bold text-dark'>I am part of a team</span>
              <br />
              I need to set up an account for my team.
            </button>
            <br />
            <br />
            <button type='submit' className='btn btn-dark btn-lg col-md-8' onClick={handleSubmit}>
              Get in Touch
            </button>
          </form>
        </div>
        <div id='img' className='image-container'>
          <img
            src='https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='Registration'
            style={{ borderRadius: '25px' }}
          />
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;