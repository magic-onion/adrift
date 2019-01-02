import React, { Component } from 'react';
import './App.css';
import EventsPrompt1 from './components/eventsprompt1'
import EventsPrompt2 from './components/eventsprompt2'
import Animation from './components/animatedEvent'
import TitleCard from './components/titleCard'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import levels from './data/levels.js';
import crunching from './assets/crunching.mp3';
// import EventShow from './components/eventShow'
// import events from './data/events.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.crunching = new Audio(crunching);
  }



  state = {
    levels: [],
    event: {},
    show: false
  }

  componentDidMount() {
    const event = levels[0]
    this.setState({levels, event})
  }

  handleClick = (number) => {
    let show = !this.state.show
    let event = levels.find(e => e.id === number)
    this.setState({event, show})
  }
  render() {
    return (
      <div className="App ui centered divided grid">
      {this.state.event.showAnimation ? <Animation event={this.state.event}/> : <TitleCard event={this.state.event} />}
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={true}
      transitionLeaveTimeout={1000}>
      {this.state.show ? <EventsPrompt1 event={this.state.event} handleClick={this.handleClick}/> : <EventsPrompt2 event={this.state.event} handleClick={this.handleClick}/>}
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
