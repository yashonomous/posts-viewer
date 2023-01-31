import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { actionTypes } from "./common/actionTypes";
import { useStateValue } from "./common/StateProvider";
import {
  getObjecIdMapFromObjectsData,
  getPostCommentsMapFromCommentsData,
} from "./common/utils";
import PostPage from "./components/common/PostPage";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  const [{ users, posts, comments }, dispatch] = useStateValue();

  const activateLoader = async () => {
    dispatch({
      type: actionTypes.START_LOADER,
      loading: true,
    });
  };

  useEffect(() => {
    const getUsers = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => {
          return resp.json();
        })
        .then((users) => {
          dispatch({
            type: actionTypes.SET_USERS,
            users: users,
          });

          dispatch({
            type: actionTypes.SET_USER_MAP,
            usersMap: getObjecIdMapFromObjectsData(users),
          });
        })
        .catch((err) => {
          console.log("error getting users");
        });
    };

    if (Object.keys(users).length < 1) {
      getUsers().then(() => console.log("users fetched"));
    }
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      activateLoader()
        .then(
          fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((resp) => {
              return resp.json();
            })
            .then((posts) => {
              dispatch({
                type: actionTypes.SET_POSTS,
                posts: posts,
              });

              dispatch({
                type: actionTypes.SET_POSTS_MAP,
                postsMap: getObjecIdMapFromObjectsData(posts),
              });
            })
            .then(() => {
              dispatch({
                type: actionTypes.STOP_LOADER,
                loading: false,
              });
            })
            .catch((err) => {
              console.log("error getting posts");
            })
        )
        .catch((err) => {
          console.log("falied to activate loader");
        });
    };

    if (Object.keys(posts).length < 1) {
      getPosts().then(() => console.log("posts fetched"));
    }
  }, []);

  useEffect(() => {
    const getComments = async () => {
      activateLoader()
        .then(
          fetch("https://jsonplaceholder.typicode.com/comments", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((resp) => {
              return resp.json();
            })
            .then((comments) => {
              dispatch({
                type: actionTypes.SET_COMMENTS,
                comments: comments,
              });

              dispatch({
                type: actionTypes.SET_POST_COMMENTS_MAP,
                postCommentsMap: getPostCommentsMapFromCommentsData(comments),
              });
            })
            .then(() => {
              dispatch({
                type: actionTypes.STOP_LOADER,
                loading: false,
              });
            })
            .catch((err) => {
              console.log("error getting comments");
            })
        )
        .catch((err) => {
          console.log("falied to activate loader");
        });
    };

    if (Object.keys(comments).length < 1) {
      getComments().then(() => console.log("comments fetched"));
    }
  }, []);

  // const memoizedHeader = useMemo(() => {
  //   return <Header />;
  // }, [posts, users, comments]);

  return (
    <div className="flex flex-col w-full h-screen bg-[#F0F2F5]">
      <div className="bg-white py-1 fixed z-10 w-full">{<Header />}</div>
      <div className=" relative mt-[3.5rem] h-[calc(100%-3.5rem)]">
        <Routes>
          <Route path="/home" element={<MainContainer />} />
          <Route path="/posts" element={<MainContainer />} />
          <Route path="/" element={<MainContainer />} />
          <Route path="/posts/:postId" element={<PostPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
