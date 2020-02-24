import React, { Fragment, PureComponent } from 'react'
import { Grid } from '@material-ui/core'
import styled, { keyframes, createGlobalStyle } from 'styled-components'
import { FrameColor, FontSize } from '../utils/const'
import CustomFont from '../common/customfont'
import MyCard from '../common/myCard'
import { Reveal } from 'react-genie'

interface Props {
  title: string
  content: Content[]
  bottom?: string
}
const About = (props: Props) => {
  return (
    // <Reveal animation="genie-animation">
    <Reveal>
      <GridWrapper>
        <Grid container>
          {/* <CustomGrid item xs={0}>
          </CustomGrid> */}
          <CustomGrid item xs={12}>
            <MyCard>
              <CardTitle>
                <CustomFont textAlign="left" size={FontSize.title}>
                  {props.title}
                </CustomFont>
              </CardTitle>
              <CardContent>
                <Grid container spacing={1}>
                  {props.content.map(v =>
                    v.title ? (
                      <Fragment>
                        <CustomGrid item xs={2}>
                          <CustomFont textAlign="left" size={FontSize.subsubtitle}>
                            {v.title}
                          </CustomFont>
                        </CustomGrid>
                        <CustomGrid item xs={10}>
                          <CustomFont textAlign="left" size={FontSize.subsubtitle}>
                            {v.content}
                          </CustomFont>
                        </CustomGrid>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <CustomGrid item xs={12}>
                          <CustomFont textAlign="left" size={FontSize.subsubtitle}>
                            {v.content}
                          </CustomFont>
                        </CustomGrid>
                      </Fragment>
                    )
                  )}
                </Grid>
              </CardContent>
              {!!props.bottom && (
                <CardBottom>
                  <CustomFont textAlign="left" size={FontSize.subsubtitle}>
                    {props.bottom}
                  </CustomFont>
                </CardBottom>
              )}
            </MyCard>
          </CustomGrid>
        </Grid>
      </GridWrapper>
    </Reveal>
  )
}

const AboutCard = () => {
  return (
    <Fragment>
      <About title={profileTitle} content={profileContent} />
      <About title={languageTitle} content={languageContent} bottom={langBottom} />
      <About title={interestTitle} content={interestContent} />
      <About title={likeTitle} content={likeContent} bottom={likeBottom} />
      <About title={toolTitle} content={toolContent} />
    </Fragment>
  )
}

interface Content {
  title?: string
  content: string
}

const CardTitle = styled.div`
  margin: 0 0 20px 0;
  padding: 0 0 5px 5px;
  border-bottom: solid 3px ${FrameColor.Light};
`

const GridWrapper = styled.div`
  margin: 0 0 30px 0;
`
const CardContent = styled.div`
  width: calc(100% - 10px);
  height: 100%;
  margin-left: 10px;
  box-sizing: border-box;
`

const CardBottom = styled.div`
  margin: 20px 0 0 0;
  padding: 5px 0 0 5px;
  border-top: solid 3px ${FrameColor.Light};
`
const CustomGrid = styled(Grid)`
  /* border: solid 1px white; */
`

const profileTitle = 'profile'
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
const languageTitle = 'programming..etc'
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
const likeContent: Content[] = [
  { content: 'React.js,Vue.js' },
  { content: '読書' },
  { content: 'ホロライブ 、にじさんじ' }
]
const likeBottom = 'Vは最近（春休みから）見はじめました'

const toolTitle = 'tools'
const toolContent: Content[] = [
  { title: 'エディタ', content: 'VSCode.時々IntelliJ IDEA' },
  { title: 'OS', content: 'mac OS' }
]
// const interestBottom = '下の方はあまり使ったことないです'
export default AboutCard
