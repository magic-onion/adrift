import React, { Component } from 'react';
import './App.css';
import EventsPrompt1 from './components/eventsprompt1'
import EventsPrompt2 from './components/eventsprompt2'
import SaveLoad from './components/saveLoad'
import UserCreate from './components/UserCreate'
import ErrorLog from './components/errorLog'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import levels from './data/levels.js';
import events from './data/events.js'
import crunching from './assets/crunching.mp3';
import doggy from './assets/dog-bark.mp3';
import losingMind from './assets/losing-mind.mp3';
import monster from './assets/monster-growl.mp3';
import dead from './assets/you-died.mp3';

const init = {
  levels: [],
  event: {},
  show: false,
  username: '',
  password: '',
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
    this.crunching = new Audio(crunching);
    this.doggy = new Audio(doggy);
    this.losingMind = new Audio(losingMind);
    this.monster = new Audio(monster);
    this.dead = new Audio(dead);

  }

  state = init

  componentDidMount() {
    const event = levels[0]
    const currentUserId = 0
    this.setState({event, currentUserId})
  }


  handleUsernameChange = event => {
    let username = event.target.value
    this.setState({username})
  }

  handlePasswordChange = event => {
    let password = event.target.value
    this.setState({password})
  }

  handleSubmit = event => {
    event.preventDefault();
    switch (this.state.formCreates) {
      case 'login':
        let currentUser = this.state.users.find(user => user.username === this.state.username && user.password === this.state.password)
        if (currentUser) {
          let currentUserId = currentUser.id
          this.setState({currentUser, currentUserId})
          fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}/games`).then(r=>r.json()).then(p => {
            let currentGame = p.find(game=>game.user_id === this.state.currentUserId)
            console.log(currentGame.event)
            this.setState({currentGame})
          })
        }
        else {
          let error = "Wrong Info."
          this.setState({error})
        }

      break;

      case 'create':
      let newUser = {username: this.state.username, password: this.state.password}
      if (this.state.users.filter(user => user.username=== newUser.username).length) {
        let error = "User already exists"; this.setState({error}, ()=>console.log(this.state.error))
        return
      }
      else {
        return fetch('http://localhost:3000/api/v1/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        }).then(r=>r.json()).then(p => {
          let currentUserId = p.id
          this.setState({currentUserId}, () => console.log(this.state.currentUserId))
        })
      }
      default:
      console.log('the default')
    }
  }

  handleToggleClick = event => {
    if (event.target.id === this.state.formCreates) {
      return
    }
    else if (event.target.id !== this.state.formCreates && this.state.formCreates === 'create' ) {
      let formCreates = 'login'
      this.setState({formCreates}, ()=>console.log(this.state.formCreates))
    }
    else if (event.target.id !== this.state.formCreates && this.state.formCreates === 'login' ) {
      let formCreates = 'create'
      this.setState({formCreates}, ()=>console.log(this.state.formCreates))
    }
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


  saveGame = () => {
    let newGame = {
      event: this.state.event.id,
      user_id: this.state.currentUserId
    }
    if (this.state.currentGame.event !== undefined) {
      fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}/games/${this.state.currentGame.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newGame)
      }).then(r=>r.json()).then(p=>{
        let currentGame = p
        this.setState({currentGame})
      })
    }
    else {
      fetch(`http://localhost:3000/api/v1/users/${this.state.currentUserId}/games`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newGame)
      }).then(r=>r.json()).then(p => {
        let currentGame = p
        this.setState({currentGame}, ()=> console.log(this.state.currentGame.event))
      })
    }
  }

  getUsers = array => {
    let users = array
    this.setState({users}, () => console.log(this.state.users))
  }


  loadGame = event => {
    let newEvent = levels.find(level=>level.id === this.state.currentGame.event)
    this.setState({event: newEvent}, () => console.log(this.state.event))
  }

  getCurrentGame = obj => {
    this.setState({
      currentGame: obj
    }, ()=> console.log(this.state.currentGame))
  }

  logOut = event => {
    this.setState(init)
  }

  get toggled(){
    return this.state.formCreates === 'create' ? "toggle-yes" : "toggle-no"
  }

  get toggled2(){
    return this.state.formCreates === 'login' ? "toggle-yes" : "toggle-no"
  }

  isLoggedIn = () => {
    if (this.state.currentUserId) {
      return (
        <div className="App ui centered divided grid">
        <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={true}
        transitionLeaveTimeout={1000}>
        {this.state.show ? <EventsPrompt1 event={this.state.event} handleClick={this.handleClick}/> : <EventsPrompt2 event={this.state.event} handleClick={this.handleClick} currentUserId={this.state.currentUserId} getCurrentGame={this.getCurrentGame}/>}
        </ReactCSSTransitionGroup>
        <SaveLoad saveGame={this.saveGame} loadGame={this.loadGame} logOut={this.logOut}/>
        </div>
      )
    }
    else {
      return (
        <div>
      <UserCreate handleSubmit={this.handleSubmit} handleUsernameChange={this.handleUsernameChange} handlePasswordChange={this.handlePasswordChange} handleToggleClick={this.handleToggleClick} toggled={this.toggled} toggled2={this.toggled2} getUsers={this.getUsers}/>
      {this.state.error.length > 0 ? <ErrorLog error={this.state.error}/> : null}
        </div>
    )
    }
  }


  render() {
    return this.isLoggedIn()
  }
}

export default App;
