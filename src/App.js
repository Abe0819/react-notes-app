import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';


const App = () => {
  const [notes, setNotes] = useState([
  {
    id: nanoid(),
    title: 'Default Title',
    text: 'Title has to be under 20 characters! Also, auto correct messes with the app. If it doesn\'t let you add your note, please rewrite it. ',
    date: '11/02/21',
  },
]);

  const [searchText, setSearchText] = useState('');

  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(()=> {
    const savedNotes = JSON.parse(
      localStorage.getItem('notes-data')
    );

    if(savedNotes) {
      setNotes(savedNotes)
    }

  },[])

  useEffect(()=> {  
    localStorage.setItem(
      'notes-data', 
      JSON.stringify(notes)
    );
  }, [notes]);


  const addNote = (title,text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkTheme && 'darktheme'}`}>
      <div className="container">
        <Header handleToggleDarkTheme={setDarkTheme} />
        <Search
          handleSearchTitle={setSearchText}
        />
        <NotesList 
          notes={notes.filter((note) => 
            note.title.toLowerCase().includes(searchText)
            )}  
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />  
      </div>
    </div>
  )
}

export default App;