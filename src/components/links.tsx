import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { FontColor } from '../utils/color'
// import { fab } from '@fortawesome/free-brands-svg-icons'

const Icons = () => {
  return (
    <Wrapper>
      {/* <FontAwesomeIcon icon={faCoffee} color="red"></FontAwesomeIcon> */}
      <FontAwesomeIcon icon={['fab', 'github']} color="red" />
      <FontAwesomeIcon icon={['fab', 'twitter']} color={FontColor.Light} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export default Icons
