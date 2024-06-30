import React from 'react'
import Styles from '../stylesheets/education.css'
import { useEffect,useState } from 'react'
const Education = () => {

    const[top,setTop] = useState(0)

    const[size,setSize] = useState({height:window.innerHeight,width:window.innerWidth})

    useEffect(()=> {

        let parent = document.getElementById('Education')

        setTop(parent.offsetTop + 100)

    },[size])

    const handleResize = () => {

     
        let duplicate = {...size}

        duplicate.height = window.innerHeight

        duplicate.width = window.innerWidth

        setSize(duplicate)

    }

    useEffect(()=> {

      window.addEventListener('resize',handleResize)



      return ()=>window.removeEventListener('resize',()=>{
  
      })


    },[])
  return (


    <div id='Education'>

        <h2>Education</h2>

<div id="timeline-divider" style={{top:top}}>
              <div className="timeline-traveller">
                <div>
                <i className="fas fa-plane"></i>
                </div>
              </div>
            </div>

<div className="timeline-box left">
            <div className="timeline-container">
                <h3 className="experience-designation">Bachelor of Commerce</h3>
                <h4 className="experience-company-name">Sri Satya Sai University</h4>
                <h5 className="experience-duration">Completed in 2021</h5>

              </div>


            </div>


            <div className="timeline-box left">
              <div className="timeline-container">
                  <h3 className="experience-designation">12TH || Higher Secondary</h3>
                  <h4 className="experience-company-name">Chinmaya Vidyalaya</h4>
                  <h5 className="experience-duration">Completed in 2016</h5>
  
                </div>
  
  
              </div>
    </div>
  )
}

export default Education