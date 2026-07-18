import { useState, useEffect } from "react";

function TaskForm({ addTask, currentTask, editId }) {
    const [text, setText] = useState("");

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setText(currentTask);
    }, [currentTask]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.trim()) return;

        addTask(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="input-section">
            <input
                type="text"
                placeholder="Enter Task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button type="submit">
                {editId ? "Update" : "Add"}
            </button>
        </form>
    );
}

export default TaskForm;