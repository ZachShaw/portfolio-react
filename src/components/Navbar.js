import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux'
import '../styles/components/Navbar.scss';

// TODO This is almost done, just needs to be disabled when on landing page and enabled + rendered on displaying
// any other route.

const navParentItems = [
  { title: 'Projects', href: '/projects', id: 1 },
  { title: 'Experience', href: '/about', id: 2},
  { title: 'Contact', href: '/contact', id: 3},
];

const PROJECTS_NAV_ITEM_ID = 1;

const widthPercent = 100 / navParentItems.length;

const mapStateToProps = (state) => ({
   pathname: state.location.pathname
})

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavOffset = this.toggleNavOffset.bind(this);
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
  }

   toggleNavOffset(itemId) {
    let  offset = widthPercent * itemId
    this.setState({
      navOffset: offset.toFixed(2)
    });
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
      <div>
        {this.iconInitials()}
        <div className="navbar-wrapper">
          <div className="links">
            {
              navParentItems.map((item) => {
                return (
                  <Link to={item.href}
                      key={item.id}
                      activeClassName="active"
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
                }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Navbar)
