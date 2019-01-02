import React from 'react'

const UserLogin = props => {
  return (
    <form>
      <input name="username" type="text" placeholder="username"/>
      <input name="password" type="text" placeholder="password"/>
      <input type="submit" value="Begin" />
    </form>
  )
}

export default UserLogin
