import React, { useState, useEffect } from 'react'
import './style/User.css'

const User = () => {
  let [users, setUsers] = useState([])
  console.log(users)

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json)
      })
      .catch((err) => setError(err))
  }, [])

  return (
    <div className="App-api">
      <h3>MockApi fetch</h3>
      <a>We welcome our newest users: </a>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  )
}

export default User
