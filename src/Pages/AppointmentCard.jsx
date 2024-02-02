import React from 'react';
import { convertDateFormat } from '../utils/convertDateFormat';
import { convertTimeFormat } from '../utils/convertTimeFormat';

const AppointmentCard = ({ selectedDate, selectedTime, objData ,setModal}) => {
  return (
    <div className='appointment-container'>
      <h2>Selected Appointment</h2>
      <div className='appointment-info'>
        <div className='info-item'>
          <span className='info-label'>Date:</span>
          <span className='info-value'>{convertDateFormat(selectedDate)}</span>
        </div>
        <div className='info-item'>
          <span className='info-label'>Time:</span>
          <span className='info-value'>
            {convertTimeFormat(objData.time_from)} -{' '}
            {convertTimeFormat(objData.time_to)}
          </span>
        </div>
        <div className='info-item'>
          <span className='info-label'>Doctor ID:</span>
          <span className='info-value'>{objData.doctor_id}</span>
        </div>
        {selectedTime && (
          <div>
            <button className='book-now' onClick={()=>{setModal(true)}}>Book Now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
