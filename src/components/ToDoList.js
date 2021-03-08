import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList(props){
    const { title, items } = props;

    return(
        <div className="todolist">
        <h1>{title.toUpperCase()}</h1>
        <ul className="list-unstyled">
           { items.map(
               item => <ToDoItem data={item}/>
            )
           }
        </ul>
      </div>
    );  
}


export default ToDoList;

