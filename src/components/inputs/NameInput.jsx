import React, { useState } from 'react';

const NameInput = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [companyNameError, setCompanyNameError] = useState(false);
  
    const handleChangeFirstName = (e) => {
      const value = e.target.value;
      setFirstName(value);
      setFirstNameError(value === '');
    };
  
    const handleChangeLastName = (e) => {
      const value = e.target.value;
      setLastName(value);
      setLastNameError(value === '');
    };
  
    const handleCompanyName = (e) => {
      const value = e.target.value;
      setCompanyName(value);
      setCompanyNameError(value === '');
    };
  
    return (
      <div className='font-mono'>
        <div>
          <h3 className="mr-2">Name:</h3>
          <input
            type="text"
            name="firstName"
            placeholder=""
            value={firstName}
            onChange={handleChangeFirstName}
            className={`rounded border-[2px] w-[240px] py-1 px-4 border-${firstNameError ? 'red' : '#d8d6d6'} mr-3`}
            required
          />
          {firstNameError && <p className="text-red-500 text-[13px]">Required</p>}
        </div>
  
        <div className=''>
          <h3 className="mr-2 mt-3">Surname:</h3>
          <input
            type="text"
            name="lastName"
            placeholder=""
            value={lastName}
            onChange={handleChangeLastName}
            className={`rounded border-[2px] w-[240px] py-1 px-4 border-${lastNameError ? 'red' : '#d8d6d6'} mr-3`}
          />
          {lastNameError && <p className="text-red-500 text-[13px]">Required</p>}
        </div>
  
        <div className='my-4 font-mono'>
          <h3 className="mr-2">Company:</h3>
          <input
            type="text"
            name="company"
            placeholder=""
            value={companyName}
            onChange={handleCompanyName}
            className={`rounded border-[2px] w-[240px] py-1 px-4 border-${companyNameError ? 'red' : '#d8d6d6'} mr-3`}
          />
          {companyNameError && <p className="text-red-500 text-[13px]">Required</p>}
        </div>
      </div>
    );
  };

export default NameInput
