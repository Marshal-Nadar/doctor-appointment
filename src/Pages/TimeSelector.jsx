import React from 'react';
import { convertTimeFormat } from '../utils/convertTimeFormat';

const TimeSelector = ({ timeslots, onSelectTime }) => {
  // const convertedTime = convertTimeFormat('18:40:00');
  // console.log(convertedTime);
  return (
    <div>
      <label>Select Time Slot:</label>
      <div className='select-date-main'>
        {timeslots.map(slot => (
          // console.log(convertTimeFormat(slot.time_from))
          <button
            className='btn-setect-notactive'
            key={slot.id}
            disabled={slot.booking_status === 1} // Disable booked slots
            onClick={() => onSelectTime(slot)}
          >
            {convertTimeFormat(slot.time_from)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSelector;
