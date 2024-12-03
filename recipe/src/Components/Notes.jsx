import React, { useState } from "react";

function Notes({setNoteBtn , noteRecipe , addNote}) {

  let [noteText, setNoteText] = useState("");

  const onSaveHandel = () => {
    if(noteRecipe){
      addNote(noteRecipe.id , noteText);
    }
    setNoteBtn(false);
  }
  
  return (
    <div className="bg-gray-300 h-[300px] w-[500px] p-2 flex flex-col  items-center">
      <h1 className="font-extrabold text-2xl">Add Notes</h1>
      <textarea
        className="p-2"
        rows={9}
        cols={45}
        placeholder="add your notes"
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <div className="flex space-x-4 p-2">
        <button className="bg-green-500 rounded p-0.5 px-2" onClick={onSaveHandel}>Save</button>
      </div>
    </div>
  );
}

export default Notes;
