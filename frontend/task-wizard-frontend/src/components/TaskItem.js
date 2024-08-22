// TaskItem.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TaskItem({ task, onTaskDelete }) {
    const handleDeleteClick = () => {
        onTaskDelete(task.id);
    };

    return (
        <div>
            <h2>{task.name}</h2>
            <button onClick={handleDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
}

export default TaskItem;
