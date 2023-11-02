import { articles } from "./data/articles";
import { users } from "./data/users";
import { Article } from "./components/Article";
import { Cart } from "./components/Cart";
import { UserInventory } from "./components/UserInventory";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

  function removeArticleFromCart(articleId) {
    setCart(cart.filter((item) => item.id !== articleId));
  }

  function increaseDays(articleId) {
    setCart(
      cart.map((item) =>
        item.id === articleId ? { ...item, days: item.days + 1 } : item
      )
    );
  }

  function decreaseDays(articleId, articleDays) {
    if (articleDays > 1) {
      setCart(
        cart.map((item) =>
          item.id === articleId ? { ...item, days: item.days - 1 } : item
        )
      );
    }
  }

  function placeOrder(cart) {
    cart.forEach((item) => (item.startDate = new Date()));
    cart.forEach((item) => (item.uuid = uuidv4()));
    let newInventory = userInventory;
    cart.forEach((item) => newInventory.push(item));
    setUserInventory(newInventory);
    setCart([]);
  }

  function returnArticle(articleUuid) {
    setUserInventory(userInventory.filter((item) => item.uuid !== articleUuid));
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
        <h1>Welcome, {users[0].username}</h1>
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
