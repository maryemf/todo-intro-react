import React from  'react';
import { TodoIcon } from './index.js';
function IncompleteIcon({onComplete}) {
    return (
        <TodoIcon
            type="oval"
            color='gray'
            onClick={onComplete}
        />
    );
}

export {IncompleteIcon}