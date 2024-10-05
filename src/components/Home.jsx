import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

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
        <button className="p-2 rounded-2xl border-black mt-2">
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
};

export default Home;
