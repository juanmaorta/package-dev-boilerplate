import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import SomeButton from '@auvik/button'
import SomeCard from '@auvik/card'

const App = ({label}) => {
  return (
    <div>
      <h1>This is some dummy example of a custom package component</h1>
      <SomeButton label={label} />
      <SomeCard />
    </div>
  )
}

ReactDOM.render(
  <App label="Click me!" />,
  document.getElementById('root')
);
