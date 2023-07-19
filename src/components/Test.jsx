import React, { useState } from 'react';


const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError(value.length < 8);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="my-3 font-mono">
      <h3 className="mr-2">Password:</h3>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder=""
          value={password}
          onChange={handleChange}
          className={`rounded border-[2px] py-1 px-4 border-${error ? 'red' : '#d8d6d6'} mr-3`}
        />
        <button
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-transparent border-none outline-none"
          onClick={handleTogglePassword}
        >
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='mr-2' viewBox="0 0 24 24" fill="none">
              <path opacity="0.15" d="M12.0003 4C5.89153 4 3.13941 8.78756 2.27008 10.7399C1.91168 11.5448 1.91168 12.4552 2.27008 13.2601C3.13941 15.2124 5.89153 20 12.0003 20C18.1092 20 20.8611 15.2122 21.7303 13.2599C22.0886 12.4552 22.0886 11.5448 21.7303 10.7401C20.8611 8.78782 18.1092 4 12.0003 4Z" fill="#0F172A"/>
              <path d="M10 12C11.1046 12 12 11.1046 12 10C12 9.64033 11.9051 9.30283 11.7389 9.01121C11.8249 9.00379 11.912 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 11.912 9.00379 11.8249 9.01121 11.7389C9.30283 11.9051 9.64033 12 10 12Z" fill="#0F172A"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='mr-2' viewBox="0 0 24 24" fill="none">
              <path opacity="0.15" d="M18.849 17.4347L6.78812 5.37378L6.09693 5.87716C3.9631 7.43119 2.79589 9.5595 2.27027 10.7399C1.91186 11.5448 1.91186 12.4553 2.27027 13.2602C3.1396 15.2125 5.89172 20.0001 12.0005 20.0001C14.4684 20.0001 16.4135 19.2084 17.9036 18.1232L18.849 17.4347Z" fill="#0F172A"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87868 9.87866C9.33579 10.4216 9 11.1716 9 12C9 13.6568 10.3431 15 12 15C12.8284 15 13.5784 14.6642 14.1213 14.1213L9.87868 9.87866Z" fill="#0F172A"/>
              <path opacity="0.15" d="M12.0003 4C18.1092 4 20.8611 8.78782 21.7302 10.7401C22.0885 11.5448 22.0885 12.4552 21.7302 13.2599C21.5746 13.6096 21.3658 14.0352 21.0963 14.5009C20.8197 14.9789 20.208 15.1421 19.7299 14.8655C19.2519 14.5889 19.0887 13.9772 19.3653 13.4991C19.5948 13.1025 19.7722 12.7407 19.9031 12.4465C20.0309 12.1595 20.0309 11.8405 19.9031 11.5535C19.1103 9.77274 16.8556 6 12.0003 6L11 6.00001C10.4477 6.00001 10 5.5523 10 5.00002C9.99999 4.44773 10.4477 4.00001 11 4.00001L12.0003 4Z" fill="#0F172A"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z" fill="#0F172A"/>
            </svg>
          )}
        </button>
      </div>
      <p className="text-[12px] mt-[2px] text-[#9a9898]">8+ characters</p>
      {error && <p className="text-red-500 text-[12px]">The password must contain at least 8 characters.</p>}
    </div>
  );
};


const InputForm = ({ onSave }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        password: '',
        role: 'User',
    });
  
    const handleSave = () => {
      onSave({ id: Date.now(), ...formData });
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        password: '',
        role: 'User',
      });
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
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
              className="rounded border-[2px] py-1 px-4 border-[#d8d6d6] mr-3"
              required
            />
          </div>
  
          <div className=''>
            <h3 className="mr-2 mt-3">Surname:</h3>
            <input
              type="text"
              name="lastName"
              placeholder=""
              value={formData.lastName}
              onChange={handleChange}
              className="rounded border-[2px] py-1 px-4 border-[#d8d6d6] mr-3"
            />
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
            className="rounded border-[2px] py-1 px-3 border-[#d8d6d6] mr-3"
          />
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
            className="rounded border-[2px] py-1 px-4 border-[#d8d6d6] mr-3"
          />
        </div>
  
        {/* <div className='my-3 font-mono'>
          <h3 className="mr-2">Password:</h3>
          <input
            type="password"
            name="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
            className="rounded border-[2px] py-1 px-4 border-[#d8d6d6] mr-3"
          />
          <p className='text-[12px] mt-[2px] text-[#9a9898]'>8+ characters</p>
        </div> */}
        <PasswordInput />
  
  
        <button onClick={handleSave} className="rounded border-[2px] border-black py-1 px-10 font-bold">
          Save
        </button>
      </div>
    );
};

export default InputForm
