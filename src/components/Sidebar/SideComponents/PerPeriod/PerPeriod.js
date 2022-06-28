import axios from 'axios';
import React, { useEffect } from 'react';
import { AuthUse } from '../../../../providers/auth';
import service from '../../../../service/config';
import './PerPeriod.css';

const PerPeriod = () => {
  const {day, setDay} = AuthUse();
  const {nasaInfo, setNasaInfo} = AuthUse();

  useEffect(() => console.log(nasaInfo) ,[nasaInfo])
  
  const handleChange = (e) => {
    if (e.target.name === 'start') {
      setDay({...day, startDate: e.target.value, specificDay: ''})
    } else {
      setDay({...day, endDate: e.target.value, specificDay: ''})
    }
  }

  const handleClick = async () => {
    const initialString = service.apiUrl;
    const urlToFetch = `${initialString}start_date=${day.startDate}&end_date=${day.endDate}&api_key=gZzjJhflbq1i2Twhexw9PJCTT4v3Z57CbcTDhbh9`;

    try {
      const { data } = await axios.get(urlToFetch);
      setNasaInfo(data);
    } catch (error) {
      alert(error.response.data.msg)
    }
  }

  return (
    <section className='section-input-perperiod'>
      <input value={day.startDate} name='start' onChange={e => handleChange(e)} type='date'/>
      <input value={day.endDate} name='end' onChange={e => handleChange(e)} type='date'/>
      <button onClick={() => handleClick()} type="button" className="btn btn-info">Submit</button>
    </section>
  )
}

export default PerPeriod;