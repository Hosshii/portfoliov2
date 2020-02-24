import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { StylesProvider } from '@material-ui/styles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faTwitter)

ReactDOM.render(
  <StylesProvider injectFirst>
    <App />
  </StylesProvider>,
  document.getElementById('root')
)
