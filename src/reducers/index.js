const INITIAL_STATE = {
    apples: [
      { id: 1, dropped: false, animation: false },
      { id: 2, dropped: false, animation: false },
      { id: 3, dropped: false, animation: false },
      { id: 4, dropped: false, animation: false },
      { id: 5, dropped: false, animation: false }
    ],
    dropedApple: -1
  };
  
  export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "TOGGLE": //toggle id of apple which is in apples state
        return {
          ...state,
          apples: state.apples.map((item) =>
            item.id === action.payload ? { ...item, dropped: true } : item
          )
        };
      case "DROP": //return index of apple which will be dropped now
        return {
          ...state,
          dropedApple: action.payload
          // dropedApple: [...state.dropedApple, action.payload]
        };
      case "ANIMATION": //start to animation for selected apple
        return {
          ...state,
          apples: state.apples.map((item) =>
            item.id === action.payload ? { ...item, animation: true } : item
          )
        };
      default:
        return state;
    }
  };
  