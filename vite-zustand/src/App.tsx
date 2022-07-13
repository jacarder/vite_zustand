import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useCartStore } from './CartState'
import { ICartItem } from './models/cart.model';
import AddItemButton from './AddItemButton';

function App() {
  const { cart } = useCartStore();
  return (
    <div className="App">
      <div className="card">
        {
          cart.map(x => (
            <ul key={x.id}>
              <li>Item Id: {x.id}</li>
              <li>Description: {x.description}</li>
              <li>Count: {x.count}</li>
            </ul>
          ))
        }
        {/* Just testing lol */}
        <AddItemButton id={1} description='Berrylicious' label='Berry'></AddItemButton>
        <AddItemButton id={2} description='Nutty nut' label='Nut'></AddItemButton>
      </div>
    </div>
  )
}

export default App
