import React, { Component } from 'react';
import ErrorLog from './components/errorLog'
import EventsPrompt1 from './components/eventsprompt1'
import EventsPrompt2 from './components/eventsprompt2'
import SaveLoad from './components/saveLoad'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';
import levels from './data/levels.js';
import events from './data/events.js'
import doggy from './assets/dog-bark.mp3';
import losingMind from './assets/losing-mind.mp3';
import monster from './assets/monster-growl.mp3';
import dead from './assets/you-died.mp3';
import win from './assets/win.mp3';

const init = {
  levels: [],
  event: {},
  show: false,
  users: [],
  currentUser: {},
  currentUserId: 0,
  formCreates: 'create',
  currentGame: {},
  error: ''
}

class App extends Component {
  constructor(props) {
    super(props)
    this.doggy = new Audio(doggy);
    this.losingMind = new Audio(losingMind);
    this.monster = new Audio(monster);
    this.dead = new Audio(dead);
    this.win = new Audio(win)
  }

  state = init

  componentDidMount() {
    if (localStorage.getItem('save')) {
      let event = levels.find(level=> level.id === parseInt(localStorage.getItem('save')))
      console.log(event)
      this.setState({event})
      return
    }
    const event = levels[0]
    const currentUserId = 0
    this.setState({event, currentUserId})
  }


  handleClick = (number) => {
    let error = ""
    this.setState({error})
    let show = !this.state.show
    let event = levels.find(e => e.id === number)
    switch (number.toString()[0]) {
      case "9":
      event = events.find(e => e.id === number)
      this.setState({event, show})
      this.dead.play()
      break;
      default:
      switch (number) {
        case 240:
        this.win.play()
        this.setState({event, show})
        break;
        case 208:
        this.monster.play()
        this.setState({event, show})
        break;
        case 238:
        this.setState({event, show})
        this.doggy.play()
        break;
        case 225:
        this.monster.play()
        this.setState({event, show})
        break;
        case 308:
        this.losingMind.play()
        this.setState({event, show})
        break;
        case 313:
        this.losingMind.play()
        this.setState({event, show})
        break;
        default:
        this.setState({event, show})
      }
    }
  }

  saveGame = () => {
    localStorage.setItem(`save`, this.state.event.id)
    let error = ''
    this.setState({error})
  }

  loadGame = event => {
    if (localStorage.getItem('save')) {
      let eventId = parseInt(localStorage.getItem('save'))
      let newEvent = levels.find(level=>level.id === eventId)
      if (newEvent) {
        this.setState({event: newEvent})
      }
    }
    else if (!localStorage.getItem('save')) {
      console.log('error')
      let error = "No existing saved game."
      this.setState({error})
    }
  }

  get error() {
    if (this.state.error.length) {
      return (
        <ErrorLog error={this.state.error}/>
      )
    }
    else return null
  }

  render() {
    return (
      <div className="App ui centered divided grid">
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={true}
      transitionLeaveTimeout={1000}>
      {this.state.show ? <EventsPrompt1 event={this.state.event} handleClick={this.handleClick}/> : <EventsPrompt2 event={this.state.event} handleClick={this.handleClick} currentUserId={this.state.currentUserId}/>}
      </ReactCSSTransitionGroup>
      {this.error}
      <SaveLoad saveGame={this.saveGame} loadGame={this.loadGame} logOut={this.logOut}/>
      </div>
    )
  }
}

export default App;
