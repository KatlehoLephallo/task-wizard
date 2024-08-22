// App.js
import React, { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import './App.css';


function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    const handleTaskCreate = async (newTask) => {
        setTasks([...tasks, newTask]);
        const response = await fetch('http://localhost:8080/tasks');
        const updatedTasks = await response.json();
        setTasks(updatedTasks);
    };

    const handleTaskDelete = async (id) => {
        await fetch(`http://localhost:8080/tasks/${id}`, {
            method: 'DELETE',
        });
        const response = await fetch('http://localhost:8080/tasks');
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
