export function SumTotal({ cart }) {
  let total = 0;
  if (cart[0]) {
    for (const article of cart) {
      const subtotal = article.price * article.amount * article.days;
      total += subtotal;
    }
  }

  return (
    <>
      <div className="total">
        <span>Total:</span>
        <span className="align-right">€ {total.toFixed(2)}</span>
      </div>
    </>
  );
}
