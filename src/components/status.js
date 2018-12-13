import React, {Component} from 'react'
import HealthBar from './healthbar'
// import HealthBar from './healthbar'

export default class Status extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{float: "right", marginRight: "50px"}}>
      <p> What's the Status, Gladys?</p>
      <HealthBar />
      </div>
    )
  }
}
