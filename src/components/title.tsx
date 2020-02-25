import React from 'react'
import styled, { keyframes } from 'styled-components'
import Frame from '../common/frame'
import CustomFont from '../common/customfont'
import { FontSize } from '../utils/const'

interface Props {
  title: string
}
const title = (props: Props) => {
  return (
    <TitleWrapper>
      <Title>
        <Frame isMenuOpen={true} fadeInFrame={fadeInFrame} fadeOutFrame={fadeOutFrame}>
          <CenterWrapper>
            <CustomFont delay={1} time={0.5} size={FontSize.title}>
              {props.title}
            </CustomFont>
          </CenterWrapper>
        </Frame>
      </Title>
    </TitleWrapper>
  )
}

export default title

const CenterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: black;
`

const TitleWrapper = styled.div`
  height: 200px;
  text-align: center;
`
const Title = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90%;
  max-width: 500px;
  height: 60px;
  top: 30px;
  text-align: center;
  box-sizing: border-box;
`
const fadeInFrame = keyframes`
    0% {
      width: 0;
      height: 0;
      right: 50%;
      top: 50%;
      opacity: 0;
    }
    50% {
      width: 80%;
      height: 1px;
      right: 10%;
      top: 50%;
      opacity: 1;
    }
    100% {
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
`

const fadeOutFrame = keyframes`
  0% {
      width: 100%;
      height: 100%;
    }
  50% {
    width: 80%;
    height: 1px;
    right: 10%;
    top: 50%;
    opacity: 1;
  }
  100% {
    width: 0;
    height: 0;
    right: 50%;
    top: 50%;
    opacity: 0;
  }
`
