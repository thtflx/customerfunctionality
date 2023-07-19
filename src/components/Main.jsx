import React, { useState } from 'react';
import InputForm from './InputForm';
import DisplayData from './DisplayData';

const Main = () => {
    const [dataArray, setDataArray] = useState([]);

    const handleSave = (formData) => {
        setDataArray((prevDataArray) => [...prevDataArray, formData]);
    };

    const handleChange = (editedData) => {
        setDataArray((prevDataArray) =>
        prevDataArray.map((data) => (data.id === editedData.id ? { ...editedData } : data))
        );
    };

    const handleDelete = (id) => {
        setDataArray((prevDataArray) => prevDataArray.filter((data) => data.id !== id));
    }; 

    return (
        <div className="p-4 flex my-10 mx-10">
        <div className='border-r-black border-[2px] border-t-transparent border-b-transparent border-l-transparent'>
            <InputForm onSave={handleSave} />
        </div>

        <div className='ml-7 '>
            <h1 className='text-3xl font-bold mb-6'>Customers</h1>
            <ul className='flex items-center text-[gray] gap-[180px] text-[20px] font-mono'>
            <li className='mr-[3px]'>Name</li>
            <li className='mr-[3px]'>Company</li>
            <li className='mr-[100px]'>Email</li>
            <li className='mr-[3px]'>Admin</li>
            <li>Actions</li>
            </ul>

            {dataArray.map((data) => (
            <DisplayData key={data.id} data={data} onButtonClick={handleChange} onDelete={handleDelete} />
            ))}
        </div>
        </div>
    );
}

export default Main
