export const drop = (id) => {
    return { type: "DROP", payload: id };
  };
  
  export const toggle = (id) => {
    return { type: "TOGGLE", payload: id };
  };
  
  export const animation = (id) => {
    return { type: "ANIMATION", payload: id };
  };
  