import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container" >
        <h2>Contact</h2>
        <div className="contact-wrapper">
          <p>Feel free to email me at <a href="mailto:zachshaw1@gmail.com">zachshaw1@gmail.com</a></p>
        </div>
        <div className="contact-wrapper">
          <p>If you love coffee as much as me then let's definitely go for one <span><img className="img-coffee" src={require(`../../../assets/images/coffee-mug.svg`)} /></span></p>
        </div>
      </div>
    )
  }
}

export default Contact
