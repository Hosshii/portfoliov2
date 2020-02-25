import React, { Fragment, PureComponent } from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import { FrameColor, FontSize } from '../utils/const'
import CustomFont from '../common/customfont'
import MyCard from '../common/myCard'
import { Reveal } from 'react-genie'

interface Props {
  title: string
  content: Content[]
  bottom?: string
}
export interface Content {
  title?: string
  content: string | JSX.Element
}

const AboutContent = (props: Content) => {
  return props.title ? (
    <Fragment key={props.title}>
      <CustomGrid item xs={2}>
        <CustomFont textAlign="left" size={FontSize.subsubtitle}>
          {props.title}
        </CustomFont>
      </CustomGrid>
      <CustomGrid item xs={10}>
        <CustomFont textAlign="left" size={FontSize.subsubtitle}>
          {props.content}
        </CustomFont>
      </CustomGrid>
    </Fragment>
  ) : (
    <Fragment>
      <CustomGrid item xs={12}>
        <CustomFont textAlign="left" size={FontSize.subsubtitle}>
          {props.content}
        </CustomFont>
      </CustomGrid>
    </Fragment>
  )
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
                  {props.content.map((v, i) => (
                    <AboutContent key={i} title={v.title} content={v.content} />
                  ))}
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
  padding: 10px 0 0 5px;
  border-top: solid 3px ${FrameColor.Light};
`
const CustomGrid = styled(Grid)`
  /* border: solid 1px white; */
`

export default About
