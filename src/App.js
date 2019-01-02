import React, { Component } from 'react';
import './App.css';
import EventsPrompt1 from './components/eventsprompt1'
import EventsPrompt2 from './components/eventsprompt2'
import UserLogin from './components/UserLogin'
import UserCreate from './components/UserCreate'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import levels from './data/levels.js';
import events from './data/events.js'
import crunching from './assets/crunching.mp3';
import doggy from './assets/dog-bark.mp3';
import losingMind from './assets/losing-mind.mp3';
import monster from './assets/monster-growl.mp3';
import dead from './assets/you-died.mp3';


// import EventShow from './components/eventShow'
// import events from './data/events.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.crunching = new Audio(crunching);
    this.doggy = new Audio(doggy);
    this.losingMind = new Audio(losingMind);
    this.monster = new Audio(monster);
    this.dead = new Audio(dead);

  }

  state = {
    levels: [],
    event: {},
    show: false,
    userInfo: {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    const event = levels[0]
    this.setState({levels, event})
  }

  handleClick = (number) => {
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

  handleSubmit = event => {
    event.preventDefault();
    switch (event.target.id) {
      case 'login':
      console.log('login')
      break;
      case 'create':
      console.log('create')
      break;
      default:
      console.log('the default')
    }
  }

  handleChange = event => {
    let userInfo = {
      [event.target.name]: event.target.value
    }
    this.setState({userInfo})
  }

  render() {
    return (
      <div className="App ui centered divided grid">
      <UserCreate handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={true}
      transitionLeaveTimeout={1000}>
      {this.state.show ? <EventsPrompt1 event={this.state.event} handleClick={this.handleClick}/> : <EventsPrompt2 event={this.state.event} handleClick={this.handleClick}/>}
      </ReactCSSTransitionGroup>
      <UserLogin handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;



// {this.state.event.showAnimation ? <Animation event={this.state.event}/> : <TitleCard event={this.state.event} />}
