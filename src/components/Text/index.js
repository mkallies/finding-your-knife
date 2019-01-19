import styled from 'styled-components'
import { fontSize, space, color, width } from 'styled-system'

const Text = styled.div`
  ${fontSize} 
  ${space} 
  ${color}
  ${width}
`

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
