import React, { Fragment } from 'react'
import { FrameColor, FontSize } from '../utils/const'
import styled, { keyframes } from 'styled-components'
import Title from '../components/title'
import { device, url, FontColor } from '../utils/const'
import WorkCard, { Content } from '../components/aboutcard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Work extends React.Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <Wrapper>
        <Title title="Work" />
        <WorkWrapper>
          <WorkCard title={toolTitle} content={toolContent}></WorkCard>
          <WorkCard title={rs9ccTitle} content={rs9ccContent}></WorkCard>
        </WorkWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  text-align: center;
  margin: 0;
  padding: 0;
  @media ${device.mobileS} {
    left: 5%;
    width: 90%;
  }
  @media ${device.laptop} {
    left: 130px;
    width: calc(100% - 260px);
  }
`
const show = keyframes`
  0% {
      /* display: none; */
      opacity: 0;
    }
  100% {
    /* display: block; */
    opacity: 1;
  }
`
const WorkWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  opacity: 0;
  animation: ${show} 1s ease 1.5s forwards;
`

const StyledA = styled.a`
  text-decoration: none;
  :link,
  :visited,
  :active {
    color: ${FontColor.Light};
  }
`

const portfolioLink = () => {
  return (
    <Fragment>
      <StyledA href={url.portfolio} target="_blank">
        link
        <FontAwesomeIcon
          icon={['fas', 'external-link-alt']}
          style={{ fontSize: 14, marginLeft: '5px', marginBottom: '1px' }}
        />
      </StyledA>
    </Fragment>
  )
}

const toolTitle = 'このサイト'
const toolContent: Content[] = [
  { title: '使用技術', content: 'React.js, TypeScript' },
  { title: '作成時期', content: '2020年2月' },
  { content: portfolioLink() },
]

const rs9ccLink = () => {
  return (
    <Fragment>
      <StyledA href={url.rs9cc} target="_blank">
        github
        <FontAwesomeIcon
          icon={['fas', 'external-link-alt']}
          style={{ fontSize: 14, marginLeft: '5px', marginBottom: '1px' }}
        />
      </StyledA>
    </Fragment>
  )
}

const demoLink = () => {
  return (
    <Fragment>
      <StyledA href={url.rs9cc_web} target="_blank">
        demo
        <FontAwesomeIcon
          icon={['fas', 'external-link-alt']}
          style={{ fontSize: 14, marginLeft: '5px', marginBottom: '1px' }}
        />
      </StyledA>
    </Fragment>
  )
}

const rs9ccTitle = 'mini cコンパイラ'
const rs9ccContent: Content[] = [
  { title: '使用技術', content: 'Rust' },
  { title: '作成時期', content: '2020年11月~現在' },
  { content: rs9ccLink() },
  { content: demoLink() },
]
