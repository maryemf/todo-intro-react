import React from  'react';
import { TodoIcon } from './index.js';
function DeleteIcon({onRemove}) {
    return(
        <TodoIcon
            type="remove"
            color='gray'
            onClick={onRemove}
        />
    )
    
}

export {DeleteIcon}