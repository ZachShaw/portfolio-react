import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux'
import '../styles/components/Navbar.scss';

const navItems = [
  { title: 'Home', href: '/', id: 1 },
  { title: 'Counter', href: '/counter', id: 2 },
  { title: 'Projects', href: '/projects', id: 3 },
  { title: 'About', href: '/about', id: 4},
  { title: 'Contact', href: '/contact', id: 5}
];

const widthPercent = 100 / navItems.length;

const mapStateToProps = (state) => ({
   pathname: state.location.pathname
})

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleActiveNav = this.toggleActiveNav.bind(this);
  }

  componentWillMount() {
    var index = navItems.findIndex(item => item.href === this.props.pathname);
    let item = navItems[index].id;
    this.toggleActiveNav(item);
  }

   toggleActiveNav(itemId) {
    let  offset = widthPercent * itemId
    this.state = {
      navOffset: offset.toFixed(2)
    };
  }
    
  render() {
    
    return (
      <div className="navbar-wrapper">
        <div className="links">
          {/*<IndexLink to='/' activeClassName='page-layout__nav-item--active' onClick={() => this.toggleActiveNav('home')}>Home</IndexLink> */}
          {
            navItems.map((item) => {
              if (item.id !== 2) {
                return <Link to={item.href} key={item.id} onClick={() => this.toggleActiveNav(item.id)}>{item.title}</Link>
              } 
            })
          }
        </div>
        <div className="indicator-wrapper">
          <div className="indicator" 
               style={{
                 left: `calc(${this.state.navOffset}% - 62px)`
               }}
          />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Navbar)