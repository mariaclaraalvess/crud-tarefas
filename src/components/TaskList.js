function TaskList({ tasks, setTasks }) {
    function handleDelete(id) {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => handleDelete(task.id)}>Excluir</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
