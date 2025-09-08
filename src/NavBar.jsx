import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className="navsection">
        <ul>
            <Link to="/fp"><li>Firstpage</li></Link>
            <Link to="/sp"> <li>Secondpage</li> </Link>
            <Link to="/tp"><li>Thirdpage</li></Link>
            <Link to="/fr"><li>Fourthpage</li></Link>
        </ul> 
    </div>
  )
}

export default NavBar