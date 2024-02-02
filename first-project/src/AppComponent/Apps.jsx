import React, { useState } from "react";
import Header from "../myComponents/Header";
import Footer from "../myComponents/Footer";
import Note from "../myComponents/Note";
// import notes from "../Notes";
import CreateArea from "../myComponents/CreateArea";


function Apps () {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }
    
  return <div>
        <Header/>

        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem, index) => {
            return (
            <Note
                key={index}
                id={index} 
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
            />
            );
        })}

        <Footer/>
    </div>

}

export default Apps;