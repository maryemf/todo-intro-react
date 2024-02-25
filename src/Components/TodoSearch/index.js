import { TodoContext } from '../../TodoContext';
import './TodoSearch.css';
import React, { useContext } from 'react';

function TodoSearch(){    
    const { searchValue, setSearchValue} = useContext(TodoContext);
    return (
        <input className="todo-search" placeholder="Buscar..."
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}/>
    );
}

export {TodoSearch};