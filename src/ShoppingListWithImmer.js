import React from 'react';
import { useImmer } from 'use-immer';

const ShoppingListWithImmer = () => {
  // Initializing state using useImmer
  const [shoppingList, setShoppingList] = useImmer([
    { id: 1, name: 'Apples', quantity: 2, details: { category: 'Fruit', notes: 'Organic' } },
    { id: 2, name: 'Milk', quantity: 1, details: { category: 'Dairy', notes: '' } },
    { id: 3, name: 'Bread', quantity: 1, details: { category: 'Bakery', notes: 'Whole wheat' } }
  ]);

  // Function to add a new item to the shopping list
  const addItem = newItem => {
    setShoppingList(draft => {
      draft.push(newItem);
    });
  };

 // Function to update an existing item in the shopping list
  const updateItem = (itemId, updatedItem) => {
    setShoppingList(draft => {
      const index = draft.findIndex(item => item.id === itemId);
      if (index !== -1) {
        draft[index] = updatedItem;
      }
    });
  };

  // Function to remove an item from the shopping list
  const removeItem = itemId => {
    setShoppingList(draft => {
      draft.splice(
        draft.findIndex(item => item.id === itemId),
        1
      );
    });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {/* Rendering shopping list items */}
        {shoppingList.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} {item.quantity === 1 ? 'item' : 'items'} ({item.details.category})
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* Interface elements for testing */}
      <form
        onSubmit={e => {
          e.preventDefault();
          const name = e.target.name.value;
          const quantity = parseInt(e.target.quantity.value);
          const category = e.target.category.value;
          const notes = e.target.notes.value;
          addItem({
            id: Date.now(),
            name,
            quantity,
            details: { category, notes }
          });
          e.target.reset();
        }}
      >
        <input type="text" name="name" placeholder="Item name" required />
        <input type="number" name="quantity" placeholder="Quantity" min="1" required />
        <input type="text" name="category" placeholder="Category" required />
        <input type="text" name="notes" placeholder="Notes" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ShoppingListWithImmer;
