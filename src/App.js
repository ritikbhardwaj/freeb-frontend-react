import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <Content />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
