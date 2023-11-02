import { dueDate } from "./../utils/dueDate";

export function InventoryItem({
  id,
  title,
  images,
  amount,
  days,
  startDate,
  returnArticle,
}) {
  const handleClickReturn = () => {
    return returnArticle(id);
  };

  return (
    <div className="inventory-item">
      <img className="inventory-image" src={images[0]}></img>
      <p>
        <b>{amount}x</b> {title}
      </p>
      <p className="inventory-date">
        Rental Date: {startDate.toLocaleDateString("de-de")}
      </p>
      <p className="inventory-date">
        Return Date: {dueDate(startDate, days).toLocaleDateString("de-de")}
      </p>
      <button onClick={handleClickReturn}>Return Article Now</button>
    </div>
  );
}
