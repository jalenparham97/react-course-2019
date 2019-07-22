import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../src/App.css'

import Homepage from './pages/homepage/Homepage'
import Shoppage from './pages/shoppage/Shoppage'
import Authpage from './pages/authpage/Authpage'
import Header from './components/header/Header'

import { auth, createUserProfileDoc } from './server/utils'
import { setCurrentUser } from './store/user/user.actions'

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDoc(user)
        userRef.onSnapshot(snapShot => {
          const currentUser = {
            id: snapShot.id,
            ...snapShot.data()
          }
          setCurrentUser(currentUser)
        })
      }
      setCurrentUser(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  null,
  mapDispatchToProps
)(App)
