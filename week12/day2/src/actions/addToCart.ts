const addToCart = (dispatch: any, value: any) => {
  dispatch({ type: "ADD_TO_CART", payload: value });
};

export default addToCart;
