import React, { useContext } from 'react'
import ItemContext from '../../utils/ItemContext'

const useStyles = makeStyles(theme => ({
  form: {
    minHeight: '200px',
    paddingTop: '20px'
  },
  input: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(400),
    width: '25ch'
  }
}))
const Form = () => {
  const {
    item,
    handleInputChange,
    handleAddItem
  } = useContext(ItemContext)

  return (
      <Paper>
    <form onSubmit={handleAddItem}>
      <
        <label htmlFor='item'>item</label>
        <input
          type='text'
          name='item'
          id='item'
          value={item}
          onChange={handleInputChange}
        />
      </p>
      <>
        <button onClick={handleAddItem}>Add Item</button>
      </Paper>
    </form>
  )
}

export default Form
