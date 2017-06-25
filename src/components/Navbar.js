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
          display: 'none'
        }
      })
    } else {
      this.toggleMobileNav = !this.toggleMobileNav;
      this.setState({
        navMbContainer: {
          display: 'flex',
          height: '280px',
          width: '230px',
          border: '1px solid #fff'
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

  render() {
    const singleProjectActive = this.props.location.pathname.includes('projects');
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
          <h1 onClick={()=> this.onClickToggleNav()}>X</h1>
          <div className="nav-mb-box" style={
            this.state.navMbContainer
          }>
            <div className="nav-mb-fill"></div>
            {
              navParentItems.map((item) => {
                return (
                  <Link to={item.href}
                      key={item.id}
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
