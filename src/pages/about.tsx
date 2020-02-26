import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import AboutCard, { Content } from '../components/aboutcard'
import { device, url, FontColor } from '../utils/const'
import Title from '../components/title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class About extends React.Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Title title="about" />
          <AboutWrapper>
            <AboutCard title={profileTitle} content={profileContent} />
            <AboutCard title={languageTitle} content={languageContent} bottom={langBottom} />
            <AboutCard title={interestTitle} content={interestContent} />
            <AboutCard title={likeTitle} content={likeContent} />
            <AboutCard title={toolTitle} content={toolContent} />
            <AboutCard title={linkTitle} content={linkContent} />
          </AboutWrapper>
        </Wrapper>
      </Fragment>
    )
  }
}
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
const AboutWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
  animation: ${show} 1s ease 1.5s forwards;
  opacity: 0;
  /* display: none; */
`

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
const profileTitle = 'Profile'
const profileContent: Content[] = [
  {
    title: 'HN',
    content: 'hosshii(WistreHosshii)'
  },
  {
    title: '所属',
    content: '東京工業大学理学院一年'
  },
  {
    title: 'サークル',
    content: '東京工業大学デジタル創作同好会traP'
  }
]
const languageTitle = 'Programming...etc'
const languageContent: Content[] = [
  { content: 'html/css/javascript' },
  { content: 'React.js/Vue.js' },
  { content: 'golang,Docker' },
  { content: 'C++' }
]
const langBottom = '下の方はあまり使ったことないです'

const interestTitle = '興味分野'
const interestContent: Content[] = [
  { content: 'web系' },
  { content: 'css animation' },
  { content: '低レイヤ系(OS)' },
  { content: '3D系' }
]

const likeTitle = '好きなもの'
const likeContent: Content[] = [{ content: 'React.js,Vue.js' }, { content: '読書' }, { content: 'moba(ゲーム)' }]
const likeBottom = 'Vは最近（春休みから）見はじめました'

const toolTitle = 'tools'
const toolContent: Content[] = [
  { title: 'エディタ', content: 'VSCode. 時々IntelliJ IDEA' },
  { title: 'OS', content: 'mac OS' }
]

const StyledA = styled.a`
  text-decoration: none;
  :link,
  :visited,
  :active {
    color: ${FontColor.Light};
  }
`
const githubLink = () => {
  return (
    <Fragment>
      <StyledA href={url.github} target="_blank">
        github
        <FontAwesomeIcon
          icon={['fas', 'external-link-alt']}
          style={{ fontSize: 14, marginLeft: '5px', marginBottom: '1px' }}
        />
      </StyledA>
    </Fragment>
  )
}
const twitterLink = () => {
  return (
    <Fragment>
      <StyledA href={url.twitter} target="_blank">
        twitter
        <FontAwesomeIcon
          icon={['fas', 'external-link-alt']}
          style={{ fontSize: 14, marginLeft: '5px', marginBottom: '1px' }}
        />
      </StyledA>
    </Fragment>
  )
}
const linkTitle = 'Links'
const linkContent: Content[] = [{ content: githubLink() }, { content: twitterLink() }]
