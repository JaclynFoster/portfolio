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
import '../Skills/Skills.css'


const Skills = () => {
    return (
      <Layout>
        <div>
            <h3>My Skillset includes the following:</h3>
            <div>
               <img className="logo" src={axiosLogo}/>
               <img className="logo" src={cssLogo}/>
               <img className="logo" src={expressLogo}/>
               <img className="logo" src={htmlLogo}/>
               <img className="logo" src={jsLogo}/>
               <img className="logo" src={nodeLogo}/>
               <img className="logo" src={reactLogo}/>
               <img className="logo" src={pgLogo}/>
            </div>

        </div>
        <div>
            <h3>Bonus Knowledge:</h3>
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