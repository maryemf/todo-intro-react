import { CreateTodo } from '../CreateTodo';
import  './TodoHeader.css';
function TodoHeader({todos, saveTodos}){
    return (
        <header className='todo-header'>
            <h1>To Do List</h1>
            <CreateTodo 
                todos={todos}
                saveTodos={saveTodos}
            />
        </header>        
    );
}

export {TodoHeader};