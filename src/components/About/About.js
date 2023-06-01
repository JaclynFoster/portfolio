import React from 'react'
import Layout from '../Layout/Layout.js'
import '../About/About.css'
import 'antd/dist/reset.css'
import { Carousel } from 'antd'
import chickens from './chickens.jpeg'
import family from './family.jpeg'
import giraffe from './giraffe.jpeg'
import me from './me.jpeg'

const About = () => {
  const carousel = {}
  return (
    <Layout>
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
      <Carousel autoplay>
        <div className="carousel">
          <img className="carousel-img" src={me} />
        </div>
        <div className="carousel">
          <img className="carousel-img" src={family} />
        </div>
        <div className="carousel">
          <img className="carousel-img" src={giraffe} />
        </div>
        <div className="carousel">
          <img className="carousel-img" src={chickens} />
        </div>
      </Carousel>
    </Layout>
  )
}

export default About
