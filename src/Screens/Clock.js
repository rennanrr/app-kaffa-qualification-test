import React, { Fragment, useEffect, useState } from 'react';
import clock from '../Assets/Icons/clock.svg';
import WorldTime from '../services/WorldClock';

const Clock = () => {
  const [localDate, setLocalDate] = useState('');
  const [utcDate, setUtcDate] = useState('');
  async function getTime() {
    try
    {
      await WorldTime.get(`/ip`)
        .then((res) => {
          setUtcDate(convertTime(res.data.utc_datetime));
          setLocalDate(convertTime(res.data.datetime));
        });
      }
    catch (err){
      console.log(err);
    }
  }
  function convertTime(dateTime) {
    let arrayDateTime = dateTime.split('T');
    let arrayDate = arrayDateTime[0].split('-');
    let arrayHour = arrayDateTime[1].split(':');
    let timeZone = arrayHour[2].substring(arrayHour[2].length-7);

    return ({
      year: arrayDate[0], 
      month: arrayDate[1], 
      day: arrayDate[2], 
      hour: arrayHour[0], 
      minute: arrayHour[1], 
      second: arrayHour[2].split('.')[0],
      timeZone
    });
  }
  useEffect(() => {
    getTime();
  },[])
  return (
    <Fragment>
      <div className="App">
        <h1>Queries server World Clock API</h1>
        <img src={clock} className="img-spining" alt="clock spinning" />
        <table>
          <td>
            <tr>
              World Clock UTC Now: 
            </tr>
            <tr>
              Year: {utcDate.year} 
            </tr>
            <tr>
              Month: {utcDate.month} 
            </tr>
            <tr>
              Day: {utcDate.day} 
            </tr>
            <tr>
              Hour: {utcDate.hour}h{utcDate.minute}min
            </tr>
          </td>
          <td>
            <tr>
            Local Time Now:
            </tr>
            <tr>
              Year: {localDate.year} 
            </tr>
            <tr>
              Month: {localDate.month} 
            </tr>
            <tr>
              Day: {localDate.day} 
            </tr>
            <tr>
              Hour: {localDate.hour}h{localDate.minute}min
            </tr>
          </td>
        </table>
      </div>
    </Fragment>
  )
}

export default Clock;