import { InventoryItem } from "./InventoryItem";

export function UserInventory({ inventory, returnArticle }) {
  return (
    <div className="inventory-sidebar">
      <div className="inventory-articles">
        <h2>Your Inventory</h2>
        {inventory.map((item) => (
          <InventoryItem
            key={item.id}
            {...item}
            returnArticle={returnArticle}
          />
        ))}
      </div>
    </div>
  );
}
