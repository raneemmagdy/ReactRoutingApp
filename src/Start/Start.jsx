import React from 'react'
import img from '../images/avataaars.svg'
import style from './Start.module.css';
export default function Start() {
  return (
   <div className={`all ${style.mainColor}`}>
    <div className="container d-flex flex-column align-items-center">
       <img src={img} className='w-25' />
       <h2 className="fw-bolder text-white fs-3x text-center">START FRAMEWORK</h2>
       <div className="bag d-flex align-items-cencer justify-content-center p-3 gap-2">
        <div className={`${style.line}`}></div>
        <i class="fa-solid fa-star text-white"></i>
         <div className={`${style.line}`}></div>
   
         </div>
       <div className="content text-center text-white pb-3">Graphic Artist - Web Designer - Illustrator</div>
    </div>
   </div>
  )
}
