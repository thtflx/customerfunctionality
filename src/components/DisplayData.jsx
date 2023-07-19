import React, { useState } from 'react';


const DisplayData = ({ data, onButtonClick, onDelete }) => {
    const [editedData, setEditedData] = useState(data);
    const [isEditing, setIsEditing] = useState(false);
  
    const handleSave = () => {
      onButtonClick(editedData);
      setIsEditing(false);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedData((prevEditedData) => ({ ...prevEditedData, [name]: value }));
    };
  
    const handleDelete = () => {
      onDelete(data.id);
    };
  
    return (
      <div className="mt-3">
        {isEditing ? (
          <div className='flex items-center gap-[20px]'>
            
            <div className='flex gap-1 items-center w-[210px]'>
              <input
                type="text"
                name="firstName"
                placeholder="Имя"
                value={editedData.firstName}
                onChange={handleChange}
                className="py-1 px-2 w-[80px] bb"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Фамилия"
                value={editedData.lastName}
                onChange={handleChange}
                className="py-1 px-2 w-[100px] bb mr-3"
              />
            </div>
            
            <div className='w-[240px]'>
              <input
                type="text"
                name="company"
                placeholder="Компания"
                value={editedData.company}
                onChange={handleChange}
                className="py-1 px-2 w-[100px] bb mr-3"
              />
            </div>
  
            <div className='w-[310px]'>
              <input
                type="email"
                name="email"
                placeholder="Почта"
                value={editedData.email}
                onChange={handleChange}
                className="py-1 px-2 w-[100px] bb mr-3"
              />
            </div>
            
            {/* <div className='w-[200px]'>
              <input
                type="password"
                name="password"
                placeholder="Почта"
                value={editedData.password}
                onChange={handleChange}
                className="py-1 px-2 w-[100px] bb mr-3"
              />
            </div> */}
            
            <div className="flex items-center w-[220px]">
              <h3 className="mr-2">Роль:</h3>
              <select
                name="role"
                value={editedData.role}
                onChange={handleChange}
                className="rounded border-[2px] py-1 px-4 bb mr-3"
              >
                <option value="User">User</option>
                <option value="Administrator">Administrator</option>
              </select>
            </div>
  
            <button onClick={handleSave} className="rounded border-[2px] border-black py-1 px-3">
              Save
            </button>
          </div>
        ) : (
          <div className='flex items-center gap-2'>
            <div className="mb-2 flex items-center">
              <p className='w-[230px]'>{data.firstName} {data.lastName}</p>
              <p className='w-[260px]'>{data.company}</p>
              <p className='w-[335px]'>{data.email}</p>
              <p className='w-[230px]'>{data.role}</p>
            </div>
  
            <div className='flex gap-1'>
              <button onClick={() => setIsEditing(true)} className="">
                <img className='w-[22px]' src="https://i.imgur.com/bRDgwGw.png" />
              </button>
              <button onClick={handleDelete} className="ml-2">
                <img className='w-[25px]' src="https://i.imgur.com/n2BcAl1.png" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
};

export default DisplayData
