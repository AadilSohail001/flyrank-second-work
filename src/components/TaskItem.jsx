function TaskItem({
    task,
    deleteTask,
    editTask,
    toggleComplete,
}) {
    return (
        <li>
            <span className={task.completed ? "completed" : ""}>
                {task.text}
            </span>

            <div className="buttons">
                <button onClick={() => toggleComplete(task.id)}>
                    {task.completed ? "Undo" : "Complete"}
                </button>

                <button onClick={() => editTask(task)}>
                    Edit
                </button>

                <button onClick={() => deleteTask(task.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TaskItem;