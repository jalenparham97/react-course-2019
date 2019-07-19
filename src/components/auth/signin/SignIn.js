import React, { Component } from 'react'
import FormInput from '../../UI/form-input/FormInput'
import Button from '../../UI/button/Button'
import './SignIn.scss'

import { signInWithGoogle } from '../../../server/utils'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ email: '', password: '' })
  }

  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            label="email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="password"
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <Button type="submit">Sign In </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
