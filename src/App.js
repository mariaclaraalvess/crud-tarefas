import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import List from "./components/List";
import styled from "styled-components";
import { Tema } from "./Tema";

const Container = styled.div`
  background: ${Tema.bg};
  min-height: 100vh;
  color: ${Tema.text};
  padding: 40px;
  font-family: "Poppins", sans-serif;
`;

const Title = styled.h1`
  color: ${Tema.purple};
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
`;

function App() {
  const [tasks, setTasks] = useState([]);

  // Carregar do LocalStorage ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Salvar no LocalStorage sempre que tasks mudar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container>
      <Title>Minhas Tarefas</Title>
      <Formulario setTasks={setTasks} />
      <List tasks={tasks} setTasks={setTasks} />
    </Container>
  );
}

export default App;
