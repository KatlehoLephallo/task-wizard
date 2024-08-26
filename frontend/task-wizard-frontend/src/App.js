import React, { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import './App.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://taskwizard-backend-service:80/tasks';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(BACKEND_URL)
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    const handleTaskCreate = async (newTask) => {
        setTasks([...tasks, newTask]);
        const response = await fetch(BACKEND_URL);
        const updatedTasks = await response.json();
        setTasks(updatedTasks);
    };

    const handleTaskDelete = async (id) => {
        await fetch(`${BACKEND_URL}/${id}`, {
            method: 'DELETE',
        });
        const response = await fetch(BACKEND_URL);
        const updatedTasks = await response.json();
        setTasks(updatedTasks);
    };

    return (
        <div className="App-header">
            <h1 className='App-title'>Task Wizard</h1>
            <AddTaskForm onTaskCreate={handleTaskCreate} />
            <TaskList tasks={tasks} onTaskDelete={handleTaskDelete} />
        </div>
    );
}

export default App;
