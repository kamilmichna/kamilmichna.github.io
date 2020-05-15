import React, {useRef,useState ,useEffect} from "react";
import {TimeLineSection,Time,CardsContainer,Counter,CardContainer} from './TimeLine.styled';
import gsap  from "gsap"; 
import Cards from '../../configs/timelineComponents';
import Button from '../../components/Button/Button';
import ScrollMagic from 'scrollmagic';
import Card from '../../components/Card/Card';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
const TimeLine = (props) => {
    const [actualCard, setActualCard] = useState(1);
    const tl = gsap.timeline();
    const cardsContainer = useRef(null);
    const timelineHeader = useRef(null);
    const nextCard = ()=>{
        if (actualCard<cards.length){   
            setActualCard(actualCard+1);
            console.log(actualCard)
            gsap.to(cardsContainer.current,{
                x: `-${60*actualCard}vw`,
                duration: 2,
                ease: "expo.out"
            });

        }
    }
    const prevCard = ()=>{
        if (actualCard>0){
            setActualCard(1);
            gsap.to(cardsContainer.current,{
                x: `0vw`,
                duration: 2,
                ease: "expo.out"
            });
        }
    }

    let cards = Cards.map((el)=>{
        return(
            <Card title={el.title} content={el.content} startTime={el.startTime} endTime={el.endTime}/>
        )
    })
    useEffect(() => {
        if (typeof window !== 'undefined'){
            const controller = new ScrollMagic.Controller();
            ScrollMagicPluginGsap(ScrollMagic, gsap);
            new ScrollMagic.Scene({
                triggerElement: timelineHeader.current,
                reverse: false
            }).setTween(tl.from(timelineHeader.current,1,{
                x: '100vw',
                ease: "expo.out"
            })).setTween(tl.from(cardsContainer.current,1,{
                x: '100vw',
                ease: "expo.out"
            })).setTween(tl.from(timelineHeader.current,1,{
                textShadow: '5px 100px 	rgba(21, 168, 115,0)',
                ease: "expo.out"
            })).addTo(controller);
        }
    }, [])
    return(
        <TimeLineSection>
            <Time ref={timelineHeader} >MY JOURNEY</Time>
            <CardsContainer ref={cardsContainer}>{cards}</CardsContainer>
            <Button  className='button--prev' event={prevCard} text="Back to ther roots"/>
            <Button  className='button--next' event={nextCard} text="Next card"/>
            <Counter>{actualCard} out of {Cards.length}</Counter>
        </TimeLineSection>
    )
}

export default TimeLine
