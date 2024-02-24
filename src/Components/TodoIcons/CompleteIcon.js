import React from  'react';
import { TodoIcon } from './index.js';
function CompleteIcon({onComplete}) {
    return (
        <TodoIcon
            type="check"
            color='green'
            onClick={onComplete}
        />
    );
}

export {CompleteIcon}