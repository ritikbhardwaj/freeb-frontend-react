import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <Content />
      </React.Fragment>
    )
  }
}

export default App
