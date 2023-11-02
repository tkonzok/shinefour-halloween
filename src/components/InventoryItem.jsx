export function InventoryItem({
  id,
  title,
  price,
  amount,
  days,
  returnArticle,
}) {
  const handleClickReturn = () => {
    return returnArticle(id);
  };

  return (
    <div className="inventory-item">
      <p>
        <b>{amount}x</b> {title}
      </p>
      {days > 1 && <p>{days} days</p>}
      {days == 1 && <p>{days} day</p>}
      <p className="price">€ {(price * amount).toFixed(2)}</p>
      <button onClick={handleClickReturn}>Return Article Now</button>
    </div>
  );
}
