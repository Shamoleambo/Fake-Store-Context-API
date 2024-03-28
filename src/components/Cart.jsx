import { useContext } from 'react'
import { CartContext } from '../CartContext'

export function Cart() {
  const cartContext = useContext(CartContext)
  return (
    <div>
      <h2>total</h2>
      <p>{cartContext.total}</p>
      <ul>
        {cartContext.map((item, id) => (
          <li key={id}>
            {item.name}: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}
