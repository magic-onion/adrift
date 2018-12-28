import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventsPrompt from './components/eventsprompt'
import EventShow from './components/eventShow'
import Animation from './components/animatedEvent'
import TitleCard from './components/titleCard'
import Controller from './components/controller'
import Status from './components/status'
import events from './data/events.js';
import levels from './data/levels.js';


class App extends Component {
  state = {
    levels: [],
    event: {}
  }

  // can you call render in componentDidMount?

  componentDidMount() {
    const event = levels[0]
    this.setState({levels, event}, () => console.log(this.state))
  }

  handleClick = (number) => {
    let event = levels.find(e => e.id === number)
    this.setState({event}, () => console.log(this.state.event.id))
  }


  render() {
    console.log(this.state.event)
    return (
      <div className="App ui centered divided grid">
      {this.state.event.showAnimation ? <Animation event={this.state.event}/> : <TitleCard event={this.state.event} />}
      <EventsPrompt event={this.state.event} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
