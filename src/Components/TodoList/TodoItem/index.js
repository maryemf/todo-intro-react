import { CompleteIcon } from '../../TodoIcons/CompleteIcon';
import { DeleteIcon } from '../../TodoIcons/DeleteIcon';
import { IncompleteIcon } from '../../TodoIcons/IcompleteIcon';
import './TodoItem.css';

const completeIcons = {
  true: (onComplete) => <CompleteIcon   onComplete={onComplete}/>,
  false: (onComplete) => <IncompleteIcon onComplete={onComplete} />
};
function TodoItem(props) {
  return (
    <li className='todo-item'>
      {completeIcons[props.completed] (props.onComplete)}
      <p className={`todo-item-p ${props.completed && "todo-item-p--complete"}`} >{props.text}</p>
      <DeleteIcon onRemove={props.onRemove} />
    </li>
  );
}

export {TodoItem}