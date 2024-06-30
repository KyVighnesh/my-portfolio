import React from 'react'
import Styles from '../stylesheets/mobileHeader.css'
import {useState,useEffect} from 'react'


const MobileHeader = () => {

    const[data,setData] = useState([])

    const[show,setShow] = useState(false)

    const[opacity,setOpacity] = useState(0)


    useEffect(()=> {

        fetch('/nav.json').then(data=>data.json()).then((res)=> {
            setData(res)
        })
    },[])

    const onHandleClickScroll = (element,index) => {

        let target = document.getElementById(element.reference)

        let offsetTop = target.offsetTop;

        window.scrollTo({top:offsetTop,behavior:'smooth'})

        setShow(false)
        setOpacity(0)
    }


    const onHandleClickShow = () => {
        
        setShow(!show)

        if(show) {
            setOpacity(0)
        }

        else {

            setTimeout(()=>{
                setOpacity(1)
            },50)
        
        }
    }
  return (
    <nav id='mobile-nav'>

        <nav className='mobile-wrapper'>

            <div className='left-div-mobile'>
            <i class="fas fa-sliders-h" onClick={onHandleClickShow}></i>


            </div>

            {show?<div className='toggle-show' style={{opacity:opacity}}>
                {data.map((ele,index)=> {
                    return(
                        <div className='nav-options' onClick={()=>onHandleClickScroll(ele,index)}>
                            {ele.name}
                        </div>
                    )
                })}
            </div>  :""}

        </nav>

    </nav>
  )
}

export default MobileHeader