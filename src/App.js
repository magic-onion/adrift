import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventsPrompt from './components/eventsprompt'
import Controller from './components/controller'
import Status from './components/status'
import events from './data/events.js';


// main components:
  //events Prompt, controller, status
class App extends Component {
  state = {
    gameProgress: 0,
    events: events
  }

  handleClick = (event) => {
    let newProg = this.state.gameProgress + 1
    if (this.state.gameProgress < 8) {
      this.setState({
        gameProgress: newProg
      })
    }
    
  }

  render() {
    return (
      <div className="App">
        <EventsPrompt
          events={this.state.events}
          gameProgress={this.state.gameProgress}
          handleClick={this.handleClick}
          />
        <Controller gameProgress={this.state.gameProgress} />
        <Status gameProgress={this.state.gameProgress}/>
      </div>
    );
  }
}

export default App;

//
//Everything loads into App. This should be replaced by 'Game' but doesn't have to be
