import React from 'react'
import Layout from '../Layout/Layout.js'
import { Card, Divider } from 'antd'
import '../Projects/Projects.css'

const Projects = () => {
  return (
    <Layout>
      <div className="card-container">
        <Card
          className="store-card"
          title="Crochet Pattern App"
          headStyle={{ color: 'whitesmoke' }}
        >
          <div className="video">
            <iframe
              width={'100%'}
              src="https://www.youtube.com/embed/4y6BUayiu8Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
          <Divider />
          <div>
            <p className="cardP">
              This app allows you to see pictures of crochet projects, view
              their price, and visit the pattern link. You can create a new
              pattern card, update a current pattern card, or delete a card.
              This is a full CRUD application.
            </p>
            <label>Front End:</label>
            <p>Javascript, HTML, CSS, Axios</p>
            <label>Back End:</label>
            <p>Node, Express, Cors</p>
          </div>
          <div className="card-link">
            <a
              href="https://github.com/JaclynFoster/full-crud-app"
              target="_blank"
            >
              Github Link
            </a>
          </div>
        </Card>
        <Card
          className="store-card"
          title="Neighborhood Chat Page"
          headStyle={{ color: 'whitesmoke' }}
        >
          <div className="video">
            <iframe
              width={'100%'}
              src="https://www.youtube.com/embed/DrIzf3Ld2RE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
          <Divider />
          <div className="cardP">
            <p>
              This is a full CRUD application hosted through AWS and Postgres
              database through Bit.io. Users can view their profile information
              on their profile card, create posts, like posts, add comments to
              other user's posts and delete their own posts.
            </p>
            <label>Front End:</label>
            <p>
              Javascript, HTML, CSS, React, React Router, Context API, Axios
            </p>
            <label>Back End:</label>
            <p>Node, Express, Cors, Sequelize</p>
          </div>
          <div className="card-link">
            <a
              href="https://github.com/JaclynFoster/neighborhood-chat-page"
              target="_blank"
            >
              Github Link
            </a>
            <Divider type="vertical" />
            <a
              className="site"
              href="http://blockbanter.jaclyndfoster.com"
              target="_blank"
            >
              Site Link
            </a>
          </div>
        </Card>
        <Card
          className="store-card"
          title="E-Commerce Site"
          headStyle={{ color: 'whitesmoke' }}
        >
          <div className="card-flex">
            <div className="video">
              <iframe
                width={'100%'}
                src="https://www.youtube.com/embed/0IOMiHQT6Gg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </div>
            <Divider />
            <div className="cardP">
              <p>
                This is a full-stack E-Commerce site allowing users to browse
                animals online, add to cart and checkout. The user can signin or
                create an account and can only view certain pages when logged
                in. Hosted through serverless S3 via AWS and database is through
                PostgreSQL Cockroach DB.
              </p>
              <label>Front End:</label>
              <p>
                Javascript, HTML, CSS, React, React Router, Redux, Context API,
                Axios, Bootstrap
              </p>
              <label>Back End:</label>
              <p>Node, Express, Cors, PostgreSQL, Bcrypt, JWT</p>
            </div>
            <div className="card-link">
              <a
                href="https://github.com/JaclynFoster/store-app"
                target="_blank"
              >
                Github Link
              </a>
              <Divider type="vertical" />
              <a
                className="site"
                href="http://fawsturfarms.jaclyndfoster.com/"
                target="_blank"
              >
                Site Link
              </a>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default Projects






