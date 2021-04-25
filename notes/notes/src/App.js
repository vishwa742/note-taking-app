import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./Main";
import Side from "./Side";

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    console.log(notes);
    const newNote = {
      id: uuid(),
      title: "Unititled Note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };
  return (
    <div className="App">
      <Side notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} />
      <Main />
    </div>
  );
}

export default App;
