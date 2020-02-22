import styled, { keyframes, Keyframes } from 'styled-components'
import React, { ReactNode } from 'react'
import { FontColor } from '../utils/color'

interface Props {
  color: string
  size: number
  delay: number
  animation: Keyframes
  time: number
  children: ReactNode | null
  textAlign: 'right' | 'left' | 'center'
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
  font-size: ${({ props }) => props.size}px;
  opacity: 0;
`

const defaultFadeIn = keyframes`
  0% {
    opacity: 0;
    transform:translateX(0px);
  }
  100% {
    opacity: 1;
    transform: translateX(10px);
  } 
`
CustomFont.defaultProps = {
  color: FontColor.Light,
  size: 30,
  delay: 0,
  animation: defaultFadeIn,
  time: 1,
  textAlign: 'center'
}

export default CustomFont
