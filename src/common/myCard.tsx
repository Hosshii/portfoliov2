import React from 'react'
import styled from 'styled-components'

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
  padding: 10px;
  /* background-color: red; */
`

MyCard.defaultProps = {
  width: undefined,
  height: undefined,
  textAlign: 'center'
}
export default MyCard
