import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'



class LoginForm extends Component {
  state = {
    Email: '',
    password: '',
    showSubmitError: false,
    errorMessage: '',
    
  }

  onChangeUsername = event => {
    this.setState({Email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    Cookies.set("jwt-token", "allwaysbecarefull", {expires:30})

    history.replace('/home')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showSubmitError: true, errorMessage})
  }

  submitForm = async event => {
    event.preventDefault()
    const {Email, password} = this.state
    // console.log((Email.lastIndexOf('@gmail.com') === Email.length - '@gmail.com'.length))
    if ((Email.lastIndexOf('@gmail.com') === Email.length - '@gmail.com'.length) && password.length >=6){
        console.log(password)
        this.onSubmitSuccess()

    }
     else {
      this.onSubmitFailure("Login Failed")
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD <span className = "star">*</span>
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Enter Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {Email} = this.state

    return (
      <>
        <label className="input-label" htmlFor="Email">
          Email <span className ="star">*</span>
        </label>
        <input
          type="text"
          id="Email"
          className="Email-input-field"
          value={Email}
          onChange={this.onChangeUsername}
          placeholder="Email"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMessage} = this.state
    return (
      <div className="login-form-container">
        
        <div className="login-image" >
            <div className = "inner-container">
            <img className = "brand-sizing"  src = "/images/logo.png" alt = "Kagame Dignostics"/>
                <img className = "upperquote" src="/images/quote.png"  alt = "quotes"/>
                <h1 className="headingtext">Boosting performance for sales professionals at every step of their sales journey</h1>
                <img className = "bottomquote" src = "/images/quote.png" alt = "quote" />
                <img src ="/images/Dots.png" alt = "dot" />
            </div>
        </div>
          
        
        <form className="form-container" onSubmit={this.submitForm}>
          <h1 className="login-website-logo-desktop">Kagame Diagnostics</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container"><p>Forgot Password? <span className="star">Click here</span></p></div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMessage}</p>}
          <div>
          <p>Do you have an Account? <span className = "star">Register here</span></p>
      </div>
        </form>
      
      
      </div>
    )
  }
}

export default LoginForm
