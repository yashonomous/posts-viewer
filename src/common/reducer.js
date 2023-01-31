import { actionTypes } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return { ...state, users: action.users };
    case actionTypes.SET_POSTS:
      return { ...state, posts: action.posts };
    case actionTypes.SET_COMMENTS:
      return { ...state, comments: action.comments };
    case actionTypes.SET_USER_MAP:
      return {
        ...state,
        usersMap: action.usersMap,
      };
    case actionTypes.SET_POSTS_MAP:
      return {
        ...state,
        postsMap: action.postsMap,
      };
    case actionTypes.SET_POST_COMMENTS_MAP:
      // debugger;
      return {
        ...state,
        postCommentsMap: action.postCommentsMap,
      };
    case actionTypes.START_LOADER:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.STOP_LOADER:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
