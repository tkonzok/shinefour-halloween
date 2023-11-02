import { articles } from "./data/articles";
import { users } from "./data/users";
import { Article } from "./components/Article";
import { Cart } from "./components/Cart";
import { UserInventory } from "./components/UserInventory";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [userInventory, setUserInventory] = useState([]);

  function addArticleToCart(article) {
    if (cart.filter((item) => item.id === article.id).length > 0) {
      setCart(
        cart.map((item) =>
          item.id === article.id ? { ...item, amount: item.amount + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...article, amount: 1, days: 1 }]);
    }
  }

  function removeArticleFromCart(article) {
    setCart(cart.filter((item) => item.id !== article));
  }

  function increaseDays(article) {
    setCart(
      cart.map((item) =>
        item.id === article ? { ...item, days: item.days + 1 } : item
      )
    );
  }

  function decreaseDays(article) {
    if (article.days > 1) {
      setCart(
        cart.map((item) =>
          item.id === article ? { ...item, days: item.days - 1 } : item
        )
      );
    }
  }

  function placeOrder(cart) {
    setUserInventory([...userInventory, cart]);
    setCart([]);
  }

  function returnArticle(article) {
    setUserInventory(userInventory.filter((item) => item.id !== article));
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
          increaseDays={increaseDays}
          decreaseDays={decreaseDays}
          placeOrder={placeOrder}
        ></Cart>
        <UserInventory
          inventory={userInventory}
          returnArticle={returnArticle}
        ></UserInventory>
      </div>
    </div>
  );
}

export default App;
