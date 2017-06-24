import React from 'react'
import PropTypes from 'prop-types'
import './Contact.scss';

export const Contact = ({}) => (
  <div className="contact-container" >
    <h2>Contact</h2>
    <div className="contact-wrapper">
      <img className="img-email" src={require(`../../../assets/images/email.svg`)} />
      <p>Feel free to email me at zachshaw1@gmail.com</p>
    </div>
    <div className="contact-wrapper">
      <div className="coffee-wrapper">
        <img className="img-coffee" src={require(`../../../assets/images/coffee.svg`)} />
      </div>
      <p>If you love coffee as much as me then let's definitely go for one :)</p>
    </div>
  </div>
)

export default Contact
