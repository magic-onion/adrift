import React, { Component } from 'react'

export default class HealthBar extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <p> Health: <span>*** *** *** *** ***</span></p>
      </div>
    )
  }

}

//could this be refactored and reused? probably?
