import { TodoContext } from '../../TodoContext';
import './CreateTodo.css';
import React, { useContext, useState } from 'react';

function CreateTodo() {
    const initTodo = {'text': '', completed: false};
    const [todo, setTodo] = useState(initTodo);
    const {exist, checkExist, addTodo} = useContext(TodoContext);

    const onChange = (event) => {
        setTodo({'text': event.target.value, completed: false})
        checkExist(event.target.value);
    }

    const onKeyDown = (event) => {         
        if (event.key === 'Enter') {
            addTodo(todo.text);
            setTodo(initTodo);
        }               
    }

    const onSave = ()=> {
        if(!todo) return;
        addTodo(todo.text);
        setTodo(initTodo);                
    }
    
    return (
        <>
        <div className='create-todo'>
            <input 
                placeholder='Hacer algo...' 
                className={`input flex ${exist ? 'duplicated' : ''}` }  
                value={todo.text}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            
            <span className='button' onClick={onSave}>+</span>
        </div>
        <div className={`duplicated-message ${!exist ? 'd-none' : ''}`}>Taks exist!</div>
        </>
    );
}

export {CreateTodo};