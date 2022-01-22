import './ToDoList.scss';
import {useState, useEffect, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';

const ToDoList = () => {
  const firstRender = useRef(true);
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  const handleClick = event => {
    event.preventDefault()
    if (text.trim() === '') return;
    setList([...list, {text: text, id: uuidv4()}])
    setText("")
  }

  const handleInput = event => setText(event.target.value)
  

  const handleDelete = id => {
    setList(list.filter(elem => elem.id !== id));
  }

  useEffect(() => {
    if(firstRender.current) firstRender.current = false; 
    else localStorage.setItem("toDoList", JSON.stringify([...list]));
    }, [list])

  useEffect(() => {
    if (localStorage.getItem("toDoList")) {
      const newList = localStorage.getItem("toDoList");
      setList(JSON.parse([...list, newList]))
    }
  }, [])

  return (
      <div className="todo-container">
        <h2>Today's task:</h2>
        <form onSubmit={handleClick}>
          <input type="text" placeholder="Add a todo.." value={text} onChange={handleInput} autoFocus />
          <button type="submit">Add</button>
        </form>
        {list.map(elem => (
                  <div className="todo" key={elem.id}>
                  <h4>{elem.text}</h4>
                  <i className="far fa-trash-alt" onClick={() => handleDelete(elem.id)}></i>
                  </div>
            ))}
      </div>
    
  );
};

export default ToDoList;
