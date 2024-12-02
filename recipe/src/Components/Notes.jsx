import React from "react";

function Notes() {
  return (
    <div className="bg-gray-300 h-[300px] w-[500px] p-2 flex flex-col  items-center">
      <h1 className="font-extrabold text-2xl">Add Notes</h1>
      <textarea rows={9} cols={45} placeholder="add your notes"></textarea>
      <div className="flex space-x-4 p-2">
        {/* <button className="bg-blue-500 rounded p-0.5 px-2">Edit</button>
        <button className="bg-red-500 rounded p-0.5 px-2">delete</button> */}
        <button className="bg-green-500 rounded p-0.5 px-2">Save</button>
      </div>
    </div>
  );
}

export default Notes;
