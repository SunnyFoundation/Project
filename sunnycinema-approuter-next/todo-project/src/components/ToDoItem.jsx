import React from 'react'
import './ToDoItem.css'

const ToDoItem = ({todo, onUpdate, onDelete, onEdit}) => {

    const onChangeCheckbox = () => {
        onUpdate(todo.id);
    }

    const onClickDelete = () => {
        onDelete(todo.id);
    }

    const onClickEdit = () => {
        const newContent = prompt("Edit your todo item", todo.content);
        if (newContent && newContent.trim() !== "") {
            onEdit(todo.id, newContent);
        } else {
            alert("Please enter a valid todo item");
        }
    }

  return (
    <div className='todo-item'>
        <input onChange={onChangeCheckbox} checked={todo.isDone} type="checkbox" />
        <div className='content'>{todo.content} </div>
        <div className='date'>{new Date(todo.date).toLocaleDateString()}</div>
        <button onClick={onClickDelete} className='delete'>Delete</button>
        <button onClick={onClickEdit} className='edit'>Edit</button>
    </div>
  )
}

export default ToDoItem