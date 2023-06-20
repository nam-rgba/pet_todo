import { useState } from "react";
import Header from "./components/header/Header.jsx";
import List from "./components/list/List.jsx";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => {
      if (taskId !== task.id) {
        return task;
      }
    });
    setTasks(newTasks);
  };

  function toogleTaskCompletedById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask}></Header>
      <List
        tasks={tasks}
        onCompleted={toogleTaskCompletedById}
        onDelete={deleteTask}
      ></List>
    </>
  );
}

export default App;
