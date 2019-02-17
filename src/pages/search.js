import { Box, Heading } from 'rebass'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'

function Search() {
  return (
    <Layout>
      <SEO
        title="Search"
        keywords={['finding your knife', 'cooking', 'food journey']}
      />
      <Heading>Search</Heading>
      <Box bg="rebeccapurple">Search here</Box>
    </Layout>
  )
}

export default Search
