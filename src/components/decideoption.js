import React, {Component} from 'react'

export default class DecideOption extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>Click Me</button>
      </div>
    )
  }
}
