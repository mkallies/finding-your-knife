import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={['finding your knife', 'cooking', 'food journey']}
    />
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
