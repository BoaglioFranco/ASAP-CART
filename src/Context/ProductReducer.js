import produce from "immer";


//reducer function for the product context. This function supports the 'ADD' action and the 'REMOVE' action
export const productReducer = (state, action) => {
  //The produce function is a function that comes from the immer package, it allows me to 'modify' the state with the = syntax
  //without actually changing the reference object. Immer creates a draft state, compares changes between the original state and the
  //draft state  and then returns a state copy reflecting those changes
  const updatedState = produce(state, (draftState) => {
    if (action.type === "ADD") {
      const productIndex = state.findIndex((p) => p.id === action.id);
      if (productIndex !== -1) {
        //if its a valid product
        draftState[productIndex].quantity += 1;
      }
    }
    else if(action.type === 'REMOVE'){
        let productIndex = state.findIndex((p) => p.id === action.id);
        //subtracts 1 from qty if the index is valid and the quantity is more than 0
        if(productIndex !== -1 && draftState[productIndex].quantity > 0){
            draftState[productIndex].quantity -= 1;
        }
    }
  });

  return updatedState;
};
