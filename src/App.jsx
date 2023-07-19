import React from 'react';
import Main from './components/Main';



const App = () => {

  return (
    <div>
      <h1 className='text-5xl font-mono font-semibold flex justify-center mt-4'>Task from ITS</h1>
      <Main />
    </div>
  );
};

export default App;














// import React, { useState, useEffect } from 'react';

// const InputForm = ({ onSave }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     company: '',
//     email: '',
//     password: '',
//     role: 'User',
//   });

//   useEffect(() => {
//     const savedData = localStorage.getItem('formData');
//     if (savedData) {
//       setFormData(JSON.parse(savedData));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('formData', JSON.stringify(formData));
//   }, [formData]);

//   const handleSave = () => {
//     onSave({ id: Date.now(), ...formData });
//     setFormData({
//       firstName: '',
//       lastName: '',
//       company: '',
//       email: '',
//       password: '',
//       role: 'User',
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   return (
//     <div className="mr-5">
//       <h1 className="text-3xl font-bold mb-5">Add customers</h1>

//       <div className="font-mono">
//         <div>
//           <h3 className="mr-2">Name:</h3>
//           <input
//             type="text"
//             name="firstName"
//             placeholder=""
//             value={formData.firstName}
//             onChange={handleChange}
//             className="rounded border-[2px] py-1 px-4 border-[#d8d6d6] mr-3"
//           />
//         </div>

//         <div className="">
//           <h3 className="mr-2 mt-3">Surname:</h3>
//           <input
//             type="text"
//             name="lastName"
//             placeholder=""
//             value={formData.lastName}
//             onChange={handleChange}
//             className="rounded border-[2px] py-1 px-4 border-[#d8d6d6] mr-3"
//           />
//         </div>
//       </div>

//       <div className="my-4 font-mono">
//         <h3 className="mr-2">Company:</h3>
//         <input
//           type="text"
//           name="company"
//           placeholder=""
//           value={formData.company}
//           onChange={handleChange}
//           className="rounded border-[2px] py-1 px-3 border-[#d8d6d6] mr-3"
//         />
//       </div>

//       <div className="flex items-center my-5 font-mono">
//         <h3 className="mr-2">Role:</h3>
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="rounded border-[2px] py-1 px-4 border-[#d8d6d6] mr-3"
//         >
//           <option value="User">User</option>
//           <option value="Administrator">Administrator</option>
//         </select>
//       </div>

//       <div className="my-4 font-mono">
//         <h3 className="mr-2">Email:</h3>
//         <input
//           type="email"
//           name="email"
//           placeholder=""
//           value={formData.email}
//           onChange={handleChange}
//           className="rounded border-[2px] py-1 px-4 border-[#d8d6d6] mr-3"
//         />
//       </div>

//       <div className="my-3 font-mono">
//         <h3 className="mr-2">Password:</h3>
//         <input
//           type="password"
//           name="password"
//           placeholder=""
//           value={formData.password}
//           onChange={handleChange}
//           className="rounded border-[2px] py-1 px-4 border-[#d8d6d6] mr-3"
//         />
//         <p className="text-[12px] mt-[2px] text-[#9a9898]">8+ characters</p>
//       </div>

//       <button onClick={handleSave} className="rounded border-[2px] border-black py-1 px-10 font-bold">
//         Save
//       </button>
//     </div>
//   );
// };

// const DisplayData = ({ data, onButtonClick, onDelete }) => {
//   const [editedData, setEditedData] = useState(data);
//   const [isEditing, setIsEditing] = useState(false);

//   const handleSave = () => {
//     onButtonClick(editedData);
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedData((prevEditedData) => ({ ...prevEditedData, [name]: value }));
//   };

//   const handleDelete = () => {
//     onDelete(data.id);
//   };

//   return (
//     <div className="mt-3">
//       {isEditing ? (
//         <div className="flex items-center gap-[20px]">
//           <div className="flex gap-1 items-center w-[210px]">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Имя"
//               value={editedData.firstName}
//               onChange={handleChange}
//               className="py-1 px-2 w-[80px] bb"
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Фамилия"
//               value={editedData.lastName}
//               onChange={handleChange}
//               className="py-1 px-2 w-[100px] bb mr-3"
//             />
//           </div>

//           <div className="w-[240px]">
//             <input
//               type="text"
//               name="company"
//               placeholder="Компания"
//               value={editedData.company}
//               onChange={handleChange}
//               className="py-1 px-2 w-[100px] bb mr-3"
//             />
//           </div>

//           <div className="w-[310px]">
//             <input
//               type="email"
//               name="email"
//               placeholder="Почта"
//               value={editedData.email}
//               onChange={handleChange}
//               className="py-1 px-2 w-[100px] bb mr-3"
//             />
//           </div>

//           <div className="flex items-center w-[220px]">
//             <h3 className="mr-2">Роль:</h3>
//             <select
//               name="role"
//               value={editedData.role}
//               onChange={handleChange}
//               className="rounded border-[2px] py-1 px-4 bb mr-3"
//             >
//               <option value="User">User</option>
//               <option value="Administrator">Administrator</option>
//             </select>
//           </div>

//           <button onClick={handleSave} className="rounded border-[2px] border-black py-1 px-3">
//             Save
//           </button>
//         </div>
//       ) : (
//         <div className="flex items-center gap-2">
//           <div className="mb-2 flex items-center">
//             <p className="w-[230px]">
//               {data.firstName} {data.lastName}
//             </p>
//             <p className="w-[260px]">{data.company}</p>
//             <p className="w-[335px]">{data.email}</p>
//             <p className="w-[230px]">{data.role}</p>
//           </div>

//           <div className="flex gap-1">
//             <button onClick={() => setIsEditing(true)} className="">
//               <img className="w-[22px]" src="https://i.imgur.com/bRDgwGw.png" alt="Edit" />
//             </button>
//             <button onClick={handleDelete} className="ml-2">
//               <img className="w-[25px]" src="https://i.imgur.com/n2BcAl1.png" alt="Delete" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   const [dataArray, setDataArray] = useState([]);

//   useEffect(() => {
//     const savedDataArray = localStorage.getItem('dataArray');
//     if (savedDataArray) {
//       setDataArray(JSON.parse(savedDataArray));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('dataArray', JSON.stringify(dataArray));
//   }, [dataArray]);

//   const handleSave = (formData) => {
//     setDataArray((prevDataArray) => [...prevDataArray, formData]);
//   };

//   const handleChange = (editedData) => {
//     setDataArray((prevDataArray) =>
//       prevDataArray.map((data) => (data.id === editedData.id ? { ...editedData } : data))
//     );
//   };

//   const handleDelete = (id) => {
//     setDataArray((prevDataArray) => prevDataArray.filter((data) => data.id !== id));
//   };

//   return (
//     <div className="p-4 flex my-10 mx-10">
//       <div className="border-r-black border-[2px] border-t-transparent border-b-transparent border-l-transparent">
//         <InputForm onSave={handleSave} />
//       </div>

//       <div className="ml-7 ">
//         <h1 className="text-3xl font-bold mb-6">Customers</h1>
//         <ul className="flex items-center text-[gray] gap-[180px] text-[20px] font-mono">
//           <li className="mr-[3px]">Name</li>
//           <li className="mr-[3px]">Company</li>
//           <li className="mr-[100px]">Email</li>
//           <li className="mr-[3px]">Admin</li>
//           <li>Actions</li>
//         </ul>

//         {dataArray.map((data) => (
//           <DisplayData key={data.id} data={data} onButtonClick={handleChange} onDelete={handleDelete} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;


























// import React, { useState } from 'react';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddTask = () => {
//     if (inputValue) {
//       setTasks([...tasks, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleUpdateTask = (index) => {
//     const updatedTask = prompt('Введите новое значение задачи:');
//     if (updatedTask) {
//       const updatedTasks = [...tasks];
//       updatedTasks[index] = updatedTask;
//       setTasks(updatedTasks);
//     }
//   };

//   return (
//     <div>
//       <input value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleAddTask}>Добавить задачу</button>

//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button onClick={() => handleUpdateTask(index)}>Изменить</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
