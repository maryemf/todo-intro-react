import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider( {children} ) {
    const storageName = 'ReactTODO_V1';

    const [searchValue, setSearchValue] = React.useState('');
    const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage(storageName, []); // esto es item, saveItem se le coloca el nombre que se necesite

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    const filteredTodos = todos.filter(item => item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

    const [exist, setExist] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const completeTodo = (text) => {
        const newTodos = todos.map( todo => { 
        if ( todo.text === text ) {
            return {
            ...todo, completed: !todo.completed
            }
        } else {
            return todo;
        }
        });
        saveTodos(newTodos);
    }

    const removeTodo = (text) => {
        const newTodos = todos.filter((todo) => todo.text !== text)
        saveTodos(newTodos);
    }

    const checkExist = (text) => {
        setExist(todos.filter(todo=> todo.text === text).length > 0);
    }

    const addTodo  = (text) => {
        checkExist(text);
        if(text.length > 0 && !exist){            
            const newTodos = [...todos, {'text': text, completed: false}];
            saveTodos(newTodos);
        } 
    }

    return (
        <TodoContext.Provider value={{
            loading, error, todos, saveTodos, totalTodos, completedTodos, searchValue, setSearchValue, filteredTodos, completeTodo, removeTodo,
            exist, checkExist, addTodo, openModal, setOpenModal
            }}>
            {children}
        </TodoContext.Provider>
    );

}

export {TodoContext, TodoProvider};