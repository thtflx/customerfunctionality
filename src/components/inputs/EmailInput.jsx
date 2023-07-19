import React, { useState } from 'react';


const EmailInput = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
  
    const handleChange = (e) => {
      const value = e.target.value;
      setEmail(value);
      setError('');
    };
  
    const validateEmail = () => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(email)) {
        setError('Invalid email');
      }
    };
  
    return (
      <div className="my-4 font-mono">
        <h3 className="mr-2">Email:</h3>
        <input
          type="email"
          name="email"
          placeholder=""
          value={email}
          onChange={handleChange}
          onBlur={validateEmail}
          className={`rounded w-[240px] border-[2px] py-1 px-4 border-${error ? 'red' : '#d8d6d6'} mr-3`}
        />
        {error && <p className="text-red-500 text-[12px]">{error}</p>}
      </div>
    );
  };

export default EmailInput
