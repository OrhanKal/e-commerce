// Basic action creators
export const setCart = (cart) => ({
    type: 'SET_CART',
    payload: cart,
  });
  
  export const setPayment = (payment) => ({
    type: 'SET_PAYMENT',
    payload: payment,
  });
  
  export const setAddress = (address) => ({
    type: 'SET_ADDRESS',
    payload: address,
  });
  
  // Helper functions for cart operations
  export const addToCart = (product, count = 1) => {
    return (dispatch, getState) => {
      const currentCart = [...getState().shoppingCart.cart];
      const existingItem = currentCart.find(item => item.product.id === product.id);
  
      if (existingItem) {
        const updatedCart = currentCart.map(item =>
          item.product.id === product.id
            ? { ...item, count: item.count + count }
            : item
        );
        dispatch(setCart(updatedCart));
      } else {
        dispatch(setCart([...currentCart, { product, count }]));
      }
    };
  };
  
  export const removeFromCart = (productId) => {
    return (dispatch, getState) => {
      const currentCart = [...getState().shoppingCart.cart];
      const updatedCart = currentCart.filter(item => item.product.id !== productId);
      dispatch(setCart(updatedCart));
    };
  };
  
  export const updateCartItemCount = (productId, count) => {
    return (dispatch, getState) => {
      const currentCart = [...getState().shoppingCart.cart];
      const updatedCart = currentCart.map(item =>
        item.product.id === productId
          ? { ...item, count: count }
          : item
      );
      dispatch(setCart(updatedCart));
    };
  };
  
  // Thunk action creator for checkout process
  export const processCheckout = (paymentDetails, shippingAddress) => {
    return async (dispatch, getState) => {
      try {
        // Payment işlemi
        dispatch(setPayment(paymentDetails));
        dispatch(setAddress(shippingAddress));
  
        // API call örneği
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cart: getState().shoppingCart.cart,
            payment: paymentDetails,
            address: shippingAddress,
          }),
        });
  
        if (response.ok) {
          // Başarılı checkout sonrası sepeti temizle
          dispatch(setCart([]));
          return true;
        }
        return false;
      } catch (error) {
        console.error('Checkout error:', error);
        return false;
      }
    };
  };