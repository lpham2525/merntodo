import React, { useContext } from 'react'
import ItemContext from '../../utils/ItemContext'
import Item from '../Item'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'

const FullList = () => {

  const { items } = useContext(ItemContext)

  return (
    <ul>
      {
        items.map(item => <Item text={item.text} />)
      }
    </ul>
  )
}

export default FullList
