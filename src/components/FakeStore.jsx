import { Item } from './Item.jsx'

export function FakeStore() {
  return (
    <div>
      <Item name='shirt' price={3.99} />
      <Item name='cap' price={2.5} />
      <Item name='jeans' price={4.25} />
      <Item />
    </div>
  )
}
