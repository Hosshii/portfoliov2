import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import MyCard from '../common/myCard'
import Frame from '../common/frame'
import CustomFont from '../common/customfont'
import AboutCard from '../components/aboutcard'
import { FontSize, device } from '../utils/const'

export default class About extends React.Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        <Wrapper>
          <TitleWrapper>
            <Title>
              <Frame isMenuOpen={true} fadeInFrame={fadeInFrame} fadeOutFrame={fadeOutFrame}>
                <CenterWrapper>
                  <CustomFont delay={1} time={0.5} size={FontSize.title}>
                    About
                  </CustomFont>
                </CenterWrapper>
              </Frame>
            </Title>
          </TitleWrapper>
          <AboutWrapper>
            <AboutCard />
          </AboutWrapper>
        </Wrapper>
      </Fragment>
    )
  }
}

const AboutWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
`

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
  width: 100%;
  max-width: 500px;
  height: 60px;
  top: 10px;
  text-align: center;
  box-sizing: border-box;
`
const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  text-align: center;
  margin: 0;
  padding: 0;
  @media ${device.mobileS} {
    left: 0;
    width: 100%;
  }
  @media ${device.laptop} {
    left: 130px;
    width: calc(100% - 260px);
  }
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
