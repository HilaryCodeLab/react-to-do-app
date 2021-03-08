import React from 'react';

function NoteItem(props){
    const {data} = props;
    return(
        <li key={data.id} className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input type="checkbox" value=""/>{data.text} 
                </label>
            </div>
        </li>
    )
    
}

export default NoteItem;