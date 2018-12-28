import React from 'react'

const DecideOption = ( { handleClick, buttonText } ) => {
    return (
      <div className="ui three wide column">
        <button className="buttons" onClick={handleClick}>{buttonText}</button>
      </div>
    )
}

export default DecideOption
