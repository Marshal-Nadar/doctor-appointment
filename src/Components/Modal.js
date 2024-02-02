import React, { useState } from 'react';
import '../App.css';
const Modal = ({ setModal }) => {
  // const [onClose, setonClose] = useState(false);
  // console.log('closeclose',close)
  return (
    <div className='StyledModal'>
      <div className='Overlay'>
        <p className='modal-content'>Appoinment Booked Successfully</p>
        <button className='close' onClick={()=>{setModal(false)}}>X</button>
      </div>
    </div>
  );
};

export default Modal;
