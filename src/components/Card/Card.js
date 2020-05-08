import React from "react";
import {CardContainer, Content,Title, StartDate,EndDate} from './Card.styled';

const Card = (props) => {  
   return(
       <CardContainer>
           <Title>{props.title}</Title>
           <Content>{props.content}</Content>
           <StartDate>{props.startTime}</StartDate>
           <EndDate>{props.endTime}</EndDate>
       </CardContainer>
   )
}

export default Card;