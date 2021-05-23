import React, {Component} from 'react';
import ToDoList from './components/ToDoList';
import NoteList from './components/NoteList';
import {FILTER_ACTIVE} from './services/filter';
import {getAll, addToList, updateStatus} from './services/todo';

class App extends Component {
  constructor(){
    super();
    this.state = {
      filter: FILTER_ACTIVE,
      items : getAll()
      // noteItems: [
      //   {
      //       id: 1,
      //       text:'Note item 1',
      //       completed: false
      //   },
      //   {
      //       id: 2,
      //       text:'Note item 2',
      //       completed: false
      //   },
      //   {
      //       id: 3,
      //       text:'Note item 3',
      //       completed: false
      //   }
      // ] 
    }
  }
       
  render(){
    let title = "Things to do";

    let noteTitle = "Note List";
    return (
      <div className="container">
        <div className="row">
            <ToDoList title={title}
              addNew={this.addNew.bind(this)}
              changeFilter={this.changeFilter.bind(this)}
              changeStatus={this.changeStatus.bind(this)}
              {...this.state}
            />
            {/* <NoteList noteTitle={noteTitle} noteItems={noteItems}/> */}
        </div>
      </div>
      );
  
  };

  addNew(text){
    let updatedList = addToList(this.state.items, {text, completed: false});
    this.setState({
      items: updatedList
    });
  }

  changeFilter(filter){
    this.setState({filter});
  }

  changeStatus(itemId, completed){
    const updatedList = updateStatus(this.state.items, itemId, completed);
    
    this.setState({items: updatedList});

  }

}
export default App;
