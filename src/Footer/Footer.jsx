import React from 'react'
import style from './Footer.module.css';
export default function Footer() {
  return (<>
  <div  className={`all  ${style.mainColor} text-center text-white p-5`}>
    <div className={`container text-center text-white`}>
    <div className="row">
        <div className="col-md-4">
           <h3 >LOCATION</h3>
           <p>2215 John Daniel Drive</p>
           <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4 ">
            <h3 >AROUND THE WEB</h3>
            <div className="contact-icon d-flex list-unstyle  align-items-center justify-content-center gap-2 ">
                   <li className={`${style.icon} d-flex align-items-center justify-content-center rounded-circle  `}><i className="fa-brands fa-facebook "></i></li>
                   <li className={`${style.icon} d-flex align-items-center justify-content-center rounded-circle  `}><i className="fa-brands fa-twitter "></i></li>
                   <li className={`${style.icon} d-flex align-items-center justify-content-center rounded-circle  `}><i className="fa-brands fa-linkedin "></i></li>
                   <li className={`${style.icon} d-flex align-items-center justify-content-center rounded-circle  `}><i className="fa-solid fa-globe "></i></li>

            
            </div>
        </div>
        <div className="col-md-4">
            <h3 >ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route

</p>
        </div>
        
      </div>

   </div>
  
  </div>
   <div className={`copy text-center ${style.copyColor} text-white p-3`}>
   <p>Copyright © Your Website 2021</p>
</div>
</>
  )
}
