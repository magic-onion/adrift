import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventsPrompt1 from './components/eventsprompt1'
import EventsPrompt2 from './components/eventsprompt2'
import EventShow from './components/eventShow'
import Animation from './components/animatedEvent'
import TitleCard from './components/titleCard'
import Controller from './components/controller'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Status from './components/status'
import events from './data/events.js';
import levels from './data/levels.js';


class App extends Component {
  state = {
    levels: [],
    event: {},
    show: false
  }

  // can you call render in componentDidMount?

  componentDidMount() {
    const event = levels[0]
    this.setState({levels, event}, () => console.log(this.state))
  }

  handleClick = (number) => {
    let show = !this.state.show
    let event = levels.find(e => e.id === number)
    this.setState({event, show})
  }
  render() {
    console.log(this.state.event)
    return (
      <div className="App ui centered divided grid">
      {this.state.event.showAnimation ? <Animation event={this.state.event}/> : <TitleCard event={this.state.event} />}
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={true}>
      {this.state.show ? <EventsPrompt1 event={this.state.event} handleClick={this.handleClick}/> : <EventsPrompt2 event={this.state.event} handleClick={this.handleClick}/>}
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
