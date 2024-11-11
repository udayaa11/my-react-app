    //  thunk pattern
// export const IncAction = () => {
//   return {
//     type: 'INCREMENT'
//   };
// };

// export const DecAction = () => {
//   return {
//     type: 'DECREMENT'
//   };
// };


export const IncAction = (value) => async dispatch => {
  dispatch({
    type: "INCREMENT",
    payload: value
  })
}

export const DecAction = () => async dispatch => {
  dispatch({
    type: "DECREMENT"
  })
}