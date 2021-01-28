import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove'

const useStyles = makeStyles(theme => ({
  done: {
    backgroundColor: 'green'
  },
  notDone: {
    backgroundColor: 'gray'
  }
}))

const Items = props => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar className={props.item.isDone ? classes.Done : classes.notDone}>
         <DoneIcon />
        }
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.items.text}>
        <ListItemSecondaryAction>
          <IconButton edge='end' aria-label='delete'>
          <DeleteIcon>

          </DeleteIcon>
          </IconButton>
        </ListItemSecondaryAction>

      </ListItemText>
    </ListItemSecondaryAction>
    <li>{props.text}</li>
  )
}

export default Items
