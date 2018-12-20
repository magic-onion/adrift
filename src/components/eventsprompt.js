import React, { Component } from 'react'
import DecideOption from './decideoption'

class EventsPrompt extends Component {
  constructor(props) {
    super(props)

  }



  render() {
    console.log(this.props.events[this.props.gameProgress])
    return (
      <div className="events-prompt">
      <p> Coast to Coast </p>
      <h2>{this.props.events[this.props.gameProgress].item}</h2>
      <DecideOption className="buttons" buttonText={"first button"} handleClick={this.props.handleClick}/>
      <DecideOption className="buttons" buttonText={"second button"} handleClick={this.props.handleClick}/>
      <DecideOption className="buttons" buttonText={"third button"} handleClick={this.props.handleClick}/>
      <DecideOption className="buttons" buttonText={"fourth button"} handleClick={this.props.handleClick}/>
      </div>
    )
  }
}

export default EventsPrompt
