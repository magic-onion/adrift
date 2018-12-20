import React, {Component} from 'react'

export default class DecideOption extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button className="buttons" onClick={this.props.handleClick}>{this.props.buttonText}</button>
      </div>
    )
  }
}
