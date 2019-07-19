import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/img/crown.svg'
import './Header.scss'

import { auth } from '../../server/utils'

const showCorrectLink = currentUser => {
  return currentUser ? (
    <div className="option" onClick={() => auth.signOut()}>
      SIGN OUT
    </div>
  ) : (
    <Link className="option" to="/auth">
      SIGN IN
    </Link>
  )
}

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {showCorrectLink(currentUser)}
      </div>
    </div>
  )
}

export default Header
