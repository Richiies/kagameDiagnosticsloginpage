import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import LogoutButton from '../LogoutButton/LogoutButton'


import "./index.css"


export default function Home(props) {

    const jwtToken = Cookies.get('jwt-token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  } else{
      

    return (
        <div className="Home-container">
          
            
            <h1>Login Successfull</h1>
            <p>Welcome to Kagame Diagnostics </p>
            <LogoutButton />
        </div>
    )
}
}