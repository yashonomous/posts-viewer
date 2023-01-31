import { CircularProgress } from "@mui/material";
import React, { useMemo } from "react";
import { useStateValue } from "../common/StateProvider";
import { POSTS_PER_PAGE } from "../common/utils";
import PostContainer from "./common/PostContainer";

function PostsContainer({ currentPage = 1 }) {
  const [{ loading, users, comments, usersMap, posts }] = useStateValue();
  // const [currentPostsData, setCurrentPostsData] = useState([]);

  // re-renders both when currentpage changes and state changes.
  // useEffect(() => {
  //   let leftIdx = (currentPage - 1) * 10;
  //   let rightIdx = leftIdx + 10;
  //   setCurrentPostsData(posts.slice(leftIdx, rightIdx));
  // }, [currentPage, posts]);

  const currentData = useMemo(() => {
    let leftIdx = (currentPage - 1) * POSTS_PER_PAGE;
    let rightIdx = leftIdx + POSTS_PER_PAGE;
    return posts.slice(leftIdx, rightIdx);
  }, [currentPage, posts]);

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
            currentData.map((post, idx) => {
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
