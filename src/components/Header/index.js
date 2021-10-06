import { BsFillHouseDoorFill } from "react-icons/bs"
import {Link} from "react-router-dom"
import "./index.css"

 function Header(props) {
     

    return (
        <div>
            <nav className = "nav-item">
                <div >
                    <Link to = "/home"><BsFillHouseDoorFill /> </Link>
                <Link to = "/"><h1 className ="logo">Kagame Diagnostics</h1></Link>
                </div>
                
                    
                <div className="max-navitems">
                    
                    
                    <ul >
                        <li><Link to ="/login">Logout</Link></li>
                        <li><Link to ="/about">About App</Link></li>
                        <li><a href="#/">Contact Us</a></li>
                    </ul>
                    

                </div>
                
            </nav>
        </div>
    )
}

export default Header