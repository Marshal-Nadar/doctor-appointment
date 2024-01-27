import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { convertTimeFormat } from '../utils/convertTimeFormat';
import { convertDateFormat } from '../utils/convertDateFormat';
import Accordion from '../Components/Accordion';

const TimeSlots = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [objData, setObjData] = useState(null);
  let todayy = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

  const [today, setToday] = useState(todayy);
  // const [doctorData, setDoctorData] = useState(null);
  const [slotData, setSlotData] = useState(null);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.post(
          'https://aartas-qaapp-as.azurewebsites.net/aartas_uat/public/api/doctor',
          { doctor_id: 2 }
        );
        console.log('doctor data:', response.data.data[0].timeslots);
        setSlotData(response.data.data[0].timeslots);
        // setDoctorData(response.data.data[0]);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctorData();
  }, []);

  const uniqueDates = Array.from(new Set(slotData?.map(slot => slot.date)));

  const filteredSlots = slotData?.filter(slot => slot.date === selectedDate);
  // console.log('filteredSlots', filteredSlots);

  const handleDate = date => {
    setSelectedDate(date);
    setSelectedTime(null);
    setObjData(null);
  };
  const handleTime = time => {
    console.log('timetime', time);
    setObjData(time);
    setSelectedTime(time.time_from);
  };

  console.log('todaytodaytoday', selectedTime);

  return (
    <div className='slot-container'>
      <div className='select-header'>Select Date For Appointment</div>
      <Accordion
        buttonsToShow={uniqueDates.slice(0, 8).map((date, index) => (
          <button
            key={index}
            className={`date-button ${today === date ? 'today' : ''} ${
              selectedDate === date
                ? 'btn-setect-active'
                : 'btn-setect-notactive'
            }`}
            onClick={() => handleDate(date)}
          >
            {todayy === date ? 'Today' : convertDateFormat(date)}
          </button>
        ))}
        allButtons={uniqueDates.map((date, index) => (
          <button
            key={date + index}
            className={`date-button ${today === date ? 'today' : ''} ${
              selectedDate === date
                ? 'btn-setect-active'
                : 'btn-setect-notactive'
            }`}
            onClick={() => handleDate(date)}
          >
            {todayy === date ? 'Today' : convertDateFormat(date)}
          </button>
        ))}
      />
      <div className='time-slot-header'>
        <div className='select-header'>Select Time Slot</div>
        <div className='slots-available '>
          {filteredSlots?.length === 0 ? (
            <span>Select Date to check availability</span>
          ) : (
            <>
              {/* <span>{filteredSlots?.length} </span> */}
              <span className={`${selectedTime ? '' : 'blink_mew'}`}>
                {`${
                  selectedTime
                    ? `Book Now`
                    : `${filteredSlots?.length} Slots available`
                } `}
              </span>
            </>
          )}
        </div>
      </div>

      {selectedDate && (
        <div>
          {/* <p>{`Obj count for ${selectedDate}: ${filteredSlots.length}`}</p> */}

          <div className='select-date-main'>
            {filteredSlots.map(slot => (
              <button
                key={slot.id}
                // className='btn-setect-notactive'
                className={
                  selectedTime === slot.time_from
                    ? 'btn-setect-active'
                    : 'btn-setect-notactive'
                }
                disabled={slot.booking_status === 1}
                onClick={() => handleTime(slot)}
              >
                {convertTimeFormat(slot.time_from)}
              </button>
              // <h1>{convertTimeFormat(slot.time_from)}</h1>
            ))}
          </div>

          {/* <ul>
            {filteredSlots.map(slot => (
              <li key={slot.id}>
                <h1>{convertTimeFormat(slot.time_from)}</h1>
              </li>
            ))}
          </ul> */}
        </div>
      )}

      {selectedDate && objData ? (
        <div className='appointment-container'>
          <h2>Selected Appointment</h2>
          <div className='appointment-info'>
            <div className='info-item'>
              <span className='info-label'>Date:</span>
              <span className='info-value'>
                {convertDateFormat(selectedDate)}
              </span>
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
                <button className='book-now'>Book Now</button>
              </div>
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default TimeSlots;
