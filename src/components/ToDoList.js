import React from 'react';
import ToDoItem from './ToDoItem';
import Header from './Header';
import Footer from './Footer';
import {applyFilter} from './../services/filter';

function ToDoList(props){
    const { title, items, addNew, filter, changeFilter, changeStatus } = props;
    const count = items.length;

    const filteredList = applyFilter(items, filter);

    return(
        <div className="todolist">
          <Header title= {title} addNew={addNew}/>
          <ul className="list-unstyled">
            { 
              filteredList.length > 0 
              ?
              (
                filteredList.map(
                item => <ToDoItem key={item.id} data={item} changeStatus={changeStatus}/>)
              )
              :
              <p className="alert alert-info"> There are no items.</p>
            }
          </ul>
          <Footer {...{count, filter, changeFilter}}/>
      </div>
    );
    
}

export default ToDoList;

