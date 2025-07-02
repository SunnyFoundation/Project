import React from 'react'
import './List.css'
import ToDoItem from './ToDoItem'
import { useState } from 'react'

const List = ({todos, onUpdate , onDelete, onEdit}) => {

    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }

    const getFilteredTodos = () => {
        if (search === "") {
            return todos; 
        } 
        return todos.filter(todo => 
            todo.content.toLowerCase()
            .includes(search.toLowerCase()) 
        );
    }

    const filteredTodos = getFilteredTodos();


  return (
    <div className='list'>
        <h4>ToDoList</h4>
        <input value={search} onChange={onChangeSearch} placeholder='Search your Memo' type="text" />
        <div>
            {filteredTodos.map((todo)=>{
                return <ToDoItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete} onEdit={onEdit} />
            })}
      
         </div>
    </div>
  )
}

export default List