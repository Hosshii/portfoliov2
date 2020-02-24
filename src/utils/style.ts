import { createGlobalStyle, keyframes } from 'styled-components'

const genieAnimation = keyframes`
  0%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const MyGlobalstyle = createGlobalStyle`
  .genie-animation {
    animation: ${genieAnimation} 1s ease 0s forwards;
  }
`
