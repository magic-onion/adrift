import React from 'react'

const UserCreate = props => {
  return (
    <div className="first-form">
      <h1>Hey. You. Get Lost.</h1>
    <form id="create" className="form-styling" onSubmit={props.handleSubmit}>
      <input className="login-inputs" onChange={props.handleUsernameChange} name="username" type="text" placeholder="username"/>
      <input className="login-inputs" onChange={props.handlePasswordChange} name="password" type="text" placeholder="password"/>
      <button className="login-submit" type="submit">Begin</button>
      <div id="login" className={props.toggled2} onClick={props.handleToggleClick}>
        <span id="login">Login</span>
      </div>
      <div id="create" className={props.toggled} onClick={props.handleToggleClick}>
        <span id="create">Create User</span>
      </div>
    </form>
    </div>
  )
}

export default UserCreate
