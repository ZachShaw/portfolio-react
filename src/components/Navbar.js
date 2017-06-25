import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import '../styles/components/Navbar.scss';

const navParentItems = [
  { title: 'Projects', href: '/projects', id: 1 },
  { title: 'Experience', href: '/about', id: 2},
  { title: 'Contact', href: '/contact', id: 3},
];

// This needs updating whenever there is a change to navParentItems
const PROJECTS_NAV_ITEM_ID = 1;

const widthPercent = 100 / navParentItems.length;

const mapStateToProps = (state) => ({
   pathname: state.location.pathname
})

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavOffset = this.toggleNavOffset.bind(this);
    this.onClickToggleNav =this.onClickToggleNav.bind(this);
  }

  componentWillMount() {
    const pathname = this.props.location.pathname;
    // get nav item id and toggle nav offset
    const index = navParentItems.findIndex(item => {
      if (item.href === pathname) {
        return item;
      }
    });
    if (index === -1 && pathname.includes('projects')) {
      var item = navParentItems[0].id;
    } else {
      var item = navParentItems[index].id;
    }
    this.toggleNavOffset(item);

    this.toggleMobileNav = false;
  }

   toggleNavOffset(itemId) {
    let  offset = widthPercent * itemId
    this.setState({
      navOffset: offset.toFixed(2)
    });
  }

  onClickToggleNav() {
    if (this.toggleMobileNav) {
      this.toggleMobileNav = !this.toggleMobileNav;
      this.setState({
        navMbContainer: {
          height: '0px',
          width: '0px',
          WebkitTransition: 'height 10ms cubic-bezier(0.4, 0.0, 1, 1)',
          msTransition: 'height 10ms cubic-bezier(0.4, 0.0, 1, 1)'
        }
      })
    } else {
      this.toggleMobileNav = !this.toggleMobileNav;
      this.setState({
        navMbContainer: {
          height: '250px',
          width: '190px',
          border: '1px solid #fff',
          WebkitTransition: 'all 250ms cubic-bezier(0.0, 0.0, 0.2, 1)',
          msTransition: 'all 250ms cubic-bezier(0.0, 0.0, 0.2, 1)'
        }
      })
    }
  }

  iconInitials() {
    if (this.props.location.pathname !== '/') {
      return (
        <Link to='/'>
          <div className="navbar-title">
            <h1>ZS</h1>
          </div>
        </Link>
      )
    }
  }

  toggleNavItems() {
    return this.toggleMobileNav ? 'mb-active' : 'mb-inactive'
  }

  toggleBurger() {
    return this.toggleMobileNav ? 'hamburger-is-active' : ''
  }

  render() {
    const singleProjectActive = this.props.location.pathname.includes('projects');
    const { toggleMobileNav } = this.state;
    return (
      <div className="navbar-container">
        {this.iconInitials()}
        <div className="navbar-desktop-wrapper">
          <div className="links">
            {
              navParentItems.map((item) => {
                return (
                  <Link to={item.href}
                      key={item.id}
                      activeClassName="active"
                      style={{ width: `${widthPercent}%`}}
                      className={(singleProjectActive && item.id === PROJECTS_NAV_ITEM_ID) && 'active-child'}
                      onClick={() => this.toggleNavOffset(item.id)}>{item.title}
                  </Link>
                )
              })
            }
          </div>
          <div className="indicator-wrapper">
            <div className="indicator"
                style={{
                  left: `calc(${this.state.navOffset}% - 95px)`
                }}>
            </div>
          </div>
        </div>
        <div className="navbar-mobile-wrapper">
          { this.toggleMobileNav && 
            <div onClick={()=> this.onClickToggleNav()} className="overlay"></div>
          }
          <div onClick={()=> this.onClickToggleNav()} className={`hamburger ${this.toggleBurger()}`}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <div className="nav-mb-box" style={
            this.state.navMbContainer
          }>
            <div className="nav-mb-fill"></div>
            {
              navParentItems.map((item) => {
                return (
                  <Link to={item.href}
                      key={item.id}
                      onClick={()=> this.onClickToggleNav()}
                      className={this.toggleNavItems()}>
                      <div>{item.title}</div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Navbar)
