import { CartItem } from "./CartItem";

export function Cart({ cartItems, removeArticleFromCart }) {
  return (
    <div className="cart-sidebar">
      <div className="cart-articles">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            removeArticleFromCart={removeArticleFromCart}
          />
        ))}
      </div>
    </div>
  );
}
