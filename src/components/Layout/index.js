import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import Header from '../Header'
import Nav from '../Nav'
import theme from '../../utils/theme'
import GlobalStyle from '../../utils/injectGlobalStyles'
import Flex from '../Flex'

const Layout = ({ children }) => (
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
    render={() => (
      <ThemeProvider theme={theme}>
        <Flex p={2} flexWrap="wrap" justifyContent="center">
          <GlobalStyle />
          <Header>finding your knife.</Header>
          <Nav />
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Flex>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
