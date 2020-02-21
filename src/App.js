import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme";
import Home from './Epics/Pages/home'
import Table from './Epics/Pages/Components/Tables/table'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
function App () {
  return (
    <>
     <ThemeProvider theme={theme}>
      {/* <div className='App'> */}
<Router>
  <Route exact path="/" component={Home}/>
  <Route exact path="/table" component={Table}/>
  </Router>
      
          {/* <Home /> */}
   
      {/* </div> */}
     </ThemeProvider>
    </>
  )
}

export default App
