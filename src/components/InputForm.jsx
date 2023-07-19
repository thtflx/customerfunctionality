import React, { useState } from 'react';
import NameInput from './inputs/NameInput';
import EmailInput from './inputs/EmailInput';
import PasswordInput from './inputs/PasswordInput';



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
  
        <NameInput />
  
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
  

        <EmailInput />
  
        <PasswordInput />
  
  
        <button onClick={handleSave} className="rounded border-[2px] border-black py-1 px-10 font-bold">
          Save
        </button>
      </div>
    );
};

export default InputForm
