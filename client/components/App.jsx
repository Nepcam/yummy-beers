import React from 'react'
//import {connect} from 'react-redux'

import Cart from './Cart'
import Header from './Header'
import BeerList from './BeerList'
//import Listing from 'Listing'
import BeerListItem from './BeerListItem'
import Listing from './Listing';

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
      
      <Cart />
      </div>
    )
  }
}

// const App = (props) => {
//     return (
//       <div className='app'>
//         <Header />
//         {props.currentPage === 'listing' ? <BeerList /> : <Cart />}
//       </div>
//     )
//   }
  
//   const mapStateToProps = (state) => {
//     return {
//       currentPage: state.currentPage
//     }
//   }
  
  export default App