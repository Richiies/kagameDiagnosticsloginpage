import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'



const LogoutButton = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt-token')
    history.replace('/login')
  }
  return (
    <button type="button" className="logout-button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)