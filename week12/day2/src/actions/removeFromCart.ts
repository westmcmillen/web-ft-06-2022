const removeFromCart = (dispatch: any, value: any) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: value });
};

export default removeFromCart;
