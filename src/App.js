import { Routes, Route } from 'react-router-dom';

import './App.css';
// import AppointmentBooking from './Pages/AppointmentBooking';

import TimeSlots from './Pages/TimeSlots';
// import Form from './Pages/Form';
// import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<TimeSlots />} />
      {/* <Route path='AppointmentBooking' element={<AppointmentBooking />} />
      <Route path='TestRadio' element={<TestRadio />} />
    <Route path='timeslots' element={<TimeSlots />} /> */}
      {/* <Route path='/home' element={<Home />} /> */}
    </Routes>
  );
}

export default App;
