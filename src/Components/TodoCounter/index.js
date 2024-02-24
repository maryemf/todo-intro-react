import  './TodoCounter.css';
function TodoCounter({total, completed}){
    // const  percentage = ((completed / total) * 100).toFixed(2);
    const message = total === completed 
        ? 'No tienes TODOs pendientes!' 
        : `Completaste <span>${completed}</span> de <span>${total}</span> TODOs`
    return (
        <h2 className='todo-counter' dangerouslySetInnerHTML={{__html: message}}></h2>
    );
}

export {TodoCounter};