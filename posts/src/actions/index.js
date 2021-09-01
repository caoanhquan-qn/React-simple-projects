import _ from "lodash";
import jsonplaceholder from "../api/jsonplaceholder";

export const fetchPosts = () => {
  return async function (dispatch) {
    const response = await jsonplaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
export const fetchPostsAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  console.log(userIds);
  userIds.forEach((userId) => dispatch(fetchUser(userId)));
};
