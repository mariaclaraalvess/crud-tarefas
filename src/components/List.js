import React from "react";
import TaskItem from "./Item";

export default function TaskList({ tasks = [], setTasks }) {
    return (
        <>
            {tasks.length === 0 ? (
                <p style={{ color: "#b9b4c9", textAlign: "center" }}>Nenhuma tarefa</p>
            ) : (
                tasks.map(task => (
                    <TaskItem key={task.id} task={task} setTasks={setTasks} />
                ))
            )}
        </>
    );
}
