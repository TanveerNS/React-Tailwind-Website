import React, { useState } from 'react';
import { addTask } from '../../services/api';

const AddTaskForm = ({ setTasks }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description.trim()) {
      alert('Task description cannot be empty');
      return;
    }

    const task = { description, status: 'pending' };
    const newTask = await addTask(task);

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setDescription('');
  };

  return (
    <div>
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
