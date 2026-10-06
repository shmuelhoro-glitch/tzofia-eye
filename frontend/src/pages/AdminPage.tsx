import React, { useEffect, useState } from 'react'
import { deleteUser, getAllUsers } from '../services/users.service'
import type { User } from '../types/usersTypes'

const AdminPage = () => {

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const res = async () => {
      const data = await getAllUsers()
      setUsers(data)
      res()
    }
  },[])
  return (
    <div>
      <ul>
      {users.map((u,index) => (
        <li key={index}>
          <h3>{u.username}</h3>
          <h4>{u.role}</h4>
          <p>{u.assignedArena}</p>
          <p>{u.email}</p>
          {/* <button onClick={() => deleteUser(u.id)}>מחק</button> */}
        </li>
      ))}
      </ul>
    </div>
  )
}

export default AdminPage

