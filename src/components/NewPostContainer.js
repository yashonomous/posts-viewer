import { PersonRounded } from "@mui/icons-material";
import React from "react";

function NewPostContainer() {
  return (
    <div className="flex flex-col gap-3 justify-evenly h-36 bg-white rounded-lg p-2">
      <div className="flex flex-1 gap-2 items-stretch">
        <div className="flex items-center bg-[#F4F3F4] rounded-full p-2">
          <PersonRounded className="text-4xl" />
        </div>
        <div className="flex-1 flex items-center justify-center rounded-full bg-[#F4F3F4]">
          <input
            type="text"
            placeholder="what's on your mind?"
            className="basis-[95%] p-1 bg-[#F4F3F4] outline-none"
          />
        </div>
      </div>
      <div className="bg-[#E4E5EB] h-[1px]"></div>
      <div className="flex-1 flex">
        <div className="flex-1 flex gap-1 items-center justify-center bg-[#1A6EDA] rounded-lg text-white text-xl">
          <span>post </span>
          <span className="text-sm">(does nothing as of now)</span>
        </div>
      </div>
    </div>
  );
}

export default NewPostContainer;
