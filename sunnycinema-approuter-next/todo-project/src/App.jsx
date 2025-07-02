import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"
import "./App.css"
import React, { useRef, useState } from 'react'




 const mockData = [
    {
      id : 0,
      isDone : false,
      content : "Learn React",
      date : new Date().getTime(),
    },
    {
      id : 1,
      isDone : false,
      content : "Learn JavaScript",
      date : new Date().getTime(),
    },
  ];

function App() {
 

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(2);


  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([...todos, newTodo]);
  };

const onUpdate = (id) => {
  setTodos(
    todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    })
  );

}

   const onDelete = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
}

const onEdit = (id, newContent) => {
  setTodos(
    todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, content: newContent };
      }
      return todo;
    })
  );
}




  return (
    <>
     
      <div className="container"> 
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} onEdit={onEdit} />
      </div>
      
    </>
  )
}

export default App
