import React from 'react';

import { useLocalStorage } from '../Hooks/useLocalStorage';
import { AppUI } from './AppUI';


function App() {
  const storageName = 'ReactTODO_V1';

  const [searchValue, setSearchValue] = React.useState('');
  const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage(storageName, []); // esto es item, saveItem se le coloca el nombre que se necesite

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter(item => item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  const completeTodo = (text) => {
    const newTodos = todos.map( todo => { // mi solucion
      if ( todo.text === text ) {
        return {
          ...todo, completed: !todo.completed
        }
      } else {
        return todo;
      }
    });
    // const newTodos = [...todos];
    // const todoIdx = newTodos.findIndex( (todo) => todo.text === text);
    // newTodos[todoIdx].completed = !newTodos[todoIdx].completed;
    saveTodos(newTodos);
  }

  const removeTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text)
    saveTodos(newTodos);
  }
  return (
    <AppUI 
      loading={loading}
      error={error}
      todos={todos}
      saveTodos={saveTodos}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTodos={filteredTodos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
    />
  );

}


export default App;
