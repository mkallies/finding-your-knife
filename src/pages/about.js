import { Box, Heading } from 'rebass'
import React from 'react'
import Layout from '../components/Layout'

function About() {
  return (
    <Layout>
      <Heading>About me</Heading>
      <Box bg="blue">this is my box</Box>
      <p>I love to cook!</p>
    </Layout>
  )
}

export default About
