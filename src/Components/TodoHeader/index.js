import { CreateTodo } from '../CreateTodo';
import  './TodoHeader.css';
function TodoHeader(){
    return (
        <header className='todo-header'>
            <h1>To Do Machine</h1>
            <CreateTodo />
        </header>        
    );
}

export {TodoHeader};