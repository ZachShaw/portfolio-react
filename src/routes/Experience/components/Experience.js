import React from 'react'
import PropTypes from 'prop-types'
import './Experience.scss'

export const Experience = ({}) => {
  return (
    <div className="experience-container">
      <h2 style={{ marginBottom: '30px'}} className="headerFadeIn">Experience</h2>
      <div className="animated animated-1 experience-wrapper">
        <h5>Front End Engineer</h5>
        <p>Where: Play, August 2016 - Present</p>
        <p>Role: Building and maintaining multiple SPA's using both AngularJS and React combined with Redux. This includes a forensic accounting themed game, digital assessment platform, static pages, CMS's plus more. Owning and maintaining repositories, release cycles and automated deployments with CI. All projects are built with or upgraded to component based ES6 architecture.
        </p>
      </div>
      <div className="animated animated-2 experience-wrapper">
        <h5>Front End Engineer</h5>
        <p>Where: Betalab (Boots UK), November 2015 - August 2016</p>
        <p>Role: Building the next generation of scalable Health and Beauty apps for Boots as part of a small team collectively creating 5 different AngularJS 1.5 applications using component based architecture and ES6.
        </p>
      </div>
      <div className="animated animated-3 experience-wrapper">
        <h5>Digital Engineer</h5>
        <p>Where: Betalab (Boots UK), April 2015 - November 2015</p>
        <p>Role: Re-engineering order and collect from conception to production, scoping digital solutions that were fit for purpose with a focus on improving CX. Research on the latest technologies, integration between enterprise systems and 3rd party API's, workflows, option analysis, UX and architecture.
        </p>
      </div>
      <div className="animated animated-4 experience-wrapper">
        <h5>SAP Developer</h5>
        <p>Where: Boots UK, August 2013 - April 2015</p>
        <p>Role: ABAP Developer writing custom interfaces, reports and extensions for different end users & teams. This includes finance, HR, supply chain, pharmacy, real estate and retail as well as writing automation scripts for mass data migration and maintenance.</p>
      </div>
    </div>
  )
}

export default Experience
