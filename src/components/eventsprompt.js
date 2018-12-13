import React, { Component } from 'react'
import DecideOption from './decideoption'

class EventsPrompt extends Component {
  constructor(props) {
    super(props)

  }



  render() {
    console.log(this.props.events[this.props.gameProgress])
    return (
      <div>
      <p> Coast to Coast </p>
      <h2>{this.props.events[this.props.gameProgress].item}</h2>
      <DecideOption handleClick={this.props.handleClick}/>
      </div>
    )
  }
}

export default EventsPrompt
