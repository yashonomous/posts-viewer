import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { useStateValue } from "../common/StateProvider";
import { POSTS_PER_PAGE } from "../common/utils";
import NewPostContainer from "./NewPostContainer";
import PostsContainer from "./PostsContainer";

function MainContainer() {
  const [{ posts }] = useStateValue();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex justify-center pt-2  bg-[#F0F2F5] h-full ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-1 flex-col gap-2 w-[50rem] overflow-scroll">
          <div>
            <NewPostContainer />
          </div>

          <div className="flex-1 flex items-center justify-center">
            <PostsContainer currentPage={currentPage} />
          </div>
        </div>

        <div className="flex items-center gap-2 py-1">
          <Pagination
            className=""
            size="large"
            count={Math.ceil(posts.length / POSTS_PER_PAGE)}
            page={currentPage}
            onChange={(_, selectedPageValue) => {
              setCurrentPage(selectedPageValue);
            }}
            defaultPage={1}
            siblingCount={1}
            showFirstButton
            showLastButton
          />
          <div>{`${
            (currentPage - 1 === 0 ? 1 : currentPage - 1) * POSTS_PER_PAGE
          }-${currentPage * POSTS_PER_PAGE} of ${posts.length}`}</div>
        </div>
      </div>

      {/* <div>right</div> */}
    </div>
  );
}

export default MainContainer;
