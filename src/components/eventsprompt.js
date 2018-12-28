import React from 'react'
import DecideOption from './decideoption'
// import events from './data/events.js';
// import events2 from './data/events2.js';

const EventsPrompt = ( { event: {item, button0, button1, button0Text, button1Text, showButton2}, handleClick } ) => {

    return (
      <div className="events-prompt ui centered grid">
      <p> Coast to Coast </p>
      <h2>{item}</h2>
      <DecideOption className="buttons" buttonText={button0Text} handleClick={() => handleClick(button0)}/>
      {showButton2 ? <DecideOption className="buttons" buttonText={button1Text} handleClick={() => handleClick(button1)}/> : null}
      </div>
    )
}

export default EventsPrompt
