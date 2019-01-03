import React from 'react'

const SaveLoad = props => {
  return (
    <div className="save-load">
    <button onClick={props.saveGame}>Save Game</button>
    <button onClick={props.loadGame}>Load Game</button>
    <button onClick={props.logOut}>Logout</button>
    </div>
  )
}

export default SaveLoad
