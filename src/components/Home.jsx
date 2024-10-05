import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();


  function createPaste() {
    const paste = {
      title: title,
      content : value,
      _id: pasteId || 
          Date.now().toString(36),
          createdAt:new Date().toISOString(),
    };
    
    if(pasteId){
      //update
      dispatch(updateToPastes(paste));
    }
    else {
      //create
      dispatch(addToPastes(paste));
    }

    // after creation or updation, resetting the form fields
    setTitle('');
    setValue('');
    setSearchParams({}); // clearing the url parameter after saving

    
  }

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-1 rounded-2xl border-black mt-2 w-[66%] pl-4"
          type="text"
          placeholder="Enter your note here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
        onClick={createPaste}
        className="p-2 rounded-2xl border-black mt-2">
          {pasteId ? "update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div className="mt-8">  
        <textarea
        className="rounded-2xl border-black mt-4, min-w-[500px] p-4 min-h-[400px]"
        value = {value}
        placeholder="Enter Content here..."
        onChange={(e) => setValue(e.target.value)}
        rows={20}
        />
      </div>
    </div>
  );
}

export default Home;
