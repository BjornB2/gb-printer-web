const lineBufferReducer = (value = [], action) => {
  switch (action.type) {
    case 'CLEAR_LINES':
      return [];
    case 'NEW_LINE':
      return [...value, action.payload];
    case 'SET_ALL_LINES':
      return action.payload;
    default:
      return value;
  }
};

export default lineBufferReducer;