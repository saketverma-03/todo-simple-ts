import { useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";

type Todo = {
  id: string;
  isCompleted: boolean;
  text: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = (): void => {
    const todo = {
      id: nanoid(),
      isCompleted: false,
      text: todoText,
    };
    setTodos([...todos, todo]);
    setTodoText("");
  };

  const handleClickOnTodo = (id: string, isChecked: boolean): void => {
    const temp: Todo[] = [];

    // filtering array
    todos.filter((todo) => {
      if (todo.id !== id) {
        temp.push({ ...todo });
      } else
        temp.push({ id: todo.id, text: todo.text, isCompleted: isChecked });
    });
    setTodos([...temp]);
  };
  return (
    <>
      <h1>A simple Todo App</h1>
    <div className="container_enter_todos" >  
      <input
        type="text"
        name="todo-input"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <input type="button" value="Add todo" onClick={handleAddTodo} />
      </div>
      <div className="container_list_todos" > 
        {todos.map((todo) => {
          return (
            <label key={todo.id}>
              <input
                type="checkbox"
                name=""
                id=""
                onClick={(e) => handleClickOnTodo(todo.id, e.target.checked)}
              />
              {`${todo.text} + "--" + ${todo.isCompleted}`}
            </label>
          );
        })}
      </div>
    </>
  );
}

export default App;
