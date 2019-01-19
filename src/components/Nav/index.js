import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { width } from 'styled-system'

const NavWrapper = styled.nav`
  ${width}
`

export default function Nav() {
  return (
    <NavWrapper width={1}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </NavWrapper>
  )
}
