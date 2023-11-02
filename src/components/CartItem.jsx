export function CartItem({ id, title, price, amount, removeArticleFromCart }) {
  const handleClick = () => {
    return removeArticleFromCart(id);
  };

  return (
    <div className="cart-item">
      <p>
        <b>{amount}x</b> {title}
      </p>
      <p className="price">€ {(price * amount).toFixed(2)}</p>
      <button onClick={handleClick}>X</button>
    </div>
  );
}
