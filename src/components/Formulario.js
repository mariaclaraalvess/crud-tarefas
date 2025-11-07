import { useState } from "react";
import styled from "styled-components";
import { Tema } from "../Tema";

const Formulario = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 14px;
  background: ${Tema.card};
  border: none;
  border-radius: 8px;
  color: ${Tema.text};
  outline: none;
`;

const Button = styled.button`
  background: ${Tema.purple};
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    background: ${Tema.purpleDark};
  }
`;

export default function TaskForm({ setTasks }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return;

        setTasks(prev => [...prev, { id: Date.now(), text, done: false }]);
        setText("");
    }

    return (
        <Formulario onSubmit={handleSubmit}>
            <Input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Digite uma tarefa..."
            />
            <Button>Adicionar</Button>
        </Formulario>
    );
}
