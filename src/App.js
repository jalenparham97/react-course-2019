import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import '../src/App.css'

import Homepage from './pages/homepage/Homepage'
import Shoppage from './pages/shoppage/Shoppage'
import Authpage from './pages/authpage/Authpage'
import Header from './components/header/Header'

import { auth } from './server/utils'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(currentUser =>
      this.setState({ currentUser })
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.state

    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shoppage} />
          <Route exact path="/auth" component={Authpage} />
        </Switch>
      </div>
    )
  }
}

export default App
