import './CreateTodo.css';
import React, { useState } from 'react';

function CreateTodo({todos, saveTodos}){
    const initTodo = {'text': '', completed: false};
    const [todo, setTodo] = useState(initTodo);
    const [exist, setExist] = useState(false);
    

    const addTodo  = (text) => {
        checkExist(text);
        if(text.length > 0 && !exist){            
            const newTodos = [...todos, todo];
            setTodo(initTodo)
            saveTodos(newTodos);
        } 
    }

    const checkExist = (text) => {
        setExist(todos.filter(todo=> todo.text === text).length > 0);
    }

    return (
        <>
        <div className='create-todo'>
            <input 
                placeholder='Hacer algo...' 
                className={`input flex ${exist ? 'duplicated' : ''}` }  
                value={todo.text}
                onChange={e => {
                    setTodo({'text': e.target.value, completed: false})
                    checkExist(e.target.value);
                }}
                onKeyDown={(event) => {         
                    if (event.key === 'Enter') {
                        addTodo(todo.text)
                    }               
                }}
            />
            
            <span className='button' onClick={()=> {
                if(!todo) return;
                addTodo(todo.text);                
            }}>+</span>
        </div>
        <div className={`duplicated-message ${!exist ? 'd-none' : ''}`}>Taks exist!</div>
        </>
    );
}

export {CreateTodo};

/*
evitar usar el local storage en cada renderizacion
const [todos, saveTodos] = useState(() => {
  const todosFromStorage = window.localStorage.getItem('TODOS_V1')
  if (todosFromStorage) return JSON.parse(todosFromStorage)
  return []
})

*/