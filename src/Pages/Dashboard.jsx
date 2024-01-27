import axios from 'axios';
import React, { useEffect, useState } from 'react';

let data = JSON.stringify({
  doctor_id: 2,
});

let config = {
  method: 'post',
  url: 'https://aartas-qaapp-as.azurewebsites.net/aartas_uat/public/api/doctor',
  headers: {
    'Content-Type': 'application/json',
  },
  data: data,
};

const Dashboard = () => {
  const [details, setDetails] = useState();
  useEffect(() => {
    axios
      .request(config)
      .then(response => {
        console.log(
          response.data.data[0].timeslots.map(date => {
            return date.date;
          })
        );
        // setDetails(response.data);
        setDetails(response.data.data[0].timeslots.map(date => date.date));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log('details', details);
  const handleDate = val => {
    console.log('valvalval', val);
  };
  return (
    <>
      <main className='app-main'>
        <h1>Dashboard</h1>
        <section className='select-date-container'>
          <div className='select-header'>Select Date</div>
          <div className='select-date-mainn'>
            {details &&
              details.map(date => {
                return (
                  <div
                    className='btn-setect-notactive'
                    onClick={() => {
                      handleDate(date);
                    }}
                  >
                    {date}
                  </div>
                );
              })}
            {/* <div className='btn-setect-active'>jhs</div>
            <div className='btn-setect-notactive'>jhs</div>
            <div className='btn-setect-notactive'>jhs</div>
            <div className='btn-setect-notactive'>jhs</div>
            <div className='btn-setect-notactive'>jhs</div> */}
          </div>
        </section>
        <section>
          <div className='time-slot-header'>
            <div className='select-header'>Select Time Slot</div>
            <div className='slots-available'>10 Slots available</div>
          </div>
          <div className='select-date-main'>
            <div className='btn-setect-active'>jhs</div>
            <div className='btn-setect-notactive'>jhs</div>
            <div className='btn-setect-notactive'>jhs</div>
            <div className='btn-setect-notactive'>jhs</div>
            <div className='btn-setect-notactive'>jhs</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
