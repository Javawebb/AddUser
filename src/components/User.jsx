import React from 'react'

export const User = ({user,index}) => {
  return (
    <tr>
        <td>{index}</td>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
    </tr>
  )
}
