import { Box, Heading } from 'rebass'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'

function Recipes() {
  return (
    <Layout>
      <SEO
        title="Recipes"
        keywords={['finding your knife', 'cooking', 'food journey']}
      />
      <Heading>Recipes</Heading>
      <Box bg="red">Recipes here</Box>
    </Layout>
  )
}

export default Recipes
