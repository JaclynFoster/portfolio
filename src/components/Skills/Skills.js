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
import bitLogo from '../Skills/logos/bitio-logo.png'
import routerLogo from '../Skills/logos/router-logo.png'
import sequelizeLogo from '../Skills/logos/sequelize-logo.png'
import '../Skills/Skills.css'


const Skills = () => {
    return (
      <Layout>
        <div className="skill-container">
            <h3>My Skillset includes the following:</h3>
                <h3>Front-End:</h3>    
            <div className="logo-container">
               <label>HTML</label>
               <img className="logo" src={htmlLogo}/>
               <label>CSS</label>
               <img className="logo" src={cssLogo}/>
               <label>Javascript</label>
               <img className="logo" src={jsLogo}/>
               <label>React</label>
               <img className="logo" src={reactLogo}/>
               <label>React Router</label>
               <img className="logo router" src={routerLogo}/>
            </div>
               <h3>Back-End:</h3>
            <div className="logo-container">
               <label>Axios</label>
               <img className="logo" src={axiosLogo}/>
               <label>Express</label>
               <img className="logo" src={expressLogo}/>
               <label>Node</label>
               <img className="logo" src={nodeLogo}/>
               <label>Sequelize</label>
               <img className="logo" src={sequelizeLogo}/>
               <label>PostgreSQL</label>
               <img className="logo" src={pgLogo}/>
               <label>Bit.io</label>
               <img className="logo" src={bitLogo}/>
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