import React from 'react';
import NoteItem from './NoteItem';

function NoteList(props){
    const {noteTitle, noteItems} = props;

    return(
            <div className="notelist">
                <h1 className="text-center"> {noteTitle.toUpperCase()} </h1>
                <ul className="list-unstyled">
                {
                    noteItems.map(noteItem => <NoteItem data={noteItem}/> )
                }

                </ul>
            </div>
                       
    );
}

export default NoteList;