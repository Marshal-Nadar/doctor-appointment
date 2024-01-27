import React, { useState } from 'react';
import { convertDateFormat } from '../utils/convertDateFormat';

const DateSelector = ({ dates, selectedDate, onSelectDate }) => {
  console.log('onSelectDate', onSelectDate);
  return (
    <div>
      <label>Select Date:</label>
      <div className='select-date-main'>
        {dates.map((date, i) => {
          console.log('date + i', date, dates);
          return (
            <button
              key={date + i}
              className='btn-setect-notactive'
              onClick={() => onSelectDate(date)}
            >
              {convertDateFormat(date)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DateSelector;

// const DateSelector = ({ dates, onSelectDate }) => {
//   const convertedDate = convertDateFormat('2024-01-26');
//   console.log(convertedDate, dates.length);
//   // const count = dates.reduce((acc, curr) => acc + curr, 0);
//   console.log('countcount', dates, onSelectDate);

//   const [gender, setGender] = useState('Male');

//   function onChangeValue(event) {
//     setGender(event.target.value);
//     console.log(event.target.value);
//   }

//   return (
//     <div>
//       <label>Select Date:</label>
//       <div className='select-date-main'>
//         {/* {dates.map((date, i) => {
//           // console.log('date + i', date + i);
//           return (
//             <button
//               key={date + i}
//               className='btn-setect-notactive'
//               onClick={() => onSelectDate(date)}
//             >
//               {convertDateFormat(date)}
//             </button>
//           );
//         })} */}
//       </div>
//        <div className='select-date-main'>
//      {dates.map((date, i) => {
//           console.log('selectedDate === date', selectedDate === date);
//           return (
//             <label key={date + i}>
//               <input
//                 type='radio'
//                 value={date}
//                 checked={selectedDate === date}
//                 onChange={() => onSelectDate(date)}
//                 className='radio-input'
//               />
//               {convertDateFormat(date)}
//             </label>
//           );
//         })}
//       </div>
//       <div onChange={onChangeValue}>
//         <input
//           type='radio'
//           value='Male'
//           name='gender'
//           checked={gender === 'Male'}
//         />{' '}
//         Male
//         <input
//           type='radio'
//           value='Female'
//           name='gender'
//           checked={gender === 'Female'}
//         />{' '}
//         Female
//         <input
//           type='radio'
//           value='Other'
//           name='gender'
//           checked={gender === 'Other'}
//         />{' '}
//         Other
//       </div>
//     </div>
//   );
// };

// export default DateSelector;
