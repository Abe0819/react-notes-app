import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, title, text, date, handleDeleteNote }) => {    
    return (
        <div className="note">
            <div className="note-container">
                <h2 id="title">{title}</h2>
                <span>{text}</span>
            </div>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever 
                    onClick={()=> handleDeleteNote(id)}
                    className="delete-icon"
                />
            </div>
        </div>
    )
}

export default Note;