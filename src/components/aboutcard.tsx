import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { FrameColor, FontSize } from '../utils/const'
import CustomFont from '../common/customfont'
import MyCard from '../common/myCard'

interface Props {
  title: string
  content: Content[]
}
const About = (props: Props) => {
  return (
    <GridWrapper>
      <Grid container>
        <CustomGrid item xs={1}>
          {/* <Test>2</Test> */}
        </CustomGrid>
        <CustomGrid item xs={11}>
          <MyCard>
            <CardTitle>
              <CustomFont textAlign="left" size={FontSize.title} padding="0 0 5px 5px">
                {props.title}
              </CustomFont>
            </CardTitle>
            <CardContent>
              <Grid container spacing={1}>
                {props.content.map(v => (
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
                ))}
              </Grid>
            </CardContent>
          </MyCard>
        </CustomGrid>
      </Grid>
    </GridWrapper>
  )
}

const AboutCard = () => {
  return (
    <Fragment>
      <About title={title1} content={content1} />
      <About title={title1} content={content1} />
    </Fragment>
  )
}

interface Content {
  title: string
  content: string
}
const title1 = 'profile'
const content1: Content[] = [
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
const Test = styled.div`
  color: red;
  border: solid 1px red;
`
const CardTitle = styled.div`
  margin: 0 0 10px 0;
  border-bottom: solid 3px ${FrameColor.Light};
  /* margin-bottom: 10px; */
`

const GridWrapper = styled.div`
  margin: 0 0 20px 0;
`
const CardContent = styled.div`
  width: calc(100% - 10px);
  height: 100%;
  margin-left: 10px;
  box-sizing: border-box;
`

const CustomGrid = styled(Grid)`
  /* border: solid 1px white; */
`
export default AboutCard
