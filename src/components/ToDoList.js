import React from 'react';
import ToDoItem from './ToDoItem';
import Header from './Header';
import Footer from './Footer';

function ToDoList(props){
    const { title, items } = props;
    const itemCount = items.length;

    return(
        <div className="todolist">
        <Header title= {title}/>
        <ul className="list-unstyled">
           { items.map(
               item => <ToDoItem data={item}/>
            )
           }
        </ul>
        <Footer count={itemCount}/>
      </div>
    );  
}


export default ToDoList;

