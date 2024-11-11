const initialState = 10;

const reducer = (state = initialState, action) => {
  const{type,payload} = action
  switch (type) {
    case 'INCREMENT':
      return state + payload;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default reducer;


// const initialState = 10

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ACTION_TYPE':
//       return {
//         ...state,
//         data: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;


  