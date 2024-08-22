import React, { useState } from 'react';

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
            <label>
                Task name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTaskForm;
