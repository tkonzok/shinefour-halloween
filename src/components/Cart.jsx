import { CartItem } from "./CartItem";
import { SumTotal } from "./SumTotal";

export function Cart({
  cartItems,
  removeArticleFromCart,
  increaseDays,
  decreaseDays,
  placeOrder,
}) {
  const handleClickPlaceOrder = () => {
    return placeOrder(cartItems);
  };

  return (
    <div className="cart-sidebar">
      <div className="cart-articles">
        <h2>Your Cart</h2>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            removeArticleFromCart={removeArticleFromCart}
            increaseDays={increaseDays}
            decreaseDays={decreaseDays}
          />
        ))}
      </div>
      <div>{<SumTotal cart={cartItems} />}</div>
      <button onClick={handleClickPlaceOrder}>Place Order</button>
    </div>
  );
}
