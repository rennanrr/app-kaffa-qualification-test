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
  const convertTime = (dateTime) => {
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

  const repeat = () => {
    getTime();
    setTimeout(() => {
      repeat();
    } , 60000);
  }

  useEffect(() => {
    repeat();
  },[])
  return (
    <Fragment>
      <div className="App">
        <h1>Queries server World Clock API</h1>
        <p>(Exercise 6)</p>
        <img src={clock} className="img-spining" alt="clock spinning" />
        <table>
            <thead>
              <tr>
                <th>
                  World Clock UTC 
                </th>
                <th>
                  Local Time
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Year: {utcDate.year} 
                </td>
                <td>
                  Year: {localDate.year} 
                </td>
              </tr>
              <tr>
                <td>
                  Month: {utcDate.month} 
                </td>
                <td>
                  Month: {localDate.month} 
                </td>
              </tr>
              <tr>
                <td>
                  Day: {utcDate.day} 
                </td>
                <td>
                  Day: {localDate.day}
                </td>
              </tr>
              <tr>
                <td>
                  Hour: {utcDate.hour}h{utcDate.minute}min
                </td>
                <td>
                Hour: {localDate.hour}h{localDate.minute}min
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default Clock;