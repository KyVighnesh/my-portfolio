import React from 'react'
import { useState } from 'react'
import Styles from '../stylesheets/footerImages.css'
import { useEffect } from 'react'
import { data } from './staticData'
import { useRef } from 'react'

const FooterImages = () => {

    const[images,setImages] = useState(data)



    

  return (
    <div id='My-Work'>

        <div className='footer-wrapper'>
            <div className='top-footer'>
                <h4>
                Live Demo Available | Click to View 
                </h4>

                <span>
                    <a href="">View profile</a>
                </span>
            </div>

            <div className='bottom-footer'>

                {images.map((image,index)=> {
                    return(
                        <div className='project-div'>
        

                        <a href={image.link}target='blank'>
                        <img src={image.path} alt="" />
                        </a>
                        
                        <span>
                        <h4>{image.heading}</h4>
                        <p> {image.description}</p>
                        <br />
                        <br />
                    <button class="button-2">

                    <a href={image.link} className='link-tag' target='blank'>

  Navigate
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
  </svg>
  </a>
</button>
</span>
                        </div>
                    )
                })}

            </div>
        </div>

    </div>
  )
}

export default FooterImages