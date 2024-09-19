
import React, { useState } from 'react';
import style from './Portfolio.module.css';
import img1 from '../images/poert1.png';
import img2 from '../images/port2.png';
import img3 from '../images/port3.png';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="all">
      <div className="container p-5">
        <h1 className={`text-center ${style.mainColor}`}>PORTFOLIO COMPONENT</h1>
        <div className="bag d-flex align-items-cencer justify-content-center p-3 gap-2">
          <div className={`${style.line}`}></div>
          <i className={`fa-solid fa-star ${style.mainColor} `}></i>
          <div className={`${style.line}`}></div>
        </div>
        <div className="row p-3">
          {[img1, img2, img3].map((img, index) => (
            <div className="col-md-4" key={index}>
              <div
                className={`${style.imageContainer} ${style.hoverEffect}`}
                onClick={() => openModal(img)}
              >
                <img src={img} className='w-100 rounded-4' alt={`Image ${index + 1}`} />
                <div className={`${style.overlayBackground} rounded-4`}></div>
                <i className={`fa-solid fa-plus ${style.overlayIcon} fa-3x`}></i>
              </div>
            </div>
          ))}
        </div>
        <div className="row p-3">
          {[img1, img2, img3].map((img, index) => (
            <div className="col-md-4" key={index + 3}>
              <div
                className={`${style.imageContainer} ${style.hoverEffect}`}
                onClick={() => openModal(img)}
              >
                <img src={img} className='w-100  rounded-4 ' alt={`Image ${index + 4}`} />
                <div className={`${style.overlayBackground} rounded-4`}></div>
                <i className={`fa-solid fa-plus ${style.overlayIcon} fa-3x`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className={`${style.modal}`} onClick={closeModal}>
          <img src={selectedImage} className={`${style.modalImage}`} alt="Enlarged" />
        </div>
      )}
    </div>
  );
}
