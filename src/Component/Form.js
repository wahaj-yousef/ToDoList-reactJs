import React, { useState } from "react";

const Form = ({ addtask, clearAll, count }) => {
  const [value, setValue] = useState("");
  const [remove, setRemove] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (remove) {
      clearAll();
      setRemove(!value);
      return;
    }
    if (value === "") return;
    addtask(value);
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <header>
        <h1>ToDo List App </h1>
        <h3>
          using <span style={{ color: "blue" }}> React.js</span>
        </h3>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo-input"
          id="todo-input"
          onChange={handleChange}
          value={value}
          placeholder="Enter new task"
        ></input>

        <button className="todo-button" type="submit"></button>
        <div id="counter">
          <p class="text">Add Task</p>{" "}
          <p>
            {count <= 0 ? (
              <span class="msg">{`Enjoy your day :)\n No tasks for today`}</span>
            ) : (
              `You have ${count} tasks to do`
            )}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
