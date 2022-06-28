import React, { useEffect } from 'react';
import { AuthUse } from '../../../../providers/auth';
import './SpecificDate.css';

const SpecificDate = () => {
  const {day, setDay} = AuthUse();
  useEffect(() => 
  console.log(day)
  ,[day])

  const handleChange = (e) => {
    setDay({startDate: '', endDate: '', specificDay: e.target.value})
  }

  return (
    <section className='section-input-specific'>
      <input onChange={e => handleChange(e)} type='date'/>
    </section>
  )
}

export default SpecificDate;