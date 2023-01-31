import React from "react";
import NewPostContainer from "./NewPostContainer";
import PostsContainer from "./PostsContainer";

function MainContainer() {
  return (
    <div className="flex justify-center pt-2  bg-[#F0F2F5] h-full ">
      {/* <div>left</div> */}

      <div className="flex flex-col gap-4 basis-[70%] overflow-scroll">
        <div>
          <NewPostContainer />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <PostsContainer />
        </div>
      </div>

      {/* <div>right</div> */}
    </div>
  );
}

export default MainContainer;
