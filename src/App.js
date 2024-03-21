import React from 'react';
import './App.css'; // Assuming you have some CSS file for styling
import ShoppingListWithImmer from './ShoppingListWithImmer'; // Importing the ShoppingListWithImmer component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Shopping List App</h1>
      </header>
      <main>
        <ShoppingListWithImmer /> {/* Including the ShoppingListWithImmer component */}
      </main>
    </div>
  );
}

export default App;


