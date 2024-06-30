import React from 'react'
import Styles from '../stylesheets/main.css'
import { useState,useEffect } from 'react'

const Main = () => {

    const[images,setImages] = useState([])


    // useEffect(()=> {
    //     fetch('/main.json').then(data=>data.json()).then((res)=> {
    //         setImages(res)
    //     })
    // },[])

  return (
    <div id="Home">

        <div className='main-wrapper'>

            <div className='info-bar'>
                <div className='left-info'>

                    <div className='image-container'>
                        <img src="/DP-2.jpeg" alt="" />
                    </div>

                    <div className='text-info'>
                    <span>
            <a class="hoverable" rel="contact">Vighneswar Ramakrishnan</a>
              
              <a class="hoverable" rel="contact">| Full Stack Developer</a>
          </span>


         <span className='descr'>
         Mern Stack Developer with over 6
Months of experience & 10 Months
Training Experience. Worked as Mern
Stack Developer & Placement Manager
proficient in modern web languages
focused on project structures & coding
style.
         </span>
                    </div>

                </div>

                <div className='right-info'>

                <button class="button">HTML</button>
                <button class="button">CSS</button>
                <button class="button">Javascript</button>
                <button class="button">React</button>
                <button class="button">Redux</button>
                <button class="button">Node</button>
                <button class="button">Express</button>
                <button class="button">Mongo DB</button>
                <button class="button">Rest API</button>
                <button class="button">AWS-SDK</button>


                </div>
            </div>

            
        {/* <div className='top-content'>

<img src="https://cdn.dribbble.com/userupload/3237988/file/original-9beac786efbf93c18b74da6def2f87fe.png?resize=752x" alt="" />

</div> */}
{/* 
<div className='top-header'>

<h3>
Have a project idea? We are available for new projects!
</h3>

<h3>
<a>hello@ronasit.com | Telegram | WhatsApp | Website</a>

</h3>

</div> */}

{/* <div className='top-para'>
    <p>
    Having a well-designed website with useful information gives off the impression that you are running a reliable and credible business. Meet our new concept of a design studio’s corporate website!
    </p>

    <p>
    The first screen displays the company’s motto. The next two screens display the company description and a list of its services. Another screen displays the list of the team members and their responsibilities. The last screen displays the contact information.
    </p>

    <p>
    Our designers used neutral grey shades for the background and added blurry gradients as the main colorful accent. This simple color scheme doesn’t distract users from observing the company’s portfolio.
    </p>

    <p>
    The minimal design, large print, and colorful accents convey the company’s mission and emphasize its creativity. The simple navigation and clear information layout make the website pleasant to use.
    </p>

</div> */}

{/* {images.map((image)=> {
    return(
        <img src={image} className='bulk-images'/>
    )
})} */}

        </div>

        <div className='banner-section'>

            <div className='top-section'>


            <div className='top-left'>

            </div>

            <div className='top-center'>
                <img src="https://cdn.dribbble.com/users/4949363/avatars/small/606bb85ee728fd3d78bbddf7e70b3901.jpg?1676454777" alt="" />
            </div>

            <div className='top-right'>

            </div>

            </div>

            <div className='botton-section'>
                <div className='bottom-center'>
                    <h3>
                        <a href="">Work Samples | Projects</a>
                    </h3>

                    <p>
                    Userfriendly and Pixel Perfect Web Applications🖤
                    </p>
                </div>
            </div>


        </div>
        
    </div>
  )
}

export default Main