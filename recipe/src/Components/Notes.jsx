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
    <div className="bg-gray-300 w-full max-w-[500px] p-4 flex flex-col items-center">
      <h1 className="font-extrabold text-2xl mb-4">Add Notes</h1>
      <textarea
        className="w-full p-2 resize-none"
        rows={9}
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
