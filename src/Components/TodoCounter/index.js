import { useContext } from 'react';
import  './TodoCounter.css';
import { TodoContext } from '../../TodoContext';
function TodoCounter(){
    const {totalTodos:total, completedTodos:completed} = useContext(TodoContext);
    // const  percentage = ((completed / total) * 100).toFixed(2);
    const message = total === completed 
        ? 'No tienes TODOs pendientes!' 
        : completed === 0 ? `Tienes <span>${total}</span> TODOs pendientes` : `Completaste <span>${completed}</span> de <span>${total}</span> TODOs`
    return (
        <h2 className='todo-counter' dangerouslySetInnerHTML={{__html: message}}></h2>
    );
}

export {TodoCounter};