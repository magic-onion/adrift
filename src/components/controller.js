import React, { Component } from 'react'

class Controller extends Component {

  fishing = () => {
    console.log('fishing')
  }

  render() {
    return (
      <div className="ui four wide column">
        <button onClick={this.fishing}>Fish</button>
      </div>
    )
  }


}

export default Controller

//consider making a new component to handle buttons that take props from Game to Controller
