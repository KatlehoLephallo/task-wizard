import React, { useState } from 'react';
import "./Components.css";

function AddTaskForm({ onTaskCreate }) {
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8080/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        const task = await response.json();
        onTaskCreate(task);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className='label'>
                <input className='label-input' type="text" placeholder='What do you need to do?' value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <button className='label-button' type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskForm;
