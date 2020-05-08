import React from "react";
import {ButtonContainer} from './Button.styled';


const Button = (props) => {  
  
   return(
       <ButtonContainer className={props.className}  onClick={props.event}>{props.text}</ButtonContainer>
   )
}

export default Button