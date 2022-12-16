import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTaskHandeler = () => {
    const task = {
      id: new Date().getTime().toString(),
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTaskHandeler = (taskId) => {
    const taskData = todoList.filter((task) => task.id !== taskId);
    setTodoList(taskData);
  };
  // console.log(todoList);

  const completeHandeler = (taskId) => {
    setTodoList(
      todoList.map((task) => {
        if (taskId === task.id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input className="addinp" onChange={handleChange} />
        <button onClick={addTaskHandeler}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          // const i = new Date().getTime().toString();
          return (
            <div
              key={task.id}
              style={{
                background: task.completed
                  ? "linear-gradient(45deg, #BDFAA3, #33CCFF)"
                  : "rgb(204, 230, 255)",
              }}
            >
              <p>{task.taskName}</p>
              <button
                className="delete"
                onClick={() => deleteTaskHandeler(task.id)}
              >
                Delete
              </button>
              <button
                className="complete"
                onClick={() => completeHandeler(task.id)}
              >
                Completed
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
