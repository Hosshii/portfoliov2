import React from 'react'
import styled from 'styled-components'
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
          <WorkCard title={toolTitle} content={toolContent} bottom={toolBottom}></WorkCard>
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
    left: 0;
    width: 100%;
  }
  @media ${device.laptop} {
    left: 130px;
    width: calc(100% - 260px);
  }
`

const WorkWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
`
const toolTitle = 'このサイト'
const toolContent: Content[] = [
  { title: '使用技術', content: 'React, typescript' },
  { title: '作成時期', content: 'この春休み' }
]
const toolBottom = '自分一人でちゃんと作ったサイトはこれが初めてです'
