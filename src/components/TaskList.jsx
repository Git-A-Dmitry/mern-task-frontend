import { useState, useEffect } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from '../App';
import preloader from '../assets/loader.gif';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    completed: false,
  });

  const { name } = formData;

  const handleInputChange = (e) => {
    // "e.target" has both "name" and "value" property
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    console.log(setFormData);
  };

  // Read Tasks
  const getTasks = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(`${API_URL}/api/tasks`);
      setTasks(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      setIsLoading(false);
    }
  };

  // getTasks will be triggered by the loading of the page
  useEffect(() => {
    getTasks();
  }, []);

  // Create a task
  const createTask = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (name === '') {
      return toast.error('Input field cannot be empty!');
    }

    try {
      await axios.post(`${API_URL}/api/tasks`, formData);
      toast.success('Task added successfully');
      setFormData({ ...formData, name: '' });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/tasks/${id}`);
      toast.success('Deleted successfully!');
      getTasks();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <p>Organize your daily routine with this awesome app</p>
      <TaskForm //
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
      />

      <div className='--flex-between --pb'>
        <p>
          <b>Total tasks:</b> 0
        </p>
        <p>
          <b>Completed tasks:</b> 0
        </p>
      </div>
      {/* <hr /> */}
      {isLoading && (
        <div className='--flex-center'>
          <img src={preloader} alt='preloader' />
        </div>
      )}
      {!isLoading && tasks.length === 0 ? (
        <p className='--py'>No task at the moment</p>
      ) : (
        <>
          {tasks.map((task, index) => {
            return (
              <Task //
                key={task._id}
                task={task}
                index={index}
                deleteTask={deleteTask}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default TaskList;
