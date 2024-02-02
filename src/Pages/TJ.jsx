import { useState, useMemo, useCallback } from 'react';
import Shimmer from './components/Shimmer';
import UseClinicData from './Utils/UseClinicData';
import SelectDate from './components/SelectData';
import SelectTime from './components/SelectTime';
import {
  formatTimeTo12Hour,
  formatDateToCustomFormat,
} from './Utils/conversionUtils';

function App() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const { timeSlot, clinicData, setTimeSlot } = UseClinicData();

  // Memoized array of unique dates from the clinic data
  const uniqueDates = useMemo(
    () =>
      Array.from(new Set(clinicData.map(item => item.date))).map(
        (uniqueDate, index) => <p key={index}>{uniqueDate}</p>
      ),
    [clinicData]
  );

  const handleTimeSlots = useCallback(
    uniqueDate => {
      setTimeSlot(uniqueDate?.props?.children);
      setSelectedTimeSlot(null);
    },
    [setTimeSlot]
  );

  const handleTimeClick = useCallback((time, id) => {
    setSelectedTimeSlot(time);
    console.log('Selected Date & Time Id is', id);
  }, []);

  const filteredData = useMemo(
    () =>
      clinicData
        ?.filter(item => item.date === timeSlot)
        .map(item => ({ id: item.id, time_from: item.time_from })),
    [clinicData, timeSlot]
  );

  return (
    <div className='main-container'>
      {clinicData.length === 0 && timeSlot === '' ? (
        <Shimmer />
      ) : (
        <div className='container'>
          <div className='App'>
            <SelectDate
              handleTimeSlots={handleTimeSlots}
              formatDateToCustomFormat={formatDateToCustomFormat}
              timeSlot={timeSlot}
              uniqueDates={uniqueDates}
            />
            <SelectTime
              filteredData={filteredData}
              handleTimeClick={handleTimeClick}
              formatTimeTo12Hour={formatTimeTo12Hour}
              selectedTimeSlot={selectedTimeSlot}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
