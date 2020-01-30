// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="Things to do">
//         <p>
//           Edit <code>src/App.js</code> and save to reload!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import TodoList from './TodoList'
import TodoEntryForm from './TodoEntryForm';

export default function App() {
  const [todos, setTodos] = useState([
    {id: 1, content: 'Meet Masao for Udon'},
    {id: 2, content: 'Fix up these horrible React notes'},
  ]);
  function deleteTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }
  function addTodo(todo) {
    setTodos(todos => [...todos, todo]);
  }
  return (
    <div className="App">
      <h1>Things To Do</h1>
      <TodoList todos={todos} delter={deleteTodo} />
      <TodoEntryForm adder={addTodo} />
    </div>
  );
}