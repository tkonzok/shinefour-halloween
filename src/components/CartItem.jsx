export function CartItem({
  id,
  title,
  images,
  price,
  amount,
  days,
  removeArticleFromCart,
  increaseDays,
  decreaseDays,
}) {
  const handleClickRemove = () => {
    return removeArticleFromCart(id);
  };
  const handleClickIncreaseDays = () => {
    return increaseDays(id);
  };
  const handleClickDecreaseDays = () => {
    return decreaseDays(id);
  };

  console.log(images);

  return (
    <div className="cart-item">
      <img className="cart-image" src={images[0]}></img>
      <p>
        <b>{amount}x</b> {title}
      </p>
      <div className="days">
        <button onClick={handleClickDecreaseDays}>-</button>
        {days > 1 && <p>{days} days</p>}
        {days == 1 && <p>{days} day</p>}
        <button onClick={handleClickIncreaseDays}>+</button>
      </div>
      <p className="price">€ {(price * amount).toFixed(2)}</p>
      <button onClick={handleClickRemove}>X</button>
    </div>
  );
}
