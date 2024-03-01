import Header from "./components/header/Header.jsx";
import List from "./components/list/List.jsx";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { useDetectDate } from "./hooks/useDetectDate.js";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const detectDate = useDetectDate();

  const addTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
        deadline: detectDate(taskTitle),
      },
    ]);
    console.log(tasks);
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
