import React, { useState } from 'react';
import PasswordInput from './password/PasswordInput';

const InputForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    password: '',
    role: 'User',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    company: false,
    email: false,
  });

  const handleSave = () => {
    const { firstName, lastName, company, email } = formData;

    const newErrors = {
      firstName: firstName === '',
      lastName: lastName === '',
      company: company === '',
      email: !isValidEmail(email),
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
    } else {
      onSave({ id: Date.now(), ...formData });
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        password: '',
        role: 'User',
      });
      setErrors({
        firstName: false,
        lastName: false,
        company: false,
        email: false,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return ( 
    <div className="mr-5">
      <h1 className='text-3xl font-bold mb-5'>Add customers</h1>

      <div className='font-mono'>
        <div>
          <h3 className="mr-2">Name:</h3>
          <input
            type="text"
            name="firstName"
            placeholder=""
            value={formData.firstName}
            onChange={handleChange}
            className={`rounded border-[2px] py-1 px-4 border-${errors.firstName ? 'red' : '#d8d6d6'} mr-3`}
            required
          />
          {errors.firstName && <p className="text-red-500 text-[12px]">Required</p>}
        </div>

        <div className=''>
          <h3 className="mr-2 mt-3">Surname:</h3>
          <input
            type="text"
            name="lastName"
            placeholder=""
            value={formData.lastName}
            onChange={handleChange}
            className={`rounded border-[2px] py-1 px-4 border-${errors.lastName ? 'red' : '#d8d6d6'} mr-3`}
          />
          {errors.lastName && <p className="text-red-500 text-[12px]">Required</p>}
        </div>
      </div>

      <div className='my-4 font-mono'>
        <h3 className="mr-2">Company:</h3>
        <input
          type="text"
          name="company"
          placeholder=""
          value={formData.company}
          onChange={handleChange}
          className={`rounded border-[2px] py-1 px-3 border-${errors.company ? 'red' : '#d8d6d6'} mr-3`}
        />
        {errors.company && <p className="text-red-500 text-[12px]">Required</p>}
      </div>

      <div className="flex items-center my-5 font-mono">
        <h3 className="mr-2">Role:</h3>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="rounded border-[2px] py-1 px-2 border-[#d8d6d6] mr-3"
        >
          <option value="User">User</option>
          <option value="Administrator">Administrator</option>
        </select>
      </div>

      <div className='my-4 font-mono'>
        <h3 className="mr-2">Email:</h3>
        <input
          type="email"
          name="email"
          placeholder=""
          value={formData.email}
          onChange={handleChange}
          className={`rounded border-[2px] py-1 px-4 border-${errors.email ? 'red' : '#d8d6d6'} mr-3`}
        />
        {errors.email && <p className="text-red-500 text-[12px]">Please enter a valid email.</p>}
      </div>

      <PasswordInput />

      <button onClick={handleSave} className="rounded border-[2px] border-black py-1 px-10 font-bold">
        Save
      </button>
    </div>
  );
};

export default InputForm;


