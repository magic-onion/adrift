import React from 'react'

const UserLogin = props => {
  return (
    <form id="login" className="form-styling" onSubmit={props.handleSubmit}>
    <input onChange={props.handleChange} name="username" type="text" placeholder="username"/>
    <input onChange={props.handleChange} name="password" type="text" placeholder="password"/>
      <input type="submit" value="Continue" />
    </form>
  )
}

export default UserLogin
