import React from 'react'

const DecideOption = ( { handleClick, buttonText } ) => {
    return (
      <div className="button-box ui three wide column">
        <button className="button" onClick={handleClick}><span>{buttonText}</span></button>
      </div>
    )
}

export default DecideOption
