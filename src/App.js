import React from 'react';
import ToDoList from './components/ToDoList';
import NoteList from './components/NoteList';

function App() {
  let items = [
    {
      id: 1,
      text:"Learn Javascript",
      completed: false
    },
    { id: 2,
      text:"Learn ReactJs",
      completed: false
    },
    { id: 3,
      text:"Build React App",
      completed: false
    }
  ];
  let title = "Things to do";

  let noteItems = [
    {
        id: 1,
        text:'Note item 1',
        completed: false
    },
    {
        id: 2,
        text:'Note item 2',
        completed: false
    },
    {
        id: 3,
        text:'Note item 3',
        completed: false
    }
  ];

  let noteTitle = "Note List";

    return (
     <div className="container">
       <div className="row">
          {/* <ToDoList title={title} items={items}/> */}
          <NoteList noteTitle={noteTitle} noteItems={noteItems}/>
       </div>
     </div>
    );
  
}

export default App;
