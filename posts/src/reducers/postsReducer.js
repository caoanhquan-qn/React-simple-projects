const postsReducer = (previousState = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return previousState;
  }
};

export default postsReducer;
