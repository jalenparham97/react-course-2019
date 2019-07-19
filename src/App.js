import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '../src/App.css'

import Homepage from './pages/homepage/Homepage'
import Shoppage from './pages/shoppage/Shoppage'
import Authpage from './pages/authpage/Authpage'
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shoppage} />
        <Route exact path="/auth" component={Authpage} />
      </Switch>
    </div>
  )
}

export default App
