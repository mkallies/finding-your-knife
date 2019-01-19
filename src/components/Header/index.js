import Text from '../Text'

const Header = Text.withComponent('h3')

Header.defaultProps = {
  regular: true,
  fontSize: 4,
  m: 0,
}

Header.h1 = Header.withComponent('h1')
Header.h1.defaultProps = {
  bold: true,
  fontSize: 6,
  m: 0,
}

Header.h2 = Header.withComponent('h2')
Header.h2.defaultProps = {
  bold: true,
  fontSize: 5,
  m: 0,
}

Header.h3 = Header.withComponent('h3')
Header.h3.defaultProps = {
  regular: true,
  fontSize: 4,
  m: 0,
}

Header.h4 = Header.withComponent('h4')
Header.h4.defaultProps = {
  regular: true,
  fontSize: 3,
  m: 0,
}

Header.h5 = Header.withComponent('h5')
Header.h5.defaultProps = {
  bold: true,
  fontSize: 2,
  m: 0,
}

Header.h6 = Header.withComponent('h6')
Header.h6.defaultProps = {
  bold: true,
  caps: true,
  fontSize: 0,
  m: 0,
}

export default Header
