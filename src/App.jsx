import { articles } from "./data/articles";
import { users } from "./data/users";
import { Article } from "./components/Article";
import { Cart } from "./components/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addArticleToCart(article) {
    if (cart.filter((item) => item.id === article.id).length > 0) {
      setCart(
        cart.map((item) =>
          item.id === article.id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...article, amount: 1 }]);
    }
  }

  function removeArticleFromCart(article) {
    setCart(cart.filter((item) => item.id !== article));
  }

  return (
    <div className="main">
      <div className="articles-overview-container">
        {articles.map((article) => (
          <Article
            key={article.id}
            {...article}
            addArticleToCart={addArticleToCart}
          />
        ))}
      </div>
      <div className="sidebar">
        <Cart
          cartItems={cart}
          removeArticleFromCart={removeArticleFromCart}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
