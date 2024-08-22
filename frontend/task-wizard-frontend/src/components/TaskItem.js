import React from 'react';

function TaskItem(props) {
    return (
        <div>
            <h2>{props.task.name}</h2>
            <button>Delete</button>
        </div>
    );
}

export default TaskItem;
