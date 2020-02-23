import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { FontColor } from '../utils/color'
// import { fab } from '@fortawesome/free-brands-svg-icons'

interface MyIconProps {
  size: FontAwesomeIconProps['size'] | undefined
  color: FontAwesomeIconProps['color'] | undefined
  icon: FontAwesomeIconProps['icon']
}
export interface MyIconsProps {
  icons: MyIconProps[]
}

const MyIcons = (props: MyIconsProps) => {
  var icons = []
  for (let prop of props.icons) {
    icons.push(<FontAwesomeIcon icon={prop.icon} color={prop.color} size={prop.size} />)
  }
  return (
    <Wrapper>
      {/* <FontAwesomeIcon icon={faCoffee} color="red"></FontAwesomeIcon> */}
      {/* <FontAwesomeIcon icon={['fab', 'github']} color="red" size={props.size} />
      <FontAwesomeIcon icon={['fab', 'twitter']} color={FontColor.Light} size={props.size} /> */}
      {icons}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export default MyIcons
