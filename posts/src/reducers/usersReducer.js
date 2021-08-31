const usersReducer = (previousState = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...previousState, action.payload];
    default:
      return previousState;
  }
};

export default usersReducer;
