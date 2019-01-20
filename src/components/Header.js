import React  from 'react'
import Nav from '../components/Nav'

class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <p className="logotype">{this.props.logo}</p>
                <Nav/>
                {this.props.children}
            </header>
        ) 
    }
}

export default Header