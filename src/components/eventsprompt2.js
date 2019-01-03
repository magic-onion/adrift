import React from 'react'
import DecideOption from './decideoption'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class EventsPrompt2 extends React.Component {

  render() {
    const {props: {event: {item, button0, button1, button0Text, button1Text, showButton2}, handleClick}} = this
    return (
      <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={true}
      transitionLeaveTimeout={1000}>
        <div className="events-prompt">
        <h2>{item}</h2>
        <DecideOption className="buttons" buttonText={button0Text} handleClick={() => handleClick(button0)}/>
        {showButton2 ? <DecideOption className="buttons" buttonText={button1Text} handleClick={() => handleClick(button1)}/> : null}
        </div>
      </ ReactCSSTransitionGroup>
    )
  }
}

export default EventsPrompt2
