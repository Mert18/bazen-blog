import { IListItemWithTitle } from '@/util/types'
import React from 'react'

const ListItemWithTitle = ({title, text}: IListItemWithTitle) => {
  return (
    <li>
      <b>{title}</b>
      <p>{text}</p>
      <br />
    </li>
  )
}

export default ListItemWithTitle