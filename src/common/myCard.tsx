import React from 'react'
import styled from 'styled-components'
import { FrameColor } from '../utils/const'

interface MyCardProps {
  width: React.CSSProperties['width']
  height: React.CSSProperties['height']
  textAlign: React.CSSProperties['textAlign']
}
const MyCard = styled.div<Partial<MyCardProps>>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  text-align: ${({ textAlign }) => textAlign};
  position: relative;
  padding: 25px;
  border: solid 3px ${FrameColor.Light};
  /* background-color: red; */
`

MyCard.defaultProps = {
  width: undefined,
  height: undefined,
  textAlign: 'center'
}
export default MyCard
