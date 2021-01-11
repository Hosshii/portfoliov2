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
          <Title title="About" />
          <AboutWrapper>
            <AboutCard title={profileTitle} content={profileContent} />
            <AboutCard title={languageTitle} content={languageContent} />
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
    content: 'hosshii'
  },
  {
    title: '所属',
    content: '東京工業大学工学院情報通信系2年'
  },
  {
    title: 'サークル',
    content: '東京工業大学デジタル創作同好会traP'
  }
]
const languageTitle = 'skills'
const languageContent: Content[] = [
  { content: 'Rust' },
  { content: 'golang' },
  { content: 'MySQL,docker' },
  { content: 'HTML/CSS/JavaScript' },
  { content: 'React.js/Vue.js' }
]

const interestTitle = '興味分野'
const interestContent: Content[] = [
  { content: '関数型言語、型システム' },
  { content: '低レイヤ系(OS,コンパイラ)' },
  { content: 'web系' }
]

const likeTitle = '好きなもの'
const likeContent: Content[] = [
  { content: 'Rust,Haskell,golang' },
  { content: 'React.js,Vue.js' },
  { content: '読書' },
  { content: 'moba(ゲーム)' }
]

const toolTitle = 'Tools'
const toolContent: Content[] = [
  { title: 'エディタ', content: 'VSCode. 時々IntelliJ IDEA' },
  { title: 'OS', content: 'macOS' }
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
        GitHub
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
        Twitter
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
