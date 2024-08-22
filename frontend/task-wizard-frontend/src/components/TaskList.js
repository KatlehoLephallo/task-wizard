import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onTaskDelete }) {
    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onTaskDelete={onTaskDelete} />
            ))}
        </div>
    );
}

export default TaskList;
