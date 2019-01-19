import styled from 'styled-components'
import { width, color, borders, space } from 'styled-system'

const Button = styled.button`
  ${width}
  ${color}
  ${borders}
  ${space}
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Button
