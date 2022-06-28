import axios from 'axios';
import React from 'react';
import { AuthUse } from '../../../../providers/auth';
import service from '../../../../service/config';
import './SpecificDate.css';

const SpecificDate = () => {
  const {day, setDay} = AuthUse();
  const {setNasaInfo} = AuthUse();

  const handleChange = (e) => {
    setDay({startDate: '', endDate: '', specificDay: e.target.value})
  }

  const handleClick = async () => {
    const initialString = service.apiUrl;
    const urlToFetch = `${initialString}date=${day.specificDay}&api_key=gZzjJhflbq1i2Twhexw9PJCTT4v3Z57CbcTDhbh9`;

    try {
      const { data } = await axios.get(urlToFetch);
      setNasaInfo([data]);
    } catch (error) {
      alert(error.response.data.msg)
    }
  }

  return (
    <section className='section-input-specific'>
      <input onChange={e => handleChange(e)} type='date'/>
      <button onClick={() => handleClick()} type="button" className="btn btn-info">Submit</button>
    </section>
  )
}

export default SpecificDate;