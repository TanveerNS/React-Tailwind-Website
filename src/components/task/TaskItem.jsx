import React from 'react';

const TaskItem = ({ task, handleComplete, handleDelete }) => {
  console.log(task)
  return (
    <li>
      <div>
        <span>{task.description}</span>
        <span>({task.status})</span>
        <button onClick={() => handleComplete(task._id, task.status)}>
          {task.status === 'pending' ? 'Complete' : 'Undo'}
        </button>
        <button onClick={() => handleDelete(task._id)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
