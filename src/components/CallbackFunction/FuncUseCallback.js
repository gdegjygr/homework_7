import React, { useCallback, useEffect, useState } from "react";

const todos = [
  {id: 1, title: 'Todo 1'},
  {id: 2, title: 'Todo 2'},
  {id: 3, title: 'Todo 3'},
  {id: 4, title: 'Todo 4'},
  {id: 5, title: 'Todo 5'},
]

const App = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(100)

  const getTodos = useCallback(() => {
    return todos[count]
  }, [count])

  return (
    <div>
      <div>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        <br />
        Count Two: {countTwo}
        <button onClick={() => setCountTwo(countTwo - 1)}>+</button>
        <br />
        <TodosList getTodos={getTodos}/>
      </div>
    </div>
  );
};

const TodosList = ({getTodos}) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log('getTodos function is called.')
    setTodos([...todos, getTodos()])
  }, [getTodos])

  return (
    <>
    {todos.map(todo => <span key={todo.id}>{todo.title}</span>)}
    </>
  )
}

export default App