import { useState } from "react";

function TaskForm({ setTasks }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return;

        setTasks(prev => [...prev, { id: Date.now(), text }]);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Digite uma tarefa"
            />
            <button>Adicionar</button>
        </form>
    );
}

export default TaskForm;
