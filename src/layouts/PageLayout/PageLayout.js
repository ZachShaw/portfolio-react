import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div>
    <Navbar/>
    <div className='container text-center'>
      <div className='page-layout__viewport'>
        {children}
      </div>
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
