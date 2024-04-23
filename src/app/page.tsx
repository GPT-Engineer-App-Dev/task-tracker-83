"use client";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(), // simple unique id generator
        text: input,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-6">Todo App</h1>
      <div className="flex justify-center mb-4">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="border-2 border-gray-300 p-2 rounded-l-lg focus:outline-none focus:border-blue-500" placeholder="Add a new todo" />
        <button onClick={handleAddTodo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
          Add
        </button>
      </div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded-lg">
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
