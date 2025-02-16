import React, { useEffect, useState } from 'react';
import { getTasks, updateTask, deleteTask } from '../../services/api';
import TaskItem from './TaskItem';
import AddTaskForm from './AddTaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getTasks();
      setTasks(tasksData);
    };
    fetchTasks();
  }, []);

  const handleComplete = async (id, status) => {
    const taskData = { status: status === 'pending' ? 'completed' : 'pending' };
    await updateTask(id, taskData);
    setTasks(tasks.map(task => (task._id === id ? { ...task, ...taskData } : task)));
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <AddTaskForm setTasks={setTasks} />
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
