import React, { useState, useEffect } from 'react'
import FullList from './components/FullList'
import Form from './components/Form'
import ItemContext from './utils/ItemContext'
import Navbar from './components/Navbar'
import Grid from '@material-ui/core/List/Grid'

const App = () => {
  const [itemState, setItemState] = useState({
    item: '',
    items: []
  })

  itemState.handleInputChange = event => {
    setItemState({ ...itemState, [event.target.name]: event.target.value })
  }

  itemState.handleAddItem = event => {
    event.preventDefault()
    let items = JSON.parse(JSON.stringify(itemState.items))
    items.push({
      text: itemState.item,
      isDone: false
    })
    setItemState({ ...itemState, items, item: '' })
  }

  itemState.handleRemoveItem = () => {
  }

  useEffect(() => {
    axios.get('/api/items')
      .then(({ data }) => {
        setItemState({ ...itemState, items: data })
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <ItemContext.Provider value={itemState}>
      <Navbar />
      <Grid container>
        <Grid item>
          <Form />
        </Grid>
        <Grid item>
          <FullList />
        </Grid>
      </Grid>

    </ItemContext.Provider>
  )
}

export default App
