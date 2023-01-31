import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { actionTypes } from "../common/actionTypes";
import { useStateValue } from "../common/StateProvider";
import {
  getObjecIdMapFromObjectsData,
  getPostCommentsMapFromCommentsData,
} from "../common/utils";
import PostContainer from "./common/PostContainer";

function PostsContainer() {
  const [{ loading, users, comments, usersMap, posts }, dispatch] =
    useStateValue();

  return (
    <>
      {loading ? (
        <div>
          <CircularProgress className="h-20 w-20" />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {Object.keys(posts).length > 0 &&
            Object.keys(users).length > 0 &&
            Object.keys(usersMap).length > 0 &&
            Object.keys(comments).length > 0 &&
            posts.map((post, idx) => {
              return (
                <PostContainer
                  key={post.id}
                  postId={post.id}
                  title={post.title}
                  body={post.body}
                  userName={usersMap[post.userId].name}
                />
              );
            })}
        </div>
      )}
    </>
  );
}

export default PostsContainer;
