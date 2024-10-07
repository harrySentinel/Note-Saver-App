import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useDispatch, useSelector } from "react-redux";

const ViewPaste = () => {
  
  const {id} = useParams();

  const allPastes = useSelector
  ((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];
  console.log("final paste: " , paste);
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-1 rounded-2xl border-black mt-2 w-[66%] pl-4"
          type="text"
          placeholder="Enter your note here"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-8">
        <textarea
          className="rounded-2xl border-black mt-4, min-w-[500px] p-4 min-h-[400px]"
          value={paste.content}
          placeholder="Enter Content here..."
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default ViewPaste;
