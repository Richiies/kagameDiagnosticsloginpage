import Cookies from 'js-cookie'
import { BsFillHouseDoorFill } from "react-icons/bs";
import { Redirect } from 'react-router-dom'
import Header from '../Header'




export default function Home(props) {

    const jwtToken = Cookies.get('jwt-token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  } else{
      

    return (
        <div className="Home-container">
            <Header  />
            <h1>Login Successfull</h1>
        </div>
    )
}
}