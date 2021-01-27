import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, onDisplayContent, onAddNote  }) {
  
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} onDisplayContent={onDisplayContent} />
      <button onClick={onAddNote}>New</button>
    </div>
  );
}

export default Sidebar;
