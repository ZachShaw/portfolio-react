import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import '../styles/components/Navbar.scss';

// const navItems = [
//   { title: 'home', href: '/', id: 1 },
//   { title: 'counter', href: '/counter', id: 2 },
//   { title: 'projects', href: '/counter', id: 3 }
// ];

// work out % of each item, depending on total amount of items in the nav.


const defaultOffset = '33.333%';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOffset: defaultOffset
    };
  }

   toggleActiveNav(itemId) {
    let offset = defaultOffset;

    if (itemId === 2) {
      offset = '66.666%'
    } else if (itemId === 3) {
      offset = '99.999%'
    }

    this.setState({
      navOffset: offset
    });
  }
    
  render() {

    // this.props.location.pathname
    // pathname.includes('projects') && ...

    const {
      navOffset
    } = this.state;
    console.log('YOOO ', this.state);
  
    return (
      <div className="navbar-wrapper">
        <div className="links">
          {/*<IndexLink to='/' activeClassName='page-layout__nav-item--active' onClick={() => this.toggleActiveNav('home')}>Home</IndexLink> */}
          <Link to='/' activeClassName='page-layout__nav-item--active' onClick={() => this.toggleActiveNav(1)}>home</Link>
          <Link to='/counter' activeClassName='page-layout__nav-item--active' onClick={() => this.toggleActiveNav(2)}>counter</Link>
          <Link to='/projects' activeClassName='page-layout__nav-item--active' onClick={() => this.toggleActiveNav(3)}>projects</Link>
        </div>
        <div className="indicator-wrapper">
          <div className="indicator" 
               style={{
                 left: `calc(${navOffset} - 60px)`
               }}
          />
        </div>
      </div>
    )
  }
}

export default Navbar