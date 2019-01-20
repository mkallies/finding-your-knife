import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { Box, Heading, Flex, Link } from 'rebass'
import { Normalize } from 'styled-normalize'
import Nav from '../Nav'
import theme from '../../utils/theme'
import { LayoutWrapper } from './styles'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <LayoutWrapper as={Flex} flexDirection="column" alignItems="center" p={3}>
      <Normalize />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <Helmet
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            defaultTitle={data.site.siteMetadata.title}
          >
            <html lang={data.site.siteMetadata.language} />
          </Helmet>
        )}
      />

      <Heading fontWeight="bold">
        finding <br />
        your <br />
        knife.
      </Heading>

      <Nav />

      <Box as="main">{children}</Box>

      <Box as="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link href="https://www.gatsbyjs.org">Gatsby</Link>
      </Box>
    </LayoutWrapper>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
