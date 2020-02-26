import React from 'react'
import styled, { keyframes } from 'styled-components'
import Title from '../components/title'
import { device } from '../utils/const'
import WorkCard, { Content } from '../components/aboutcard'

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

const toolTitle = 'このサイト'
const toolContent: Content[] = [
  { title: '使用技術', content: 'React, typescript' },
  { title: '作成時期', content: 'この春休み' }
]
const toolBottom = '自分一人でちゃんと作ったサイトはこれが初めてです'
