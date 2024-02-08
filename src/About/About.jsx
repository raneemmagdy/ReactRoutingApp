import React from 'react'
import style from './About.module.css';
export default function About() {
  return (
   <>
   <div className={`all ${style.mainColor}  text-white p-5`}>
    <div className="container">
      <h1 className='text-center'>ABOUT COMPONENT</h1>
      <div className="bag d-flex align-items-cencer justify-content-center p-3 gap-2">
     <div className={`${style.line}`}></div>
      <i class="fa-solid fa-star text-white"></i>
     <div className={`${style.line}`}></div>
   
    </div>
    <div className="row p-5">
      <div className="col-md-6">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div className="col-md-6">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
    </div>
   </div>
   </>
   
   
   
  )
}
