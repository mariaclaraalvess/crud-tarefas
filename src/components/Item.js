import { useState } from "react";
import styled from "styled-components";
import { Tema } from "../Tema";

const Card = styled.div`
  background: ${Tema.card};
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Text = styled.span`
  flex: 1;
  color: ${props => (props.done ? Tema.textDim : Tema.text)};
  text-decoration: ${props => (props.done ? "line-through" : "none")};
`;

const IconBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${Tema.textDim};
  font-size: 18px;

  &:hover {
    color: ${Tema.purple};
  }
`;

export default function TaskItem({ task, setTasks }) {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(task.text);

    function toggleDone() {
        setTasks(prev =>
            prev.map(t => (t.id === task.id ? { ...t, done: !t.done } : t))
        );
    }

    function saveEdit() {
        setTasks(prev =>
            prev.map(t => (t.id === task.id ? { ...t, text: value } : t))
        );
        setEditing(false);
    }

    function remove() {
        setTasks(prev => prev.filter(t => t.id !== task.id));
    }

    return (
        <Card>
            <IconBtn onClick={toggleDone}>✔</IconBtn>

            {editing ? (
                <input value={value} onChange={e => setValue(e.target.value)} />
            ) : (
                <Text done={task.done}>{task.text}</Text>
            )}

            {editing ? (
                <IconBtn onClick={saveEdit}>💾</IconBtn>
            ) : (
                <IconBtn onClick={() => setEditing(true)}>✏️</IconBtn>
            )}

            <IconBtn onClick={remove}>🗑</IconBtn>
        </Card>
    );
}
