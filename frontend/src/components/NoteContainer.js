import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";


function NoteContainer() {
  const [notes, setNotes] = useState([])
  const [isSelected, setIsSelected] = useState(false)
  const [noteContent, setNoteContent] = useState({})
  const [showEditForm, setShowEditForm] = useState(false)
  const [search, setSearch] = useState("")

  

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/notes")
      .then(r => r.json())
      .then(notesArray => setNotes(notesArray))
  }, [])

 


  function handleDisplayNoteContent(selectedNote) {
    console.log("display note content", selectedNote)
    setIsSelected(true)
    setNoteContent(selectedNote)
    // console.log(isSelected)
  }

  function handleAddNote (event){
    event.preventDefault()
    const data = {
      title: "default",
      body: "placeholder",
      user:{
        name:'bryangonzalez'
      }
     }
     
    fetch('http://localhost:3000//api/v1/notes', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
      })
      .then(r => r.json())
      .then(notesObj => setNotes([...notes,notesObj]))
      }
  
  

  return (
    <>
      <Search search={search} onSearch={setSearch} />
      <div className="container">
        <Sidebar notes={notes} onDisplayContent={handleDisplayNoteContent} onAddNote={handleAddNote}/>
        <Content note={noteContent} isSelected={isSelected} showEditForm={showEditForm}  />
      </div>
    </>
  );
  }

export default NoteContainer;
