import React from 'react'
import Header from './Header'
import Listing from './Listing'

// This might need to be turned into a stateful (class-based) component
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <div className='app'>
      <Header />
      <Listing />
      </div>
    )
  }
}

export default App