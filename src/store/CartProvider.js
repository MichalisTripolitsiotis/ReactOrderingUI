import CartContext from "./cart-context";

// Manage cart context and provide it to all components that use it.
const CartProvider = props => {

    const addItemToCartHandler = item => { };
    const removeItemFromCartHandler = item => { };
    
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>);
};

export default CartProvider;