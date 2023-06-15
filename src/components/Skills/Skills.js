import React from 'react'
import Layout from '../Layout/Layout.js'
import axiosLogo from '../Skills/logos/axios-logo.png'
import cssLogo from '../Skills/logos/css-logo.png'
import expressLogo from '../Skills/logos/express-logo.png'
import htmlLogo from '../Skills/logos/html-logo.png'
import jsLogo from '../Skills/logos/javascript-logo.png'
import nodeLogo from '../Skills/logos/node-logo.png'
import pgLogo from '../Skills/logos/postgres-logo.png'
import reactLogo from '../Skills/logos/react-logo.png'
import bootstrap from '../Skills/logos/bootstrap.png'
import firebase from '../Skills/logos/firebase.png'
import routerLogo from '../Skills/logos/router-logo.png'
import sequelizeLogo from '../Skills/logos/sequelize-logo.png'
import reduxLogo from '../Skills/logos/redux.png'
import '../Skills/Skills.css'

const Skills = () => {
  return (
    <Layout>
      <div className="skill-container">
        <h3>My Skillset includes the following:</h3>
        <h3>Front-End:</h3>
        <div className="logo-container">
          <label>HTML</label>
          <img className="logo" src={htmlLogo} />
          <label>CSS</label>
          <img className="logo" src={cssLogo} />
          <label>Javascript</label>
          <img className="logo js" src={jsLogo} />
          <label className="react-label">React</label>
          <img className="logo react" src={reactLogo} />
          <label>React Router</label>
          <img className="logo" src={routerLogo} />
          <label>Redux</label>
          <img className="logo redux" src={reduxLogo} />
          <label>Bootstrap</label>
          <img className="logo bs" src={bootstrap} />
        </div>
        <h3>Back-End:</h3>
        <div className="logo-container back">
          <label>Axios</label>
          <img className="logo axios" src={axiosLogo} />
          <label>Express</label>
          <img className="logo express" src={expressLogo} />
          <label>Node</label>
          <img className="logo" src={nodeLogo} />
          <label className="sql">Sequelize</label>
          <img className="logo" src={sequelizeLogo} />
          <label>PostgreSQL</label>
          <img className="logo" src={pgLogo} />
          <label>Firebase</label>
          <img className="logo" src={firebase} />
        </div>
      </div>
      <div className="bonus-container">
        <h4>Bonus Knowledge:</h4>
        <ul>
          <li>10+ years experience in the medical field</li>
          <li>7+ years experience in management</li>
          <li>Licensed Texas Workers Compensation Adjuster</li>
          <li>Certified Professional Medical Biller</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Skills

