// TaskItem.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Components.css";

function TaskItem({ task, onTaskDelete }) {
    const handleDeleteClick = () => {
        onTaskDelete(task.id);
    };

    return (
        <div className='item-div'>
            <h2 className='task-name'>{task.name}</h2>
            <button className='delete-button' onClick={handleDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
}

export default TaskItem;
