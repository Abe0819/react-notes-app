import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const titleLimit = 20;
    const characterLimit = 200;

    const handleChange = (event) => {
        if(titleLimit - event.target.value.length > 0) {
            setNoteTitle(event.target.value);
        };
    };

    const handleChange1 = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        };
    };

    const handleSaveClick = () => {
        if(noteTitle.trim().length & noteText.trim().length > 0){
            handleAddNote(noteTitle , noteText);
            setNoteTitle('');
            setNoteText('');
        };
    };


    return (
        <div className="note new">
            <textarea
            placeholder="Add Title"
            rows="2"  
            value={noteTitle}
            onChange={handleChange}
            ></textarea>    
            <textarea
            placeholder="Type to add a note... " 
            cols="10" 
            rows="8"
            value={noteText}
            onChange={handleChange1}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button class="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;