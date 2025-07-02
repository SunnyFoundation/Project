import React from 'react'
import './Editor.css'
import { useState } from 'react'

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");

    const onsubmit = () => {
        if (content === "") {
            alert("Please enter a todo item");
            return;
        }
        onCreate(content);
        setContent("");
        console.log("Todo item added:", content);
    }

    const onChange = (e) => {
        setContent(e.target.value);
        console.log(content);
    }
  return (
    <div className='editor'>
        <input value={content} onChange={onChange} placeholder='New Todo' type="text" />
        <button onClick={onsubmit} className='add'>Add</button>
    </div>
  )
}

export default Editor