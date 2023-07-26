import React from 'react'
import Layout from '../Layout/Layout.js'
import './About.css'
import 'antd/dist/reset.css'
import {PaperClipOutlined} from '@ant-design/icons'
import { Card, Carousel } from 'antd'
import chickens from './chickens.jpeg'
import family from './family.jpeg'
import giraffe from './giraffe.jpeg'
import me from './me.jpeg'

const About = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center'
  }
  return (
    <Layout>

      <div className="about-container">

      <div className="about">
        <p>
          Hi, my name is Jaclyn Foster. I am currently a student at DevMountain
          pursuing Web Development as a full stack engineer. I found a passion
          for React after self learning the basics of how React and Javascript
          come together prior to my journey at DevMountain.
        </p>
        <p>
          I am a hands on person and enjoy being creative in not just my coding
          realm but my home life as well. I love to crochet and when I am not
          coding or spending time with my family I am crocheting animals,
          blankets, and more for friends and family. We love the outdoors and
          enjoy caring for our chickens.
        </p>
        <p>
          I have a wonderful family who have been nothing but supportive in my
          path to becoming who I am today.
        </p>
      </div>

         <div className="carousel-container">

      <h1 className="carousel-title">A Little About Me:</h1>
      <Carousel autoplay>
        <div className="carousel">
          <img className="carousel-img" style={contentStyle} src={me} />
          <label className="carousel-label">Nice to meet you</label>
        </div>
        <div className="carousel">
          <img className="carousel-img" style={contentStyle} src={family} />
          <label className="carousel-label">
            This is my amazing family
          </label>
        </div>
        <div className="carousel">
          <img className="carousel-img" style={contentStyle} src={giraffe} />
          <label className="carousel-label">I love to crochet in my spare time</label>
        </div>
        <div className="carousel">
          <img className="carousel-img" style={contentStyle} src={chickens} />
          <label className="carousel-label">I also enjoy raising animals</label>
        </div>
      </Carousel>
         </div>
   
      </div>
   
      
    </Layout>
  )
}

export default About
