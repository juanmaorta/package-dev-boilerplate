import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Button } from '@auvik/ui'

const App = ({label}) => {
  return (
    <div>
      <h1>This is some dummy example of a custom package component</h1>
      <Button label={label} />
    </div>
  )
}

ReactDOM.render(
  <App label="Click me!" />,
  document.getElementById('root')
);
