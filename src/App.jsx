// import React, { useState } from 'react';


// const InputForm = ({ onSave }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const handleSave = () => {
//     onSave({ firstName, lastName });
//   };

//   return (
//     <div className=''> 
//       <input
//         type="text"
//         placeholder="Имя"
//         value={firstName}
//         onChange={(e) => setFirstName(e.target.value)}
//         className='rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3'
//       />
//       <input
//         type="text"
//         placeholder="Фамилия"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//         className='rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3'
//       />
//       <button onClick={handleSave} className='rounded border-[2px] border-black py-1 px-3'>Save</button>
//     </div>
//   );
// };


// const DisplayData = ({ data, onButtonClick }) => {
//   return (
//     <div className='mt-3'>
//       <p className='mb-2'>{data.firstName} {data.lastName}</p>
//       <button onClick={onButtonClick} className='rounded border-[2px] border-black py-1 px-3'>Change</button>
//     </div>
//   );
// };

// const App = () => {
//   const [data, setData] = useState(null);

//   const handleSave = (formData) => {
//     setData(formData);
//   };

//   const handleChange = () => {
//     // Здесь можно добавить логику изменения данных
//   };

//   return (
//     <div className="p-4">
//       <InputForm onSave={handleSave} />
//       {data && <DisplayData data={data} onButtonClick={handleChange} />}
//     </div>
//   );
// };

// export default App;





import React, { useState } from 'react';

const InputForm = ({ onSave }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSave = () => {
    onSave({ id: Date.now(), firstName, lastName });
    setFirstName('');
    setLastName('');
  };

  return (
    <div className='flex items-center'>
      <h3 className='mr-2'>Имя:</h3>
      <input
        type="text"
        placeholder="Имя"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className='rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3'
      />
      
      <h3 className='mr-2'>Фамилия:</h3>
      <input
        type="text"
        placeholder="Фамилия"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className='rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3'
      />
      <button onClick={handleSave} className='rounded border-[2px] border-black py-1 px-3'>Save</button>
    </div>
  );
};

const DisplayData = ({ data, onButtonClick }) => {
  const [editedData, setEditedData] = useState(data);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    onButtonClick(editedData);
    setIsEditing(false);
  };

  return (
    <div className='mt-3'>
      {isEditing ? (
        <div>
          <input
            type="text"
            placeholder="Имя"
            value={editedData.firstName}
            onChange={(e) => setEditedData({ ...editedData, firstName: e.target.value })}
            className="rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3"
          />
          <input
            type="text"
            placeholder="Фамилия"
            value={editedData.lastName}
            onChange={(e) => setEditedData({ ...editedData, lastName: e.target.value })}
            className="rounded border-[2px] py-1 px-4 border-[#aaaaaa] mr-3"
          />
          <button onClick={handleSave} className="rounded border-[2px] border-black py-1 px-3">Save</button>
        </div>
      ) : (
        <div>
          <p className="mb-2">{data.firstName} {data.lastName}</p>
          <button onClick={() => setIsEditing(true)} className="rounded border-[2px] border-black py-1 px-3">Change</button>
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

  return (
    <div className="p-4">
      <InputForm onSave={handleSave} />
      {dataArray.map((data) => (
        <DisplayData key={data.id} data={data} onButtonClick={handleChange} />
      ))}
    </div>
  );
};

export default App;









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
