import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux'
import '../styles/components/Navbar.scss';

const navParentItems = [
  { title: 'Zach Shaw', href: '/', id: 1 },
  { title: 'Projects', href: '/projects', id: 2 },
  { title: 'Experience', href: '/about', id: 3},
  { title: 'Contact', href: '/contact', id: 4},
];

const PROJECTS_NAV_ITEM_ID = 2;

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
    const pathname = this.props.pathname;
    // get nav item id and toggle nav offset
    const index = navParentItems.findIndex(item => {
      if (item.href === pathname ||
          item.href.includes('projects')) {
        return item;
      }
    });
    let item = navParentItems[index].id;
    this.toggleNavOffset(item);
  }
  
   toggleNavOffset(itemId) {
    let  offset = widthPercent * itemId
    this.setState({
      navOffset: offset.toFixed(2)
    });
  }

  render() {
    const singleProjectActive = this.props.pathname.includes('projects');
    return (
      <div className="navbar-wrapper">
        <div className="links">
          {
            navParentItems.map((item) => {
              return item.href !== '/' ?
                <Link to={item.href} 
                      key={item.id} 
                      activeClassName="active" 
                      className={(singleProjectActive && item.id === PROJECTS_NAV_ITEM_ID) && 'active-child'} 
                      onClick={() => this.toggleNavOffset(item.id)}>{item.title}
                </Link>
                :
                <IndexLink to={item.href} key={item.id} activeClassName="active" onClick={() => this.toggleNavOffset(item.id)}>{item.title}</IndexLink>
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