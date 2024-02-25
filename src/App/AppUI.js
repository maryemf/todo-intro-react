/* eslint-disable no-lone-blocks */
import React, { useContext } from 'react';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoList/TodoItem';
import { TodoHeader } from '../Components/TodoHeader';
import { TodosLoading } from '../Components/TodosLoading';
// import { TodosLoadingSk } from '../Components/TodosLoadingSk';
import { TodosError } from '../Components/TodosError';
import { TodosEmpty } from '../Components/TodosEmpty';
import { TodoContext } from '../TodoContext';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { Modal } from '../Components/Modal';
import { TodoForm } from '../Components/TodoForm';

function AppUI()
{    
    const {loading, error, totalTodos, filteredTodos, completeTodo, removeTodo, openModal} = useContext(TodoContext)
    return (
        <React.Fragment>
          <TodoHeader />          
          {loading && <TodosLoading />}                    
          {error && <TodosError />}
          {(!loading && !error) &&  
            <>
                {totalTodos > 0 && 
                <>
                    <TodoCounter />
                    <TodoSearch />
                </>
                }
                <TodoList>
                    {(!loading && !filteredTodos.length) && <TodosEmpty />}
                    {filteredTodos.map( todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onRemove={() => removeTodo(todo.text)}
                    />
                    ))}
                </TodoList>
            </>
            }
            {/* <CreateTodoButton />
            {openModal && 
                <Modal>
                    <TodoForm />
                </Modal>
            } */}
             
        </React.Fragment>
    );
}

export {AppUI}
