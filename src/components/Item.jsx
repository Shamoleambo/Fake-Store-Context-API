import { AddButtons } from './AddButton.jsx'

export function Item({ name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <AddButtons name={name} price={price} />
    </div>
  )
}
