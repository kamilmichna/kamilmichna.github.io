import React, { useEffect,useRef } from "react";
import gsap from 'gsap';
import {CursorContainer} from './Cursor.styled';
const Cursor = (props) => {
    const cursor = useRef(null);
    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
            if (e.clientY > 40  && e.clientX > 40){
                gsap.to(cursor.current,0.2,{
                    x: e.pageX-30,
                    y: e.pageY-30,
                    ease: "expo.out"
                })
            }
        });
        window.addEventListener('mousedown',(e)=>{
            gsap.to(cursor.current,0.2,{
                scale: 1.5,
            })
        });
        window.addEventListener('mouseup',(e)=>{
            gsap.to(cursor.current,0.2,{
                scale: 1,
            })
        })
    },[])
   return(
       <CursorContainer ref={cursor}></CursorContainer>
   )
}

export default Cursor