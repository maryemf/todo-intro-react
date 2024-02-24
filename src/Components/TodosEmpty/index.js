import React from 'react';
import './TodosEmpty.css';

function TodosEmpty(){    
    return (
        <div className='todos-empty'>
            <h2>¿No tienes nada que hacer?</h2>
            <h3>¡¡¡Seguro que si!!!</h3>
            <h4>¡Vamos! ¡Haz tu lista!</h4>
            <div className='arrow-content'>
                <div class="arrow">
                    <div class="curve"></div>
                    <div class="point"></div>
                </div>
            </div>
            
        </div>
    );
}

export {TodosEmpty};