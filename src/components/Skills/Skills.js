import React, { useState } from 'react'
import Layout from '../Layout/Layout.js'
import BonusSkills from './BonusSkills.js'
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
import awsLogo from './logos/aws.png'
import jwtLogo from './logos/jwt.png'
import bcryptLogo from './logos/bcrypt.png'
import typescript from './logos/typescript.png'
import nodemailer from './logos/nodemailer.png'
import '../Skills/Skills.css'
import { useDispatch, useSelector } from 'react-redux'
import { modalOptions } from '../../redux/slices/modalSlice.js'
import { showModal, closeModal } from '../../redux/slices/modalSlice.js'
import ModalComponent from '../../UI/ModalComponent.js'

const Skills = () => {
  const modal = useSelector(modalOptions)
  const dispatch = useDispatch()
  
  const showBonusSkills = () => {
    dispatch(showModal('skills'))
  }

  return (
    <Layout>
      <div className="skill-title">
        <h1>My Skillset includes the following:</h1>
        {modal.skills ? (
          <ModalComponent modalName={'skills'}>
            <BonusSkills />
          </ModalComponent>
        ): null}
        <button className="know-btn" onClick={() => showBonusSkills()}>
          Bonus Knowledge
        </button>
      </div>
      <div className="skill-container">
        <div className="front-end">
          <h3>Front-End:</h3>
          <div className="logo-container">
            <div className="logo-flex">
              <label>HTML</label>
              <img className="logo" src={htmlLogo} />
            </div>
            <div className="logo-flex">
              <label>CSS</label>
              <img className="logo" src={cssLogo} />
            </div>
            <div className="logo-flex">
              <label>Javascript</label>
              <img className="logo" src={jsLogo} />
            </div>
          </div>
          <div className="logo-container">
            <div className="logo-flex">
              <label>React</label>
              <img className="logo" src={reactLogo} />
            </div>
            <div className="logo-flex">
              <label>React Router</label>
              <img className="logo" src={routerLogo} />
            </div>
            <div className="logo-flex">
              <label>Redux</label>
              <img className="logo" src={reduxLogo} />
            </div>
          </div>
          <div className="logo-container">
            <div className="logo-flex">
              <label>Bootstrap</label>
              <img className="logo" src={bootstrap} />
            </div>
            <div className="logo-flex">
              <label>Axios</label>
              <img className="logo axios" src={axiosLogo} />
            </div>
            <div className="logo-flex">
              <label>Typescript</label>
              <img className="logo" src={typescript} />
            </div>
          </div>
        </div>
        <div className="back-end">
          <h3>Back-End:</h3>
          <div className="logo-container">
            <div className="logo-flex">
              <label>Express</label>
              <img className="logo express" src={expressLogo} />
            </div>
            <div className="logo-flex">
              <label>Node</label>
              <img className="logo" src={nodeLogo} />
            </div>
            <div className="logo-flex">
              <label>Sequelize</label>
              <img className="logo" src={sequelizeLogo} />
            </div>
          </div>
          <div className="logo-container">
            <div className="logo-flex">
              <label>PostgreSQL</label>
              <img className="logo" src={pgLogo} />
            </div>
            <div className="logo-flex">
              <label>Firebase</label>
              <img className="logo" src={firebase} />
            </div>
            <div className="logo-flex">
              <label>AWS</label>
              <img className="logo" src={awsLogo} />
            </div>
          </div>
          <div className="logo-container">
            <div className="logo-flex">
              <label>JSON Web Token</label>
              <img className="logo" src={jwtLogo} />
            </div>
            <div className="logo-flex">
              <label>Bcrypt</label>
              <img className="logo" src={bcryptLogo} />
            </div>
            <div className="logo-flex">
              <label>Nodemailer</label>
              <img className="logo" src={nodemailer} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Skills





