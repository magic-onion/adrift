import React from 'react'
import EventShow from  './eventShow'

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { angle: 0 };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }
  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }
  updateAnimationState() {
    this.setState(prevState => ({ angle: prevState.angle + 1 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }
  render() {
    return <EventShow angle={this.state.angle} />;
  }
}

export default Animation
