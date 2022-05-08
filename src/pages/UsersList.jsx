import React from 'react'
import { useSelector } from 'react-redux'
import { User } from '../components/User'

export const UsersList = () => {
  const users = useSelector(state => state.users)
  return (
    <div>
      <table style={{border: '1px solid black'}}>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Surname</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index) => {
            return <User key={user.id} user={user} index={index + 1} />
          })}
        </tbody>
      </table>
    </div>
  )
}
