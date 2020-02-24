import styled, { keyframes, Keyframes } from 'styled-components'
import React, { ReactNode } from 'react'
import { FontColor } from '../utils/const'
import { FontSize } from '../utils/const'

interface Props {
  color: string
  size: React.CSSProperties['fontSize']
  delay: number
  animation: Keyframes | null
  time: number
  children: ReactNode | null
  textAlign: 'right' | 'left' | 'center'
  padding: React.CSSProperties['padding']
}
const CustomFont = (props: Props) => {
  return <_Font props={props}>{props.children}</_Font>
}
const _Font = styled.div<{ props: Props }>`
  animation: ${({ props }) => props.animation} ${({ props }) => props.time}s ease ${({ props }) => props.delay}s
    forwards;
  width: 100%;
  text-align: ${({ props }) => props.textAlign};
  color: ${({ props }) => props.color};
  font-size: ${({ props }) => props.size};
  opacity: 0;
  box-sizing: border-box;
  padding: ${({ props }) => props.padding};
`
const defaultAnimation = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`

CustomFont.defaultProps = {
  color: FontColor.Light,
  size: FontSize.normal,
  delay: 0,
  animation: defaultAnimation,
  time: 1,
  textAlign: 'center',
  padding: 0
}

export default CustomFont
