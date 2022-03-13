import React, { useState, useEffect } from 'react';
import { getTasks } from './api/tasks-service';
import Task from './Task';

const TaskList = () => {
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const { data } = await getTasks();
        setTasks(data);
        setError('');
      } catch (error) {
        setError('Failed to fetch tasks');
      }
    }

    fetchTasks();
  }, []);

  return (
    <div>
      <h2 className="tasklist">Task List</h2>
      {error && <h4 className="error">{error}</h4>}
      {tasks.map((task, index) => (
        <Task task={task} key={index} />
      ))}
    </div>
  );
};

export default TaskList;
