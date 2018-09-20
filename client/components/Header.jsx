import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }
  render() {
    return (
      <div className='header'>
        <h1><span class="fa fa-beer"></span>Yummy As Beers <span class="fa fa-beer"></span></h1>
      </div>
    )
  }
}


// const Header = () => {
//   return (
//     <h1>
//       <span className='fa fa-beer' />
//       {' '}Sweet As Beers{' '}
//       <span className='fa fa-beer' />
//     </h1>
//   )
// }

export default Header

// <span> = is used for grouping and applying styles to inline elements