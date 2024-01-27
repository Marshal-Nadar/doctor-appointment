import React, { useState } from 'react';

const radioData = [
  {
    id: 291939,
    doctor_id: 2,
    date: '2024-01-27',
    time_from: '18:00:00',
    time_to: '18:20:00',
    clinic_id: 1,
    clinic_rooms_id: 5,
    booking_status: 0,
    video_consult_booking_status: 0,
    created_at: '2022-10-28T23:04:46.000000Z',
    updated_at: '2022-10-28T23:04:46.000000Z',
    created_by: null,
    updated_by: null,
    status: 1,
  },
  {
    id: 291940,
    doctor_id: 2,
    date: '2024-01-27',
    time_from: '18:20:00',
    time_to: '18:40:00',
    clinic_id: 1,
    clinic_rooms_id: 5,
    booking_status: 0,
    video_consult_booking_status: 0,
    created_at: '2022-10-28T23:04:46.000000Z',
    updated_at: '2022-10-28T23:04:46.000000Z',
    created_by: null,
    updated_by: null,
    status: 1,
  },
  {
    id: 291941,
    doctor_id: 2,
    date: '2024-01-27',
    time_from: '18:40:00',
    time_to: '19:00:00',
    clinic_id: 1,
    clinic_rooms_id: 5,
    booking_status: 0,
    video_consult_booking_status: 0,
    created_at: '2022-10-28T23:04:46.000000Z',
    updated_at: '2022-10-28T23:04:46.000000Z',
    created_by: null,
    updated_by: null,
    status: 1,
  },
  {
    id: 291942,
    doctor_id: 2,
    date: '2024-01-27',
    time_from: '19:00:00',
    time_to: '19:20:00',
    clinic_id: 1,
    clinic_rooms_id: 5,
    booking_status: 0,
    video_consult_booking_status: 0,
    created_at: '2022-10-28T23:04:46.000000Z',
    updated_at: '2022-10-28T23:04:46.000000Z',
    created_by: null,
    updated_by: null,
    status: 1,
  },
  {
    id: 291943,
    doctor_id: 2,
    date: '2024-01-27',
    time_from: '19:20:00',
    time_to: '19:40:00',
    clinic_id: 1,
    clinic_rooms_id: 5,
    booking_status: 0,
    video_consult_booking_status: 0,
    created_at: '2022-10-28T23:04:46.000000Z',
    updated_at: '2022-10-28T23:04:46.000000Z',
    created_by: null,
    updated_by: null,
    status: 1,
  },
  {
    id: 291944,
    doctor_id: 2,
    date: '2024-01-27',
    time_from: '19:40:00',
    time_to: '20:00:00',
    clinic_id: 1,
    clinic_rooms_id: 5,
    booking_status: 0,
    video_consult_booking_status: 0,
    created_at: '2022-10-28T23:04:46.000000Z',
    updated_at: '2022-10-28T23:04:46.000000Z',
    created_by: null,
    updated_by: null,
    status: 1,
  },
  {
    id: 291927,
    doctor_id: 2,
    date: '2024-01-30',
    time_from: '18:00:00',
    time_to: '18:20:00',
    clinic_id: 1,
    clinic_rooms_id: 5,
    booking_status: 0,
    video_consult_booking_status: 0,
    created_at: '2022-10-28T23:04:45.000000Z',
    updated_at: '2022-10-28T23:04:45.000000Z',
    created_by: null,
    updated_by: null,
    status: 1,
  },
  {
    id: 291928,
    doctor_id: 2,
    date: '2024-01-30',
    time_from: '18:20:00',
    time_to: '18:40:00',
    clinic_id: 1,
    clinic_rooms_id: 5,
    booking_status: 0,
    video_consult_booking_status: 0,
    created_at: '2022-10-28T23:04:45.000000Z',
    updated_at: '2022-10-28T23:04:45.000000Z',
    created_by: null,
    updated_by: null,
    status: 1,
  },
  {
    id: 291929,
    doctor_id: 2,
    date: '2024-01-30',
    time_from: '18:40:00',
    time_to: '19:00:00',
    clinic_id: 1,
    clinic_rooms_id: 5,
    booking_status: 0,
    video_consult_booking_status: 0,
    created_at: '2022-10-28T23:04:45.000000Z',
    updated_at: '2022-10-28T23:04:45.000000Z',
    created_by: null,
    updated_by: null,
    status: 1,
  },
  {
    id: 291930,
    doctor_id: 2,
    date: '2024-01-30',
    time_from: '19:00:00',
    time_to: '19:20:00',
    clinic_id: 1,
    clinic_rooms_id: 5,
    booking_status: 0,
    video_consult_booking_status: 0,
    created_at: '2022-10-28T23:04:45.000000Z',
    updated_at: '2022-10-28T23:04:45.000000Z',
    created_by: null,
    updated_by: null,
    status: 1,
  },
];
const TestRadio = () => {
  console.log('radioData', radioData);
  const [selectedDate, setSelectedDate] = useState(null);
  const [wording, setWording] = useState('');

  const handleDateSelection = e => {
    // console.log('e.target', e.target);
    setSelectedDate();
  };
  console.log('wording', wording);

  return (
    <div className='select-date-main'>
      {radioData.map(item => {
        // console.log('item', item);
        return (
          <label key={item}>
            <input
              type='radio'
              value={item.date}
              // checked={item.date}
              onChange={e => handleDateSelection(e)}
              className='radio-input'
            />
            {item.date}
          </label>
        );
      })}
      <dd>Wording</dd>
      <div>
        <div onChange={e => setWording(e.target.value)}>
          {radioData.map(item => {
            // console.log('item', item);
            return (
              <label key={item}>
                <input
                  type='radio'
                  value={item.date}
                  checked={wording === item.date}
                  // checked={item.date}
                  // onChange={e => handleDateSelection(e)}
                  className='radio-input'
                />
                {item.date}
              </label>
            );
          })}
          <label>
            <input
              type='radio'
              value='United States'
              name='wording'
              checked={wording === 'United States'}
            />
            United States
          </label>
          <label>
            <input
              type='radio'
              value='British'
              name='wording'
              checked={wording === 'British'}
            />
            British
          </label>
        </div>
      </div>
      {/* {doctorData.timeslots
        .map(slot => slot.date)
        .map((date, i) => {
          console.log('selectedDate === date', selectedDate === date);
          return (
            <label key={date + i}>
              <input
                type='radio'
                value={date}
                checked={selectedDate === date}
                onChange={() => handleDateSelection(date)}
                className='radio-input'
              />
              {convertDateFormat(date)}
            </label>
          );
        })} */}
    </div>
  );
};

export default TestRadio;
