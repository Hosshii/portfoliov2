import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { StylesProvider } from '@material-ui/styles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { RevealGlobalStyles } from 'react-genie'
import { MyGlobalstyle } from './utils/style'

library.add(faGithub, faTwitter, faBars, faExternalLinkAlt)

ReactDOM.render(
  <StylesProvider injectFirst>
    <RevealGlobalStyles />
    <MyGlobalstyle />
    <App />
  </StylesProvider>,
  document.getElementById('root')
)
