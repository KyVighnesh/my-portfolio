import React from 'react'
import Styles from '../stylesheets/header.css'
import {useState,useEffect} from 'react'

const Header = () => {

    const[leftData,setLeftData] = useState([])

  useEffect(()=> {

    fetch('/nav.json').then(data=>data.json()).then((res)=> {
      setLeftData(res)
    })
  },[])


  const onHandleClickScroll = (target) => {

    let found = document.getElementById(target.reference)

    if(target.reference === 'Home') {
      var scrollTop = found.offsetTop-'50px';

      window.scrollTo({top:scrollTop,behavior:'smooth'})

    }

    else {
      var scrollTop = found.offsetTop - 200;
      window.scrollTo({top:scrollTop,behavior:'smooth'})

    }

  }

  return (
    <div id='header-container'>

        <nav className='nav-main'>

            <div className='left-nav'>

                {leftData.map((element)=> {
                    return(
                        <div onClick={()=>onHandleClickScroll(element)}>
                          <span>{element.name}</span>
                        </div>
                    )
                })}

            </div>

           
        </nav>

    </div>
  )
}

export default Header