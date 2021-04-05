import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'


import Home from './components/home/Home'
import GlobalStyles from './styles/GlobalStyles'
import theme from './theme/Theme'

function App(){
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>

  )
}

export default App