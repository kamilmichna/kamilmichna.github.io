import React from 'react'
import './LayoutStyle.css'
import Header from './Header'
import { StaticQuery } from 'gatsby'

class Layout extends React.Component{
    render(){
        return(
            <div className="layout__container">
                <StaticQuery query={graphql`
                query {
                    site {
                        siteMetadata {
                            title
                        }
                    }
              }`
            } render={data=>(
                    <Header logo={data.site.siteMetadata.title}/>
                   
                )}/>
            {this.props.children}    
            </div>
        
        )
    }
} 

export default Layout
