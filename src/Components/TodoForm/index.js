import React, { useContext } from 'react';
import './TodoForm.css';
import { TodoContext } from '../../TodoContext';

function TodoForm() {
    const {setOpenModal, addTodo, exist, checkExist} = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onChange = (event) => {
        const value = event.target.value
        setNewTodoValue(value);
        checkExist(value);
        
    }

    const onSubmit = (event) => { 
        if (!exist && newTodoValue.length) {
            addTodo(newTodoValue);
            setOpenModal(false);
        }        
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    return (
        <form>
        <label>Escribe tu nuevo TODO</label>
        <textarea
          placeholder="Cortar cebolla para el almuerzo"
          value={newTodoValue}
          onChange={onChange}
          className={exist ? 'duplicated' : ''}
        />
        <label className={`${!exist ? 'd-none' : ''} duplicated-message`}>Este TODO ya existe!</label>
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
          >Cancelar</button>
          <button
            type="button"
            className="TodoForm-button TodoForm-button--add"
            onClick={onSubmit}
          >Añadir</button>
        </div>
      </form> 
    );
}

export {TodoForm}