import { PersonRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { actionTypes } from "../../common/actionTypes";
import { useStateValue } from "../../common/StateProvider";
import { trimText } from "../../common/utils";
import CommentContainer from "./CommentContainer";

function PostContainer({ postId, title, body, userName }) {
  const [{ postCommentsMap, postsMap, usersMap }, dispatch] = useStateValue();

  return (
    <div className="flex flex-col gap-3 bg-white rounded-lg p-3">
      <div className="flex items-start gap-4 w-full">
        <div className="flex justify-center">
          <div className="flex items-center justify-center bg-[#F4F3F4] rounded-full p-2">
            <PersonRounded className="text-4xl rounded-full" />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-1 p-1 ">
          <div className="w-[25rem] text-sm font-medium">
            <Link to={`/posts/${postId}`}>
              <span className={`hover:text-blue-600 hover:underline`}>
                {title}
              </span>
            </Link>
          </div>
          <div className="text-xs font-normal text-[#858789]">
            <span>{userName}</span>
          </div>
        </div>
      </div>

      <div className="text-md leading-tight">
        <p>{body}</p>
      </div>

      <div className="bg-[#E4E5EB] h-[2px]"></div>

      <div className="flex flex-col gap-2">
        <div className="text-sm">
          <span>comments : </span>
        </div>
        {postCommentsMap[postId]?.length > 0 ? (
          <div className="flex flex-col gap-2 mx-2">
            {postCommentsMap[postId][0] && (
              <CommentContainer
                commentTitle={postCommentsMap[postId][0].name}
                userEmail={postCommentsMap[postId][0].email}
                commentBody={postCommentsMap[postId][0].body}
              />
            )}
            {postCommentsMap[postId][1] && (
              <CommentContainer
                commentTitle={postCommentsMap[postId][1].name}
                userEmail={postCommentsMap[postId][1].email}
                commentBody={postCommentsMap[postId][1].body}
              />
            )}
            <div>
              <Link to={`/posts/${postId}`}>
                <span className="text-sm hover:text-blue-600 underline">
                  load all comments....
                </span>
              </Link>
            </div>
          </div>
        ) : (
          <span>no comments</span>
        )}
      </div>
    </div>
  );
}

export default PostContainer;
