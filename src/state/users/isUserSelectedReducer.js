export const isUserSelectedReducer = (state = false, action) => {
  switch (action.type) {
    case "set_isUserSelected": {
      return action.paylod;
    }
    default:
      return state;
  }
};
