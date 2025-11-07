// List.js
export default function TaskList({ tasks, setTasks }) {
    function toggleTask(id) {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    }

    function deleteTask(id) {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    if (tasks.length === 0) {
        return <p className="text-[var(--text-dim)]">Nenhuma tarefa adicionada ainda.</p>;
    }

    return (
        <ul className="space-y-3">
            {tasks.map(task => (
                <li
                    key={task.id}
                    className="flex justify-between items-center p-3 rounded-lg bg-[var(--card)]"
                >
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => toggleTask(task.id)}
                            className="w-5 h-5 accent-[var(--purple)]"
                        />
                        <span
                            className={`${task.done ? "line-through text-[var(--text-dim)]" : ""
                                }`}
                        >
                            {task.text}
                        </span>
                    </label>

                    <button
                        onClick={() => deleteTask(task.id)}
                        className="text-red-500 hover:text-red-600"
                    >
                        🗑
                    </button>
                </li>
            ))}
        </ul>
    );
}
