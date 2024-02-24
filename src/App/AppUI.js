import React from 'react';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoList/TodoItem';
import { TodoHeader } from '../Components/TodoHeader';
import { TodosLoading } from '../Components/TodosLoading';
// import { TodosLoadingSk } from '../Components/TodosLoadingSk';
import { TodosError } from '../Components/TodosError';
import { TodosEmpty } from '../Components/TodosEmpty';

function AppUI({loading, error, todos, saveTodos, totalTodos, completedTodos, searchValue, setSearchValue, filteredTodos, completeTodo, removeTodo})
{    
    return (
        <React.Fragment>
          <TodoHeader
            todos={todos}
            saveTodos={saveTodos}
          />
          
          {loading && <TodosLoading />}
          {/* Skeleton */}
          {/* {loading && 
          <>
            <TodosLoadingSk />
            <TodosLoadingSk />
            <TodosLoadingSk />
          </>
          } */}
          
          {error && <TodosError />}
          {(!loading && !error) &&  
            <>
                {totalTodos > 0 && 
                <>
                    <TodoCounter total={totalTodos} completed={completedTodos} />
                    <TodoSearch 
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
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
        </React.Fragment>
    );
}

export {AppUI}
