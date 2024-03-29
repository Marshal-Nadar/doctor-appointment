import React, { useEffect, useState } from 'react';
// import axios from 'axios';

import { convertTimeFormat } from '../utils/convertTimeFormat';
import { convertDateFormat } from '../utils/convertDateFormat';
import Accordion from '../Components/Accordion';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctorDetails } from '../Redux/Features/doctorSlice';
import AppointmentCard from './AppointmentCard';
import Modal from '../Components/Modal';
import Spinner from '../Components/Spinner';

const TimeSlots = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.doctors.doctors);

  const { doctors } = useSelector(state => state.doctors.doctors);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [objData, setObjData] = useState(null);
  const [modal, setModal] = useState(false);
  // const [onClose, setonClose] = useState(false);

  let todayy = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
  const [today, setToday] = useState(todayy);
  // const [doctorData, setDoctorData] = useState(null);
  // const [slotData, setSlotData] = useState(null);

  useEffect(() => {
    dispatch(fetchDoctorDetails(2));
    handleDate(todayy);
  }, [dispatch, todayy]);

  const uniqueDates = [...new Set(doctors.timeslots?.map(slot => slot.date))];
  const filteredSlots = doctors.timeslots?.filter(
    slot => slot.date === selectedDate
  );

  // console.log('uniqueDates', uniqueDates);
  // console.log('filteredSlots', filteredSlots);

  const handleDate = date => {
    // console.log('setSelectedDate', date);
    setSelectedDate(date);
    setSelectedTime(null);
    setObjData(null);
    setToday(null);
  };
  const handleTime = time => {
    // console.log('timetime', time);
    setObjData(time);
    setSelectedTime(time.time_from);
  };

  console.log('modalmodal', modal);
  console.log('todaytodaytoday', loading);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='slot-container'>
      <div className='select-header'>Select Date For Appointment</div>
      <Accordion
        buttonsToShow={uniqueDates?.slice(0, 8).map((date, index) => (
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
            {filteredSlots?.map(slot => {
              // console.log(
              //   'slot.booking_status === 0',
              //   slot.booking_status === 0
              // );
              return (
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
              );
              // <h1>{convertTimeFormat(slot.time_from)}</h1>
            })}
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
      {modal ? <Modal setModal={setModal} /> : ''}

      {selectedDate && objData ? (
        <AppointmentCard
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          objData={objData}
          setModal={setModal}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default TimeSlots;

// useEffect(() => {
//   const fetchDoctorData = async () => {
//     try {
//       const response = await axios.post(
//         'https://aartas-qaapp-as.azurewebsites.net/aartas_uat/public/api/doctor',
//         { doctor_id: 2 }
//       );
//       // console.log('doctor data:', response.data.data[0].timeslots);
//       setSlotData(response.data.data[0].timeslots);
//       // setDoctorData(response.data.data[0]);
//     } catch (error) {
//       console.error('Error fetching doctor data:', error);
//     }
//   };

//   fetchDoctorData();
// }, []);

// console.log('doctors, loading', doctors.timeslots, loading);

// const uniqueDates = Array.from(
//   new Set((doctors.timeslots || []).map(slot => slot.date))
// );

// const filteredSlots = (doctors.timeslots || []).filter(
//   slot => slot.date === selectedDate
// );

// const uniqueDatesToday = Array.from(
//   new Set(doctors.timeslots?.map(slot => slot.date))
// );

// console.log('uniqueDatesToday', uniqueDatesToday[0] === todayy);

// const uniqueDates = Array.from(
//   new Set(doctors.timeslots?.map(slot => slot.date))
// );
