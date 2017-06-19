import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux'
import '../styles/components/Navbar.scss';

const navItems = [
  { title: 'Zach Shaw', href: '/', id: 1 },
  { title: 'Projects', href: '/projects', id: 2 },
  { title: 'Experience', href: '/about', id: 3},
  { title: 'Contact', href: '/contact', id: 4},
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
          {
            navItems.map((item) => {
              return item.href !== '/' ?
                <Link to={item.href} key={item.id} activeClassName="active" onClick={() => this.toggleActiveNav(item.id)}>{item.title}</Link>
                :
                <IndexLink to={item.href} key={item.id} activeClassName="active" onClick={() => this.toggleActiveNav(item.id)}>{item.title}</IndexLink>
            })
          }
        </div>
        <div className="indicator-wrapper">
          <div className="indicator" 
               style={{
                 left: `calc(${this.state.navOffset}% - 69px)`
               }}
          />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Navbar)