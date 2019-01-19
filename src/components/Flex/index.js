import styled from 'styled-components'
import {
  space,
  width,
  color,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
} from 'styled-system'

const Flex = styled.div`
  display: flex;
  ${space} 
  ${width} 
  ${color} 
  ${alignItems} 
  ${justifyContent} 
  ${flexWrap} 
  ${flexDirection};
`

export default Flex
