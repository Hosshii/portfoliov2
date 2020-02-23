import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { FontColor } from '../utils/color'
// import { fab } from '@fortawesome/free-brands-svg-icons'

export interface MyIconProps {
  size: FontAwesomeIconProps['size'] | undefined
  color: FontAwesomeIconProps['color'] | undefined
  icon: FontAwesomeIconProps['icon']
  url: string
}

interface MyIconsProps {
  icons: MyIconProps[]
}

const MyIcons = (props: MyIconsProps) => {
  var icons = []
  for (let prop of props.icons) {
    icons.push(
      <CustomLink>
        <FontAwesomeIcon
          key={icons.length}
          icon={prop.icon}
          color={prop.color}
          size={prop.size}
          onClick={() => window.open(prop.url, '_blank')}
        />
      </CustomLink>
    )
  }
  return <Wrapper>{icons}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
const CustomLink = styled.div`
  transition: transform 0.3s;
  :hover {
    transform: scale(1.2);
  }
`

export default MyIcons
