import React, { useState } from 'react';

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
    <div className="">
      <h1 className='text-3xl font-bold mb-5'>Add customers</h1>

      <div className=''>
        <div>
          <h3 className="mr-2">Имя:</h3>
          <input
            type="text"
            name="firstName"
            placeholder="Имя"
            value={formData.firstName}
            onChange={handleChange}
            className="rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3"
          />
        </div>

        <div>
          <h3 className="mr-2 mt-3">Фамилия:</h3>
          <input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            value={formData.lastName}
            onChange={handleChange}
            className="rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3"
          />
        </div>
      </div>

      <div className='my-4'>
        <h3 className="mr-2">Компания:</h3>
        <input
          type="text"
          name="company"
          placeholder="Компания"
          value={formData.company}
          onChange={handleChange}
          className="rounded border-[2px] py-1 px-3 border-[#aaaaaa] mr-3"
        />
      </div>

      <div className="flex items-center my-5">
        <h3 className="mr-2">Роль:</h3>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3"
        >
          <option value="User">User</option>
          <option value="Administrator">Administrator</option>
        </select>
      </div>

      <div className='my-4'>
        <h3 className="mr-2">Почта:</h3>
        <input
          type="email"
          name="email"
          placeholder="Почта"
          value={formData.email}
          onChange={handleChange}
          className="rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3"
        />
      </div>

      <div className='my-3'>
        <h3 className="mr-2">Пароль:</h3>
        <input
          type="password"
          name="password"
          placeholder="Почта"
          value={formData.password}
          onChange={handleChange}
          className="rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3"
        />
        <p className='text-[12px] mt-[2px] text-[#9a9898]'>8+ characters</p>
      </div>


      <button onClick={handleSave} className="rounded border-[2px] border-black py-1 px-10 font-bold">
        Save
      </button>
    </div>
  );
};







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
      {/* <h1 className='text-3xl font-bold'>Customers</h1> */}
      {isEditing ? (
        <div className='flex items-center gap-[20px]'>
          <input
            type="text"
            name="firstName"
            placeholder="Имя"
            value={editedData.firstName}
            onChange={handleChange}
            className="py-1 px-4 bb mr-3"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            value={editedData.lastName}
            onChange={handleChange}
            className="py-1 px-4 bb mr-3"
          />
          <input
            type="text"
            name="company"
            placeholder="Компания"
            value={editedData.company}
            onChange={handleChange}
            className="py-1 px-4 bb mr-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Почта"
            value={editedData.email}
            onChange={handleChange}
            className="py-1 px-4 bb mr-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Почта"
            value={editedData.password}
            onChange={handleChange}
            className="py-1 px-4 bb mr-3"
          />
          <div className="flex items-center">
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
            <p className='mr-[110px]'>{data.firstName} {data.lastName}</p>
            <p className='mr-[170px]'>{data.company}</p>
            <p className='mr-[80px]'>{data.email}</p>
            <p className='mr-[100px]'>{data.role}</p>
          </div>

          <div className='flex gap-1'>
            <button onClick={() => setIsEditing(true)} className="">
              <img className='w-[22px]' src="https://i.imgur.com/uhmOPkK.png" />
            </button>
            <button onClick={handleDelete} className="ml-2">
              <img className='w-[25px]' src="https://i.imgur.com/9GlqGqs.png" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};





const App = () => {
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

      <div className='ml-5'>
        <h1 className='text-3xl font-bold mb-6'>Customers</h1>
        <ul className='flex items-center text-[gray] gap-[180px]'>
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
};

export default App;





























// import React, { useState } from 'react';


// const InputForm = ({ onSave }) => {
//   const [formData, setFormData] = useState({ firstName: '', lastName: '', company: '', email: '', });

//   const handleSave = () => {
//     onSave({ id: Date.now(), ...formData });
//     setFormData({ firstName: '', lastName: '', company: '', email: '', });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   return (
//     <div className='flex items-center'>
//       <h3 className='mr-2'>Имя:</h3>
//       <input
//         type="text"
//         name="firstName"
//         placeholder="Имя"
//         value={formData.firstName}
//         onChange={handleChange}
//         className='rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3'
//       />

//       <h3 className='mr-2'>Фамилия:</h3>
//       <input
//         type="text"
//         name="lastName"
//         placeholder="Фамилия"
//         value={formData.lastName}
//         onChange={handleChange}
//         className='rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3'
//       />

//       <h3 className='mr-2'>Компания:</h3>
//       <input
//         type="text"
//         name="company"
//         placeholder="Компания"
//         value={formData.company}
//         onChange={handleChange}
//         className='rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3'
//       />

//       <h3 className='mr-2'>Почта:</h3>
//       <input
//         type="email"
//         name="email"
//         placeholder="Почта"
//         value={formData.email}
//         onChange={handleChange}
//         className='rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3'
//       />

//       <h3 className='mr-2'>Пароль:</h3>
//       <input
//         type="password"
//         name="password"
//         placeholder="Пароль"
//         value={formData.password}
//         onChange={handleChange}
//         className='rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3'
//       />
//       <button onClick={handleSave} className='rounded border-[2px] border-black py-1 px-3'>Save</button>
//     </div>
//   );
// };

// const DisplayData = ({ data, onButtonClick }) => {
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

//   return (
//     <div className='mt-3'>
//       {isEditing ? (
//         <div>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="Имя"
//             value={editedData.firstName}
//             onChange={handleChange}
//             className="rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3"
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Фамилия"
//             value={editedData.lastName}
//             onChange={handleChange}
//             className="rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3"
//           />
//           <input
//             type="text"
//             name="company"
//             placeholder="Компания"
//             value={editedData.company}
//             onChange={handleChange}
//             className="rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Почта"
//             value={editedData.email}
//             onChange={handleChange}
//             className="rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3"
//           />
//           <button onClick={handleSave} className="rounded border-[2px] border-black py-1 px-3">Save</button>
//         </div>
//       ) : (
//         <div>
//           <div>
//             <ul className='flex items-center gap-3'>
//               <li>
//                 <img src="" />
//                 <p>{data.firstName}</p>
//               </li>
//               <li>
//                 <img src="" />
//                 <p>{data.lastName}</p>
//               </li>
//               <li>
//                 <img src="" />
//                 <p>{data.company}</p>
//               </li>
//               <li>
//                 <img src="" />
//                 <p>{data.email}</p>
//               </li>
//               <li>
//                 <img src="" />
//                 <p>{data.password}</p>
//               </li>
//             </ul>
//           </div>
//           {/* <p className="mb-2">{data.firstName} {data.lastName} {data.company} {data.email} {data.password}</p> */}
//           <button onClick={() => setIsEditing(true)} className="rounded border-[2px] border-black py-1 px-3">Change</button>
//         </div>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   const [dataArray, setDataArray] = useState([]);

//   const handleSave = (formData) => {
//     setDataArray((prevDataArray) => [...prevDataArray, formData]);
//   };

//   const handleChange = (editedData) => {
//     setDataArray((prevDataArray) =>
//       prevDataArray.map((data) => (data.id === editedData.id ? { ...editedData } : data))
//     );
//   };

//   return (
//     <div className="p-4">
//       <InputForm onSave={handleSave} />
//       {dataArray.map((data) => (
//         <DisplayData key={data.id} data={data} onButtonClick={handleChange} />
//       ))}
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
