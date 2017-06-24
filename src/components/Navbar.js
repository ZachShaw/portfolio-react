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
          height: '35px',
          width: '35px'
        }
      })
    } else {
      this.toggleMobileNav = !this.toggleMobileNav;
      this.setState({
        navMbContainer: {
          height: '300px',
          width: '180px',
          transition: 'width 150ms cubic-beziercubic-bezier(0.23, 1, 0.32, 1), height 150ms cubic-beziercubic-bezier(0.23, 1, 0.32, 1)',
          WebkitTransition: 'width 150ms cubic-beziercubic-bezier(0.23, 1, 0.32, 1), height 150ms cubic-beziercubic-bezier(0.23, 1, 0.32, 1)'
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
          <div onClick={()=> this.onClickToggleNav()} className="nav-mb-box" style={
            this.state.navMbContainer
          }>
            <span>X</span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Navbar)
