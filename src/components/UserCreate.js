import React from 'react'

class UserCreate extends React.Component {

  componentDidMount() {
    console.log('mounting before fetch')
    let allUsers
    fetch(`http://localhost:3000/api/v1/users`).then(r=>r.json()).then(p=> this.props.getUsers(p))
  }

  render() {
    return (
      <div className="first-form">
      <h1>Hey. You. Get Lost.</h1>
      <form id="create" className="form-styling" onSubmit={this.props.handleSubmit}>
      <input className="login-inputs" onChange={this.props.handleUsernameChange} name="username" type="text" placeholder="username"/>
      <input className="login-inputs" onChange={this.props.handlePasswordChange} name="password" type="text" placeholder="password"/>
      <button className="login-submit" type="submit">Begin</button>
      <div id="login" className={this.props.toggled2} onClick={this.props.handleToggleClick}>
      <span id="login">Login</span>
      </div>
      <div id="create" className={this.props.toggled} onClick={this.props.handleToggleClick}>
      <span id="create">Create User</span>
      </div>
      </form>
      </div>
    )
  }

}

export default UserCreate
