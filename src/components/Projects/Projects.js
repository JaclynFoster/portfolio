import React from 'react'
import Layout from '../Layout/Layout.js'
import crochet from './crochet-app.png'
import { Card, Divider } from 'antd'
import '../Projects/Projects.css'

const Projects = () => {
  return (
    <Layout>
      <Card className="crochet-card" title="Crochet Pattern App">
        <img className="project-img" src={crochet} />
        <Divider />
        <p>
          This app allows you to see pictures of crochet projects, view their
          price, and visit the pattern link. You can create a new pattern card,
          update a current pattern card, or delete a card. This is a full CRUD
          application.
        </p>
        <label>Front End:</label>
        <p>Javascript, HTML, CSS</p>
        <label>Back End:</label>
        <p>Node, Express, Axios, Cors</p>
        <a href="https://github.com/JaclynFoster/full-crud-app" target="_blank">
          Github Link
        </a>
      </Card>
      <Card className="neighbor-card" title="Neighborhood Chat Page">
        <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/DrIzf3Ld2RE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <Divider />
        <p>
          This is a full CRUD application hosted through AWS and Postgres
          database through Bit.io. Users can view their profile information on
          their profile card, create posts, like posts, add comments to other
          user's posts and delete their own posts.
        </p>
        <label>Front End:</label>
        <p>Javascript, HTML, CSS, React, React Router, Context API</p>
        <label>Back End:</label>
        <p>Node, Express, Axios, Cors, Sequelize</p>
        <a
          href="https://github.com/JaclynFoster/neighborhood-chat-page"
          target="_blank"
        >
          Github Link
        </a>
        <a className="site" href="http://54.177.82.121:3400/" target="_blank">
          Site Link
        </a>
      </Card>
    </Layout>
  )
}

export default Projects
