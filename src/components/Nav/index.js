import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Flex, Link } from 'rebass'

const links = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Recipes',
    to: '/recipes',
  },
  {
    title: 'Search',
    to: '/search',
  },
  {
    title: 'About',
    to: '/about',
  },
]

export default function Nav() {
  return (
    <Flex as="nav" width={1} my="2rem" justifyContent="center">
      {links.map(({ title, to }) => (
        <Link key={title} as={GatsbyLink} ml="1rem" to={to}>
          {title}
        </Link>
      ))}
    </Flex>
  )
}
