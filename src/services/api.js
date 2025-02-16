import axios from 'axios';

// Set up API URL
const API_URL = 'http://localhost:5000/api';

// Get all tasks
export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

// Add a new task
export const addTask = async (task) => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};

// Update task by ID (mark as completed)
export const updateTask = async (id, task) => {
  const response = await axios.put(`${API_URL}/tasks/${id}`, task);
  return response.data;
};

// Delete task by ID
export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/tasks/${id}`);
  return response.data;
};
