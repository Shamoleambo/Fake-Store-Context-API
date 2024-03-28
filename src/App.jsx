import { useContext } from 'react'
import { Header } from './components/Header.jsx'
import { Cart } from './components/Cart.jsx'
import { FakeStore } from './components/FakeStore.jsx'
import { CartContext } from './CartContext.jsx'

function App() {
  useContext()
  return (
    <CartContext.Provider>
      <Header />
      <Cart />
      <FakeStore />
    </CartContext.Provider>
  )
}

export default App
