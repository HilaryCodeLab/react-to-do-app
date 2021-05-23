import React from 'react';
import Checkbox from './CheckBox';

function ToDoItem(props){
    const {data, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);

    return(
        <li key={data.id} className="ui-state-default">
        <div className="checkbox">
          <label>
            <Checkbox checked={data.completed} onChange= {handleChange}/> {data.text}
          </label>
        </div>
      </li>
    );
}

export default ToDoItem;