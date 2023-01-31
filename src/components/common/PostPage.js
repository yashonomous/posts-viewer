import { PersonRounded } from "@mui/icons-material";
import React from "react";
import { useParams } from "react-router";
import { useStateValue } from "../../common/StateProvider";
import CommentContainer from "./CommentContainer";

function PostPage() {
  const { postId } = useParams();
  const [{ usersMap, postsMap, postCommentsMap }] = useStateValue();

  return (
    <div className="flex justify-center w-full pt-3 h-full">
      <div className="flex flex-col gap-4 basis-[70%] p-2 rounded-lg overflow-scroll bg-white">
        {usersMap[postsMap[postId]?.userId]?.name && (
          <div className="text-lg font-semibold text-center">
            <span>{`${usersMap[postsMap[postId]?.userId]?.name}'s post`}</span>
          </div>
        )}
        <div className="flex items-start gap-4 w-full ">
          <div className="flex justify-center">
            <div className="flex items-center justify-center bg-[#F4F3F4] rounded-full p-2">
              <PersonRounded className="text-4xl rounded-full" />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-1 p-1 ">
            <div className="w-[25rem] text-sm font-medium">
              <span className="">{postsMap[postId]?.title}</span>
            </div>
            <div className="text-xs font-normal text-[#858789]">
              <span>{usersMap[postsMap[postId]?.userId]?.name}</span>
            </div>
          </div>
        </div>

        <div className="text-md leading-tight">
          <p>{postsMap[postId]?.body}</p>
        </div>

        <div className="bg-[#E4E5EB] h-[2px]"></div>

        <div className="flex flex-col gap-2 ">
          <div className="text-sm">
            <span>comments : </span>
          </div>
          <div className="flex flex-col gap-2 mx-2">
            {postCommentsMap[postId] &&
              postCommentsMap[postId].map((comment) => (
                <CommentContainer
                  key={comment.id}
                  commentTitle={comment.name}
                  userEmail={comment.email}
                  commentBody={comment.body}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
