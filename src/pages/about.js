import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Box from '../components/Box'

function About() {
  return (
    <Layout>
      <Header content="About me" />
      <Box bg="blue">this is my box</Box>
      <p>I love to cook!</p>
    </Layout>
  )
}

export default About
