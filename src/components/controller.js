import React, { Component } from 'react'

class Controller extends Component {
  constructor(props) {
    super(props)
  }

  fishing = () => {
    console.log('fishing')
  }

  render() {
    return (
      <div style={{float: "left", marginLeft: "30px"}}>
        <button onClick={this.fishing}>Fish</button>
      </div>
    )
  }


}

export default Controller

//consider making a new component to handle buttons that take props from Game to Controller
