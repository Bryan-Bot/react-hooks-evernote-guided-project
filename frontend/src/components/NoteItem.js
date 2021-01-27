import React from "react";

function NoteItem({ note, onDisplayContent }) {
  // console.log(note)
  // const { id, title, body } = note

  // console.log("body", note.body)

  const sentence = note.body.split('.')

  
  return (
    <li onClick={() => onDisplayContent(note)}>
      <h2>{note.title}</h2>
      {/* <p>{note.body}</p> */}
      <p>{sentence[0]}...</p>
    </li>
  );
}

export default NoteItem;