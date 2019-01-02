import React, {Component} from 'react'
import HealthBar from './healthbar'
// import HealthBar from './healthbar'

export default class Status extends Component {
  render() {
    return (
      <div className="ui four wide column">
      <p> What's the Status, Gladys?</p>
      <HealthBar />
      </div>
    )
  }
}
