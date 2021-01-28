import { createContext } from 'react'

const ItemContext = createContext({
  item: '',
  items: [],
  handleInputChange: () => { },
  handleValue: () => { }
})

export default ItemContext
