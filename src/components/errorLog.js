import React from 'react'

const ErrorLog = props => {
  return (
    <div className="error-log">
      <h2>{props.error}</h2>
    </div>
  )
}

export default ErrorLog
