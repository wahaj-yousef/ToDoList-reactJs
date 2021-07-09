import { useState } from "react";

import "./App.css";
import Form from "./Component/Form";
import List from "./Component/List";

function App() {
  const [list, setlist] = useState([
    {
      content: "workout",
      status: false,
    },
    {
      content: "meeting",
      status: false,
    },
  ]);
  const [count, setCount] = useState(list.length);

  const addtask = (task_content) => {
    setlist([
      ...list,
      {
        content: task_content,
        status: false,
      },
    ]);
    setCount(count + 1);
  };

  const markComplete = (index) => {
    const all = [...list];

    all[index].status = !all[index].status;
    setlist([...all]);
    if (!all[index].status) setCount(count + 1);
    else setCount(count - 1);
  };

  const trashTask = (index, task_id) => {
    const all = [...list];

    try {
      let task = document.getElementById(task_id);
      setTimeout(() => {
        all.splice(index, 1);

        task.remove();
      }, 100);
      setlist([...list]);
      if (!all[index].status) setCount(count - 1);
    } catch (error) {}
    setlist([...all]);
  };

  const clearAll = () => {
    try {
      setTimeout(() => {
        var elements = document.getElementsByClassName("todo-list");
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }
        list.length = 0;
      }, 100);
    } catch (error) {}
    setlist([...list]);
  };

  return (
    <div className="App">
      <div className="form">
        <Form addtask={addtask} clearAll={clearAll} count={count} />
        <List list={list} markComplete={markComplete} trashTask={trashTask} />
      </div>
    </div>
  );
}

export default App;
