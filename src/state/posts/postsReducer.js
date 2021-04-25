export const postReducer = (state = [], action) => {
  switch (action.type) {
    case "set_posts": {
      return action.payload;
    }
    default:
      return state;
  }
};
