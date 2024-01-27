import { Routes, Route } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';

import './App.css';
// import AppointmentBooking from './Pages/AppointmentBooking';
import TestRadio from './Pages/TestRadio';
import TimeSlots from './Pages/TimeSlots';

function App() {
  return (
    <Routes>
      <Route path='/' element={<TimeSlots />} />
      {/* <Route path='AppointmentBooking' element={<AppointmentBooking />} />
      <Route path='TestRadio' element={<TestRadio />} />
      <Route path='timeslots' element={<TimeSlots />} /> */}
    </Routes>
  );
}

export default App;
