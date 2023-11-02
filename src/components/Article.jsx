export function Article({
  id,
  title,
  subtitle,
  price,
  stock,
  images,
  addArticleToCart,
}) {
  const handleClickAddToCart = () => {
    return addArticleToCart({ id, title, price, images });
  };

  return (
    <div className="article">
      <img className="image" src={images[0]}></img>
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
      <p className={stock == 0 ? "price sold-out" : "price"}>€ {price}</p>
      {stock > 0 && <p className="stock">Available</p>}
      {stock == 0 && <p className="stock sold-out">Out of stock</p>}
      <div className={stock == 0 ? "add-to-cart sold-out" : "add-to-cart"}>
        {stock > 0 ? (
          <button onClick={handleClickAddToCart}>ADD TO CART</button>
        ) : (
          <button>ADD TO CART</button>
        )}
      </div>
    </div>
  );
}
