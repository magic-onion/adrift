import React from 'react'

const UserCreate = props => {
  return (
    <form id="create" className="form-styling" onSubmit={props.handleSubmit}>
      <input onChange={props.handleChange} name="username" type="text" placeholder="username"/>
      <input onChange={props.handleChange} name="password" type="text" placeholder="password"/>
      <input type="submit" value="Begin" />
    </form>
  )
}

export default UserCreate
