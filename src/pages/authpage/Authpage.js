import React from 'react'
import SignIn from '../../components/auth/signin/SignIn'
import SingUp from '../../components/auth/signup/SignUp'
import './Authpage.scss'

const Authpage = () => {
  return (
    <div className="auth-page">
      <SignIn />
      <SingUp />
    </div>
  )
}

export default Authpage
