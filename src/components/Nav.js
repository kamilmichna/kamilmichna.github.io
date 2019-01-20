import React  from 'react'
import {Link} from "gatsby"
class Nav extends React.Component{
    render(){
        return(
            <nav className="nav">
                <Link to="/">O mnie</Link>
                <Link to="/posts/">Posty</Link>
            </nav>
        ) 
    }
}

export default Nav