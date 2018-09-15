import React from 'react'
import {connect} from 'react-redux'

import Cart from './Cart'
import Header from './Header'
import BeerList from './BeerList'

const App = (props) => {
    return (
      <div className='app'>
        <Header />
        {props.currentPage === 'listing' ? <BeerList /> : <Cart />}
      </div>
    )
  }
  
  const mapStateToProps = (state) => {
    return {
      currentPage: state.currentPage
    }
  }
  
  export default connect(mapStateToProps)(App)
  