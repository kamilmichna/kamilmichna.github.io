import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';


const ProjectComponent = (props) => {
    return(
        <ProjectContainer>{props.children}</ProjectContainer>
    )
}
    


export default ProjectComponent