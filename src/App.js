import React from 'react'
import Home from './components/home'
import {HashRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function App() {
  return (
    <HashRouter>
       <Navbar/>
      <Switch>
      <Route to='/' component={Home}/>
      </Switch>
      <Footer/>
    </HashRouter>
  )
}
